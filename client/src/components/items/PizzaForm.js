import React from "react";

function PizzaForm(props) {


    return (
      <div>

        <h2>Pizza {props.id + 1}</h2>

        <div>
          {/* pizza size */}
          <div className="form-group">
            <label>Size</label>
            <select name="size" data-id={props.id} value={props.sizeValue} onChange={props.handleChange} className="form-control">
              <option key="1">14"</option>
              <option key="2">18"</option>
            </select>
          </div>

          {/* pizza type */}
          <div className="form-group">
            <label>Type</label>
            <select name="name" data-id={props.id} value={props.typeValue} onChange={props.handleChange} className="form-control">
              <option key="1">Choose One</option>
              {/* Add options from database here */}
              {props.pizzas.map((pizza, index) => <option key={index+2}>{pizza}</option>)}
            </select>
          </div>
        </div>
      </div>
    );
}

export default PizzaForm;