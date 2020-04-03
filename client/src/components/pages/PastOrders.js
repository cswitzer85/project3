import React, { useState, useEffect } from "react";
import API from "../../utils/API";

function PastOrders() {
  const [orders, setOrders] = useState([
    1
  ]);

  useEffect(() => {
    API.getOrders()
      .then((res) => setOrders(res.data))
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className="container">

      <h2>Past Orders</h2>
      {orders[0] !== 1
        ? orders.map((order) => (
            <p>{
              `${order.id}. ${order.name} ${order.user_order} ${order.user_address} ${order.delivery} ${order.createdAt}`}
            </p>
          ))
        : null}
    </div>
  );
}

export default PastOrders;
