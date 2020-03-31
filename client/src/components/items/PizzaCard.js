import React from "react";

function PizzaCard(){

    return (
        <div className="col-lg-4 col-md-5 col-xs-6 mb-5">
        <div className="card">
          <img src="http://placehold.it/100x100" className="card-img-top" alt="placeholder"></img>
          <div className="card-body">
            <h5 className="card-title">pizza</h5>
            <p className="card-text"> This pizza has pizza in it</p>
          </div>
        </div>
      </div>
    );

}

export default PizzaCard;