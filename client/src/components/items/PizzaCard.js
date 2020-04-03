import React from "react";
import "./PizzaCard.css"

function PizzaCard(props){

    return (
        <div className="col-lg-4 col-md-5 col-xs-6 mb-5">
        <div className="card">
          <img src={props.image || "http://placehold.it/200x200"} className="card-img-top" alt="placeholder"></img>
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.description}</p>
          </div>
        </div>
      </div>
    );

}

export default PizzaCard;