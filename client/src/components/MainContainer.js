import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import OrderForm from "./pages/OrderForm";
import SignupForm from "./pages/SignupForm";
import LoginForm from "./pages/LoginForm";
import Header from "./items/Header";
import PastOrders from "./pages/PastOrders";
import API from "../utils/API";

function MainContentContainer(){

  const [specialityPizza, setSpecialityPizza] = useState(
    []
  );


    const [Orders, setOrders] = useState({
      pizzas: [
        {
          size: '14"',
          name: "Choose One"
        }
      ],
      num: 1,
      delivery: true,
      finalize: false
    });


  useEffect(() => {
   //load needed info from database
    API.getRecipes()
      .then(res => setSpecialityPizza(res.data))
      .catch(err => console.log(err));
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
                //Sends in specialities pizza info for use in order forms
                <OrderForm
                  {...props}
                  Orders={Orders}
                  setOrders={setOrders}
                  specialityPizza={specialityPizza}
                  setSpecialityPizza={setSpecialityPizza}
                />
              )}
            />
            <Route exact path="/pizza/orders" component={PastOrders}/>
            <Route component={Home} />
          </Switch>
        </Router>
      </div>
    );
}

export default MainContentContainer;
