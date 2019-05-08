import React, { Component } from 'react'
import {storeTrees,detailProduct} from './data';

const ProductContext = React.createContext();



 class ProductProvider extends Component {
  
  state ={
      products:storeTrees,
      detailProduct:detailProduct
  }
  handleDetail = ()=> {
      console.log('hello from Detail');
  }

  addToCart = () => {
    console.log('hello from Cart');
  }
  render() {
    return (

      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart
      }}>

        {this.props.children}
        
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};