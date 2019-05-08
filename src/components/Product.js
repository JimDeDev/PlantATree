import React, { Component } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';

export default class Product extends Component {
  render() {
    const {id, title, img, price, inCart} = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
        <div className="img-container p-5" onClick={() => console.log('Image Container Clicked')}>
        <Link to="/details">
        <img src={img} alt="product" className="card-img-top"/>
        </Link>
        
        </div>

        {/* Product Card footer */}

        <div className=" card-footer d-flex justify-content-between">
         <p className="align-self-center mb-0">
         {title}
         </p>
         <h5 className="text-black font-bold mb-0">
          {price}
          <span className="mr-4 "> NZD</span>
          </h5>

          <button className="cart-btn" disabled={inCart ? true : false} onClick={() => {console.log('added to the cart');}}>
          
              {/*** if the item is already in cart display -In Cart-,
              and if it is not, display the cart icon ***/}
              { inCart ? (
              <p className="text-capitalize mb-0" disabled> 
              {" "}
              In Cart 
              </p>
              ) : (
                <i className="fas fa-cart-plus"/>
              )}
          
          </button>
        </div>
        </div>

      </ProductWrapper>
      
      
    );
  }
}

const ProductWrapper = styled.div`
.card{
  border-color:transparent;
  transition: all 0.5s linear;
}
.card-footer {
  background: transparent;
  border-top: transparent;
  transition: all 0.5s linear;
}
&:hover{
  .card{
    // background: green;
    border:0.05rem solid black;
    box-shadow:2px 2px 5px 0px black;
  }
  .card-footer{
    background: white;
    border:0.05rem solid black;
    border-top:none;
    color: black;
  }

}

.img-container{
  position: relative;
  overflow:hidden;
}
.card-img-top{
  transition: all 0.5s linear;
}
.img-container:hover .card-img-top{
  transform:scale(1.2);
}

.cart-btn{
  position: absolute;
  bottom:0;
  right:0;
  padding: 0.2rem 0.4rem;
  background: transparent;
  border: 0.04rem solid green;
  color: green;
  border-radius: 0.5rem 0 0 0;
  // transform: translate(100%, 100%);
}
&:hover{
  .cart-btn{
    background: green;
    color: white;
  }
}

`