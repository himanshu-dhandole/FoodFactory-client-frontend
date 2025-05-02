import React, { useContext, useEffect, useState } from "react";
import "./Myorders.css";
import { StoreContext } from "../Context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/assets";

function Myorders() {
  const { token } = useContext(StoreContext);
  const [data, setdata] = useState([]);

  const fetchOrders = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/orders", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setdata(res.data);
    } catch (err) {
      console.error("Failed to fetch orders", err);
    }
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="container my-5">
      <h3 className="text-center mb-4">My Orders</h3>
      <div className="card p-3">
        <div className="table-responsive">
          <table className="table table-bordered table-striped align-middle">
            <thead className="table-dark">
              <tr>
                <th>Sr.</th>
                <th>Items</th>
                <th>Total Amount</th>
                <th>Total Quantity</th>
                <th>Status</th>
                <th>Refresh</th>
              </tr>
            </thead>
            <tbody>
              {data.map((order, index) => (
                <tr key={index}>
                  <td>
                   {index + 1}.
                  </td>
                  <td>
                    {order.orderedItems.map((item, i) => (
                      <span key={i}>
                        {item.name} x {item.quantity}
                        {i < order.orderedItems.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </td>
                  <td>₹{order.amount}</td>
                  <td>{order.orderedItems.length}</td>
                  <td className="fw-bold text-capitalize">{order.orderStatus}</td>
                  <td>
                    <button className="btn btn-sm btn-warning" onClick={fetchOrders}>
                      <i className="bi bi-arrow-clockwise"></i>
                    </button>
                  </td>
                </tr>
              ))}
              {data.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center text-muted py-4">
                    No orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Myorders;
