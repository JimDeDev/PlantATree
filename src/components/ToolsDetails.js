import React, { Component } from "react";
import { ToolConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import Options from "./Options";
export default class Details extends Component {
  render() {
    return (
      <ToolConsumer>
        {value => {
          const { id, img, info, price, title, inCart } = value.detailTools;

          return (
            <div className="container py-5">
              {/* Title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted textBlack my-5">
                  <h1> {title}</h1>
                </div>
              </div>
              {/*  End Title */}

              {/* Product Info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="product" />
                </div>

                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2> Product : {title} </h2>

                  <h4 className="text-title text-uppercase text-muted">
                    Price: <span>$</span>
                    {price}
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    {" "}
                    Information about the product
                  </p>
                  <p className="text-muted lead"> {info}</p>
                  <hr />
                  <h4>Select Your Preferences</h4>
                  <br />

                  {/* <Options /> */}

                  <br />
                  <br />
                  <div>
                    <Link to="/tools">
                      <ButtonContainer>Back to Products</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cartBtnInProductDetails
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "In Cart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ToolConsumer>
    );
  }
}
