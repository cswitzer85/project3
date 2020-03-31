import React from "react";
import { Link, useLocation } from "react-router-dom";
import PizzaCard from "../items/PizzaCard";

function Home() {
  
  const location = useLocation();

  return(
  <div>
    <div className="container mt-4" style={{border: "2px dotted red"}}>

      {/* Login and Signup buttons */}
      <div className="row justify-content-center">
        <h3 className="text-center">Log in or Sign Up to order</h3>
      </div>
      <div className="row justify-content-center">
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

      {/* Speciality Pizzas */}
      <div className="row justify-content-center">
        <h3 className="text-center">Speciality Pizzas</h3>
      </div>
      <div className="row justify-content-around">

        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>

      </div>
      {/* Ingredient List */}

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Ingredients</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>

    </div>
  </div>

);
}

export default Home;
