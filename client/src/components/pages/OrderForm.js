import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import PizzaForm from "../items/PizzaForm";
import axios from "axios";
import API from "../../utils/API";


function OrderForm({ Orders, setOrders, specialtyPizza, setSpecialtyPizza }) {

  const [User, setUser] = useState({});

  useEffect(() => {
    API.getUserData()
      .then(res => setUser(res.data))
      .catch(err => console.log(err));
  }, []);

  const onSubmit = event => {
    event.preventDefault();
    setOrders({ ...Orders, finalize: true });
  };

  const handleChange = event => {
    event.preventDefault();
    const dataid = event.target.dataset.id;
    const temp = Orders.pizzas.slice(0);
    temp[dataid] = {
      ...temp[dataid],
      [event.target.name]: event.target.value
    };
    console.log(temp[dataid]);
    setOrders({ ...Orders, pizzas: temp });
  };

  const goBack = event => {
    event.preventDefault();
    setOrders({ ...Orders, finalize: false });
  };

  const handleAddPizza = event => {
    event.preventDefault();
    const temp = Orders.pizzas.slice(0);
    temp.push({
      size: '14"',
      name: "Choose One"
    });
    setOrders({ ...Orders, num: Orders.num + 1, pizzas: temp });
  };

  const updateDelivery = event => {
    if (event.target.id === "delivery" && !Orders.delivery) {
      setOrders({ ...Orders, delivery: true });
    } else if (event.target.id === "pickup" && Orders.delivery) {
      setOrders({ ...Orders, delivery: false });
    }
    console.log(Orders.delivery);
  };

  const finalizeOrder = event => {
    //finish order here
    let pizzaString = "";
    Orders.pizzas.map((pizza) => {
      if(pizza.name !== "Choose One" && pizza.name){
        pizzaString += ` ${pizza.size} ${pizza.name} `;
      }
      return null;
    });
    axios
      .post("/pizza/orders", {
        name: `${User.firstName} ${User.lastName}`,
        userOrder: pizzaString,
        userAddress: `${User.streetAddress}, ${User.city} ${User.zipcode}`,
        delivery: Orders.delivery,
      })
      .then(() => console.log("Order submitted!"))
      .then(() => (window.location.href = "/pizza/orders"))
      .catch((err) => console.log(err));

  };


  const form = (
    <div>

    <div className="row">
      <div className="col-md-6 mt-5 mx-auto">
        <form noValidate onSubmit={onSubmit}>
          {/* Pizza Form takes  id, sizeValue, typeValue, handleChange, pizzas*/}
          {Orders.pizzas.map((pizza, index) => (
            <PizzaForm
              id={index}
              sizeValue={pizza.size}
              typeValue={pizza.name}
              handleChange={handleChange}
              pizzas={specialtyPizza}
            />
          ))}

          <div className="row justify-content-around">
            <Link to="/">
              <button className="btn btn-primary" style={{width: "118px"}}>
                Menu
              </button>
            </Link>
            <button className="btn btn-success" onClick={handleAddPizza}>
              Add Another Pizza
            </button>
            <button className="btn btn-primary" type="submit">
              Review Order
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );

  const finalizeForm = (
    <div>
      <h2 className="text-center">Your Order</h2>

      {/* Display current order */}
      {Orders.pizzas.map((pizza, index) => {
        if (pizza.name !== "Choose One") {
          return (
            <h4 className="row justify-content-center">
              {pizza.size} {pizza.name}
            </h4>
          );
        }
        return null;
      })}

      {/* Delivery or Pickup */}
      <h5 className="text-center">Delivery or Pickup</h5>
      <div className="row justify-content-center">
        <div className="form-check">
          <input
            className="form-check-input"
            onClick={updateDelivery}
            name="delivery"
            type="radio"
            id="delivery"
            checked={Orders.delivery}
          />
          <label for="delivery">Delivery</label>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="form-check">
          <input
            className="form-check-input"
            onClick={updateDelivery}
            name="delivery"
            type="radio"
            id="pickup"
            checked={!Orders.delivery}
          />
          <label for="pickup">Pickup</label>
        </div>
      </div>

      {/* Go back button */}
      <div className="row justify-content-center">
        <button className="btn btn-danger mr-5" onClick={goBack}>
          Edit Order
        </button>
        <button className="btn btn-primary ml-5" onClick={finalizeOrder}>
          Submit Order
        </button>
      </div>
    </div>
  );

  return (
    <div className="container">{Orders.finalize ? finalizeForm : form}</div>
  );
}

export default OrderForm;
