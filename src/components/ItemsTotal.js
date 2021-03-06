import React from "react";
import { Link } from "react-router-dom";
import PayPalButton from "./PayPalButton";

import DeliverySelect from "./DeliverySelect";
export default function ItemsTotal({ value, history }) {
  const { cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="cart-bottom col-10 mt-5 col-sm-8 text-center align-items-center container-fluid">
            <div className="continue-btn">
              <Link to="/store">
                <button
                  className="btn btn-outline-blue text-center text-uppercase mb-5 px-5"
                  type="button"
                >
                  {" "}
                  Continue Shopping{" "}
                </button>
              </Link>
            </div>
            <Link to="/store">
              <button
                className="btn btn-outline-danger text-center text-uppercase mb-5 px-5"
                type="button"
                onClick={() => clearCart()}
              >
                {" "}
                remove all items{" "}
              </button>
            </Link>

            <div className="select mb-4">
              <h5>Delivery or Pick up from the store?</h5>
              <DeliverySelect />
            </div>

            <h5 className="">
              <span className="text-title">Total Price:</span>
              <strong>$ {cartTotal}</strong>
            </h5>
            <h3 className="mt-5 text-uppercase">
              {" "}
              <i class="fas fa-credit-card" /> Checkout
            </h3>
            <hr />
            <PayPalButton
              total={cartTotal}
              clearCart={clearCart}
              history={history}
            />
            <hr />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
