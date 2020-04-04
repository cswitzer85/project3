import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import OrderForm from "./pages/OrderForm";
import SignupForm from "./pages/SignupForm";
import LoginForm from "./pages/LoginForm";
import Header from "./items/Header";
import PastOrders from "./pages/PastOrders";
import API from "../utils/API";

function MainContentContainer() {
  const [specialtyPizza, setSpecialtyPizza] = useState([]);

  const [Orders, setOrders] = useState({
    pizzas: [
      {
        size: '14"',
        name: "Choose One",
      },
    ],
    num: 1,
    delivery: true,
    finalize: false,
  });

  useEffect(() => {
    //Load necessary info from database
    API.getRecipes()
      .then((res) => setSpecialtyPizza(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/LoginForm" component={LoginForm} />
          <Route exact path="/SignupForm" component={SignupForm} />
          <Route
            exact
            path="/OrderForm"
            render={(props) => (
              //Sends in specialty pizza info for use in order forms
              <OrderForm
                {...props}
                Orders={Orders}
                setOrders={setOrders}
                specialtyPizza={specialtyPizza}
                setSpecialtyPizza={setSpecialtyPizza}
              />
            )}
          />
          <Route exact path="/pizza/orders" component={PastOrders} />
          <Route component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default MainContentContainer;
