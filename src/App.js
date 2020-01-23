import React, {Component} from 'react';
import fetch from 'node-fetch';
import ReactDOM from 'react-dom';

import Products from './Components/reducers/Products'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products:[], 
      filteredProducts:[]};
  }

  componentDidMount(){
    
    fetch('http://localhost:8000/Products/').then(res=> res.json())
    .then(data=>this.setState({
      products: data,
      filteredProducts:data
    }));
  }
   




render() {
  return (
    <div className="container">
      
        <p>
         Shoping cart!
        </p>
        <div className="row">
          <div className="col-md-8">
            <Products products={this.state.filteredProducts} handleAddCart={this.handleAddToCart}/>
          </div>
          <div className="col-md-4">

          </div>
        </div>
      
    </div>
  );
}
}
export default App;
