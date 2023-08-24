import React, { useContext, useEffect } from "react";
import { FcCheckmark, FcAdvertising } from "react-icons/fc";
import "./Receipt.css";
import { AppContext } from "../../AppContext";

const Receipt = () => {
  const { total, subTotal, deliveryCost, discount, hasManyRedPlates } =
    useContext(AppContext);

  return (
    <div className="container">
      <div className="details-container">
        <div className="info-box">
          <p>Discount</p>
          <p>${discount}</p>
        </div>
        <div className="info-box">
          <p>Delivery</p>
          <p>${deliveryCost}</p>
        </div>
        <div className="info-box">
          <p>Sub total</p>
          <p>${subTotal}</p>
        </div>
        <div className="info-box">
          <p>Total</p>
          <p>${total}</p>
        </div>
      </div>
      <div className="offers-container">
        <div className="offers-info">
          <p>
            {total >= 50 ? <FcCheckmark /> : <FcAdvertising />}
            Buy more than $50 and get $2.95 delivery fees!
          </p>
          <p>
            {total >= 90 ? <FcCheckmark /> : <FcAdvertising />}
            Buy more than $90 and get a free delivery!
          </p>

          <p>
            {hasManyRedPlates ? <FcCheckmark /> : <FcAdvertising />}
            Buy one red plate, get the second half price”.
          </p>
        </div>
        <div>
          <button className="checkout-btn">checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
