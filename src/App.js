

import React, { Component } from 'react';



import Products from './Components/Products';
import Filter from './Components/Filter';
import Basket from './Components/Basket';
import { Provider } from 'react-redux';
import store from './store';



class App extends Component {

  componentDidMount() {
    if (localStorage.getItem('cartItems')) {
      this.setState({ cartItems: JSON.parse(localStorage.getItem('cartItems')) });
    }
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
              <Filter />
              <hr />
              <Products />
            </div>
            <div className="col-md-4">
              <Basket />

            </div>
          </div>

        </div>
      </Provider>
    );
  }
}
export default App;






