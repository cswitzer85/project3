import React, { useState, useEffect } from "react";
//import { render } from "@testing-library/react";
import PizzaForm from "../items/PizzaForm";
import axios from "axios";
import API from "../../utils/API"
import Axios from "axios";


function OrderForm({ orders, setOrders, specialityPizza, setSpecialityPizza }) {


  const onSubmit = event => {
    event.preventDefault();
    setOrders({ ...orders, finalize: true });
    // axios.post ("/orders", {
    //   orders: orders
    // })
  };

  const handleChange = event => {
    event.preventDefault();
    // destructuring doesn't work here for some reason
    // const [name, value] = event.target;
    const dataid = event.target.dataset.id;
    const temp = orders.pizzas.slice(0);
    temp[dataid] = {
      ...temp[dataid],
      [event.target.name]: event.target.value
    };
    console.log(temp[dataid]);
    setOrders({ ...orders, pizzas: temp });
  };

  const goBack = event => {
    event.preventDefault();
    setOrders({ ...orders, finalize: false });
  };

  const handleAddPizza = event => {
    event.preventDefault();
    const temp = orders.pizzas.slice(0);
    temp.push({
      size: '14"',
      name: "Choose One"
    });
    setOrders({ ...orders, num: orders.num + 1, pizzas: temp });
  };

  const updateDelivery = event => {
    if (event.target.id === "delivery" && !orders.delivery) {
      setOrders({ ...orders, delivery: true });
    } else if (event.target.id === "pickup" && orders.delivery) {
      setOrders({ ...orders, delivery: false });
    }
    console.log(orders.delivery);
  };

  const finalizeOrder = event => {
    //finish order here
    let pizzaString = "";
    orders.pizzas.map((pizza) => {
      if(pizza.name !== "Choose One" && pizza.name){
        pizzaString += ` ${pizza.size} ${pizza.name} `;
      }
      return null;
    });
    console.log(pizzaString);
    console.log(orders);
    axios.post("/pizza/orders",  {
      name: "",
      ingredients: "",
      user_order: pizzaString,
      user_address: "",
      delivery: (orders.delivery)
    })
    .then(() => console.log("Order submitted!"))
    .catch((err) => console.log(err));

  };


  const form = (
    <div className="row">
      <div className="col-md-6 mt-5 mx-auto">
        <form noValidate onSubmit={onSubmit}>
          {/* Pizza Form takes  id, sizeValue, typeValue, handleChange, pizzas*/}
          {orders.pizzas.map((pizza, index) => (
            <PizzaForm
              id={index}
              sizeValue={pizza.size}
              typeValue={pizza.name}
              handleChange={handleChange}
              pizzas={specialityPizza}
            />
          ))}

          <div className="row justify-content-around">
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
  );

  const finalizeForm = (
    <div>
      <h2 className="text-center">Your Order</h2>

      {/* Display current order */}
      {orders.pizzas.map((pizza, index) => {
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
            checked={orders.delivery}
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
            checked={!orders.delivery}
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
    <div className="container">{orders.finalize ? finalizeForm : form}</div>
  );
}

export default OrderForm;
