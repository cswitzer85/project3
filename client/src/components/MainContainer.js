import React, { Component, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import Secondary from "./pages/Secondary";
import Tertiary from "./pages/ Tertiary";
import Quaternary from "./pages/Quaternary";

function MainContentContainer(){
  const [specialityPizza, setSpecialityPizza] = useState({});

  useEffect(() => {
    //load needed info from database
  }, []);


    return (
      <div>
        <Router>
          <NavTabs/>

          <Switch>
            <Route exact path="/Secondary" component={Secondary}/>
            <Route exact path="/Tertiary" component={Tertiary}/>
            <Route exact path="/Quaternary" component={Quaternary}/>
            <Route component={Home}/>
          </Switch>
        </Router>
      </div>
    );
}

export default MainContentContainer;
