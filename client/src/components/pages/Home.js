import React, {useEffect, useState, Component} from "react";
import { Link, useLocation } from "react-router-dom";
import PizzaCard from "../items/PizzaCard";
import API from "../../utils/API";

function Home() {
  
  const location = useLocation();

  const [specialtyPizza, setSpecialityPizza] = useState();

  const [User, setUser] = useState({});


  useEffect(() => {
    API.getRecipes()
      .then(res => setSpecialityPizza(res.data))
      .catch(err => console.log(err));

    API.getUserData()
      .then(res => setUser(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleLogout = (event) => {
    event.preventDefault();
    API.logout()
      .then(window.location.reload())
      .catch(err => console.log(err));
  }

  const guestButtons = () => {
    return(
      <div>
      <Link to="/LoginForm">
        <button className="btn btn-danger mr-5">
          Login
        </button>
      </Link>
      <Link to="SignupForm">
        <button className="btn btn-danger">
          Sign Up
        </button>
      </Link>
      </div>
    )
  }

  const userButtons = () => {
    return(
      <div>
      <Link to="/OrderForm">
        <button className="btn btn-danger mr-5">
          Order
        </button>
      </Link>
      <button className="btn btn-danger" onClick={handleLogout}>
        Log Out
      </button>
      </div>
    );
  }

  return(
  <div>
    <div className="container mt-4">

      {/* Login and Signup buttons */}
      <div className="row justify-content-center">
        {/* change email to name when we have access to that */}
        <h3 className="text-center">{User.email? `Welcome ${User.FirstName}` : "Log in or Sign Up to order"}</h3>
      </div>
      <div className="row justify-content-center">
        {User.email? userButtons() : guestButtons()}
      </div>

      {/* Speciality Pizzas */}
      <div className="row justify-content-center">
        <h3 className="text-center mt-4 mb-3">Specialty Pizzas</h3>
      </div>
      <div className="row justify-content-around">

      {specialtyPizza ? specialtyPizza.map((pizza) => <PizzaCard key={pizza.name} image={pizza.image} name={pizza.name} description={pizza.description}/>) : null}

      </div>
      {/* Ingredient List -- unused*/}

      {/* <table className="table">
        <thead>
          <tr>
            <th scope="col">Ingredients</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table> */}

    </div>
  </div>

);
}

export default Home;
