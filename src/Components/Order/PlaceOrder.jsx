import React, { useContext, useState } from "react";
import "./PlaceOrder.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../Context/StoreContext";
import axios from "axios";
import { toast } from "react-toastify";
import { RAZORPAY_KEY } from "../Context/constant";
import { useNavigate } from "react-router-dom";
// import Razorpay from "razorpay";
function PlaceOrder() {
  const { quantity, foodlist, token , setQuantity } = useContext(StoreContext);
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    contact: "",
    city: "",
    state: "",
    zipCode: "",
  });
 // cart items
 const cartItems = foodlist.filter((food) => quantity[food.id] > 0);

 // calculating total
 const subTotal = cartItems.reduce(
   (acc, food) => acc + food.price * quantity[food.id],
   0
 );

 // shipping charge and tax
 const shippingCharge = subTotal === 0 ? 0.0 : 40;
 const tax = subTotal * 0.02;

 // totall Amount
 const totalAmount = subTotal + tax + shippingCharge;

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const verifyPayment = async (razorpayResponse) => {
    const paymentData = {
      razorpay_payment_id: razorpayResponse.razorpay_payment_id,
      razorpay_order_id: razorpayResponse.razorpay_order_id,
      razorpay_signature: razorpayResponse.razorpay_signature,
    };

    try {
      const res = await axios.post(
        "http://localhost:8080/api/orders/verify",
        paymentData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (res.status === 200) {
        toast.success("Payment Successful !");
        await clearCart();
        navigate("/myorders");
      } else {
        toast.error("Payment Unuccessful !");
        navigate("/myorders");
      }
    } catch (error) {
      console.log("error", error);
      toast.error("backend error !");
    }
  };

  const deleteOrder = async (orderId) => {
    try {
      await axios.delete(`http://localhost:8080/api/orders/${orderId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      toast.error("Cant delete order !");
      console.log("error : "  , error) ;
    }
  };

  const clearCart = async () => {
    try {
      await axios.delete("http://localhost:8080/api/cart/clear", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setQuantity({}) ;
    } catch (error) {
      toast.error("Cant clear cart !");
      console.log("error : "  , error) ;
    }
  };

  const initiateRazorPayDialogBox = (order) => {
    const options = {
      key: RAZORPAY_KEY,
      amount: order.amount,
      currency: "INR",
      name: order.name,
      description: order.description,
      order_id: order.razorPayOrderId,
      handler: async function (razorpayResponse) {
        await verifyPayment(razorpayResponse);
      },
      prefill: {
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        contact: data.contact,
      },
      theme: { color: "#3399cc" },
      modal: {
        ondismiss: async function () {
          toast.error("Payment was cancelled");
          await deleteOrder(order.id);
        },
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const orderData = {
      address: `${data.firstName} ${data.lastName} , ${data.address} , ${data.state} , ${data.city} , ${data.zipCode}`,
      email: data.email,
      contact: data.contact,
      orderedItems: cartItems.map((item) => ({
        foodId: item.foodId,
        name: item.name,
        quantity: quantity[item.id],
        price: item.price,
        description: item.description,
      })),
      amount: totalAmount.toFixed(2),
      orderStatus: "Preparing",
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/orders/create",
        orderData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.status === 201 && response.data.razorPayOrderId) {
        //initiate the razorpay dialog boxxx

        initiateRazorPayDialogBox(response.data);
      } else {
        toast.error("Something went wrong , Try again !");
      }
    } catch (error) {
      console.log("error", error);
      toast.error("Backend API error !");
    }
  };

 
  return (
    <>
      <div>
        <div className="container">
          <main>
            <div className="py-5 text-center">
              <img
                className="d-block mx-auto mb-4"
                src={assets.logo}
                alt="logo"
                height="98px"
                width="98px"
              />
            </div>
            <div className="row g-5">
              <div className="col-md-5 col-lg-4 order-md-last">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-primary">Your cart</span>
                  <span className="badge bg-primary rounded-pill">
                    {cartItems.length}
                  </span>
                </h4>
                <ul className="list-group mb-3">
                  {cartItems.map((item) => (
                    <li
                      key={item.id}
                      className="list-group-item d-flex justify-content-between lh-sm"
                    >
                      <div>
                        <h6 className="my-0">{item.name}</h6>
                        <small className="text-body-secondary">
                          Qty : {quantity[item.id]}
                        </small>
                      </div>
                      <span className="text-body-secondary">₹{item.price}</span>
                    </li>
                  ))}
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0 text-primary">Shipping : </h6>
                    </div>
                    <span className="text-body-secondary">
                      {" "}
                      + ₹{subTotal === 0 ? 0.0 : shippingCharge.toFixed(2)}
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0 text-primary">Tax : </h6>
                    </div>
                    <span className="text-body-secondary">
                      + ₹{tax.toFixed(2)}
                    </span>
                  </li>
                  <hr />
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Total (INR)</span>
                    <strong>₹{totalAmount.toFixed(2)}</strong>
                  </li>
                </ul>
              </div>
              <div className="col-md-7 col-lg-8">
                <h4 className="mb-3">Billing address</h4>
                <form className="needs-validation" onSubmit={onSubmitHandler}>
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <label htmlFor="firstName" className="form-label">
                        First name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        placeholder=""
                        name="firstName"
                        onChange={onChangeHandler}
                        value={data.firstName}
                        required
                      />
                    </div>

                    <div className="col-sm-6">
                      <label htmlFor="lastName" className="form-label">
                        Last name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        placeholder=""
                        name="lastName"
                        onChange={onChangeHandler}
                        value={data.lastName}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <div className="input-group has-validation">
                        <span className="input-group-text">
                          <i className="bi bi-box"></i>
                        </span>

                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="you@example.com"
                          name="email"
                          onChange={onChangeHandler}
                          value={data.email}
                          required
                        />
                      </div>
                    </div>

                    {/* <div className="col-12">
                      <label htmlFor="email" className="form-label">
                        Email{" "}
                        <span className="text-body-secondary">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="you@example.com"
                      />
                      
                    </div> */}

                    <div className="col-12">
                      <label htmlFor="address" className="form-label">
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="1234 Main St"
                        name="address"
                        onChange={onChangeHandler}
                        value={data.address}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label htmlFor="address2" className="form-label">
                        Contact{" "}
                        {/* <span className="text-body-secondary">(Optional)</span> */}
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="phone"
                        placeholder="+ 91"
                        name="contact"
                        onChange={onChangeHandler}
                        value={data.contact}
                      />
                    </div>

                    <div className="col-md-4">
                      <label htmlFor="state" className="form-label">
                        State
                      </label>
                      <select
                        className="form-select"
                        id="state"
                        name="state"
                        onChange={onChangeHandler}
                        value={data.state}
                        required
                      >
                        <option value="">Choose...</option>
                        <option>Maharastra</option>
                      </select>
                    </div>

                    <div className="col-md-5">
                      <label htmlFor="city" className="form-label">
                        City
                      </label>
                      <input
                        className="form-control"
                        id="city"
                        name="city"
                        onChange={onChangeHandler}
                        value={data.city}
                        required
                      />
                    </div>

                    <div className="col-md-3">
                      <label htmlFor="zip" className="form-label">
                        Zip
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="zip"
                        placeholder=""
                        name="zipCode"
                        onChange={onChangeHandler}
                        value={data.zipCode}
                        required
                      />
                    </div>
                  </div>

                  <hr className="my-4" />

                  <button
                    className="w-100 mb-5 btn btn-primary btn-lg"
                    type="submit"
                    disabled={cartItems.length === 0}
                  >
                    Continue to checkout
                  </button>
                </form>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default PlaceOrder;
