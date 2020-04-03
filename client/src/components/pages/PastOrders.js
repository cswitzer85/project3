import React, { useState, useEffect } from "react";
import API from "../../utils/API";

function PastOrders() {
  const [Orders, setOrders] = useState([
    1
  ]);

  useEffect(() => {
    API.getOrders()
      .then((res) => setOrders(res.data))
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className="container">

      <h2>Inbound Orders</h2> 
      {Orders[0] !== 1
        ? Orders.map((order) => (
            <p>{
              `${order.id}. ${order.name} ${order.userOrder} ${order.userAddress} ${order.delivery} ${order.createdAt}`}
            </p>
          ))
        : null}
    </div>
  );
}

export default PastOrders;
