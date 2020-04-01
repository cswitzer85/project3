import React, { useState } from "react";
import { render } from "@testing-library/react";

function OrderForm() {

  const [orders, setOrders] = useState({
    num: 1,
    pizzas: [{
      size: "",
      name: ""
    }]
  });

  let finalize = false;

  const onSubmit = (event) => {
    event.preventDefault();
  }

  const form =
    (
      <div className="row">
      <div className="col-md-6 mt-5 mx-auto">

        <form noValidate onSubmit={onSubmit}>

          {/* pizza size */}
          <div className="form-group">
            <label>Size</label>
            <select className="form-control">
              <option selected>14"</option>
              <option>18"</option>
            </select>
          </div>

          {/* pizza type */}
          <div className="form-group">
            <label>Type</label>
            <select className="form-control">
              <option selected>Choose one</option>
              {/* Add options from database here */}
              {/* placeholder options */}
              <option>pepperoni</option>
              <option>cheese</option>
            </select>
          </div>

          <div className="row justify-content-around">
            <button className="btn btn-success">Add another pizza</button>
            <button className="btn btn-primary" type="submit">Finalize Order</button>
          </div>

        </form>

      </div>
    </div>
    );

  return (
    <div className="container">
      {finalize ? <p>test</p> : form}
    </div>
  );
}

export default OrderForm;
