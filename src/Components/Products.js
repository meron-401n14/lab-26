

import React, {Component} from 'react'

import util from '../util';
import {connect} from 'react-redux';
import {fetchProducts} from '../actions/productActions';

 class Products extends Component {

  componentDidMount(){
    this.props.fetchProducts();
  }

   render(){

    const productItems = this.props.products.map(product => (
      <div className="col-md-4" key={product.id}>
        <div className="thumbnail text-center">
          <a href={`#${product.id}`} onClick={this.props.handleAddtoCard}>
            <img src={`/products/${product.sku}.png`} alt={product.title}/>
              <p>{product.title}</p>
          </a>

          <div>
              <b>{util.formatCurrency(product.price)}</b>
              <button className="btn btn-primary" onClick={(e)=>this.props.handleAddtoCard(e, product)}>
                Add to cart
              </button>
          </div>
        </div>
      </div>
    )

    )

    return (
      <div className="row">
        {productItems }
      </div>
    )
   }

  }

const mapStateToProps = state=> ({products: state.products.items});


export default connect(mapStateToProps, {fetchProducts})(Products)