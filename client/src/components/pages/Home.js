import React from "react";
import PizzaCard from "../items/PizzaCard";

const Home = () => (
  <div>
    <div className="container mt-4" style={{border: "2px dotted red"}}>

      {/* Login and Signup buttons */}
      <div className="row justify-content-center">
        <h3 className="text-center">Log in or Sign Up to order</h3>
      </div>
      <div className="row justify-content-center">
        <button className="btn btn-danger mr-5">
          Login
        </button>
        <button className="btn btn-danger">
          Sign Up
        </button>
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

export default Home;
