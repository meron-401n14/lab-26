

import React, { Component } from 'react';



import Products from './Components/Products';
import Filter from './Components/Filter';
import Basket from './Components/Basket';
import {Provider} from 'react-redux';
import store from './store';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filteredProducts: [],
      cartItems:[],

    };
    this.handleChangeSort=this.handleChangeSort.bind(this);
    this.handleChangeType=this.handleChangeType.bind(this);
    this.handleAddtoCart=this.handleAddtoCart.bind(this);
    this.handleRemoveFromCart=this.handleRemoveFromCart.bind(this);
  }

 componentDidMount() {

  
    if(localStorage.getItem('cartItems')){
      this.setState({cartItems: JSON.parse(localStorage.getItem('cartItems'))});
    }
}

   



  handleChangeSort(e){
    this.setState({sort:e.target.value});
    this.listProducts();
  }

  handleChangeType(e){
    this.setState({type:e.target.value});
    this.listProducts();
  }

  handleAddtoCart(e, product){
    this.setState(state=>{
      const cartItems = state.cartItems;
      let productAlreadyInCart= false;
      cartItems.forEach(item => {
        if(item.id === product.id){
          productAlreadyInCart = true;
          item.count++;
        }
      });

      if(!productAlreadyInCart){
        cartItems.push({...product, count:1});
      }

      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return cartItems;


    })
  }

  handleRemoveFromCart(e, item){
    this.setState(state=>{
     const cartItems =  state.cartItems.filter(elm => elm.id !== item.id);
     localStorage.setItem('cartItem', cartItems)
     return {cartItems}
    })
  }

listProducts(){
  this.setState(state => {
    if(state.sort !== ''){
      state.products.sort((a,b)=>(state.sort==="lowest")?
       (a.price > b.price ? 1:-1):(a.price < b.price?1:-1))
    } else {
      state.products.sort((a,b)=>(a.id < b.id?1:-1));
    }

    if(state.type !== ''){
      return {filteredProducts: state.products.filter(a=>
        a.Type.indexOf(state.type)>= 0)}
      }
    return {filteredProducts:state.products};
  })
}





  render() {
    return (
      <Provider store={store}>
      <div className="container">

        <p>
          Shoping cart!
              </p>
        <div className="row">
          <div className="col-md-8">
            <Filter Type={this.state.Type}  sort={this.state.sort} handleChangeType={this.handleChangeType} handleChangeSort={this.handleChangeSort}
            count={this.state.filteredProducts.length}/>
            <hr/>
            <Products products={this.state.filteredProducts} handleAddtoCard={this.handleAddtoCart} />
          </div>
          <div className="col-md-4">
            <Basket cartItems={this.state.cartItems} handleRemoveFromCart={this.handleRemoveFromCart}/>

          </div>
        </div>

      </div>
      </Provider>
    );
  }
}
export default App;






