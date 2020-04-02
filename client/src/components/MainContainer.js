import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import InfoForm from "./pages/InfoForm";
import OrderForm from "./pages/OrderForm";
import Quaternary from "./pages/Quaternary";
import SignupForm from "./pages/SignupForm";
import LoginForm from "./pages/LoginForm";
import API from "../utils/API";

function MainContentContainer(){

  const [specialityPizza, setSpecialityPizza] = useState(
    []
  );


    const [orders, setOrders] = useState({
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
          <NavTabs />

          <Switch>
            <Route exact path="/InfoForm" component={InfoForm} />
            <Route exact path="/Quaternary" component={Quaternary} />
            <Route exact path="/LoginForm" component={LoginForm} />
            <Route exact path="/SignupForm" component={SignupForm} />
            <Route exact path="/OrderForm" render={props => 
            (
              //Sends in specialities pizza info for use in order forms
                <OrderForm
                  {...props}
                  orders={orders}
                  setOrders={setOrders}
                  specialityPizza={specialityPizza}
                  setSpecialityPizza={setSpecialityPizza}
                />
              )}
            />
            <Route component={Home} />
          </Switch>
        </Router>
      </div>
    );
}

export default MainContentContainer;
