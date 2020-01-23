
import React, {Component} from 'react'

export default class Products extends Component {

   render(){

    const productItems = this.props.products.map(product => (
      <div className="col-md-4">
        <div className="thumbnail text-center">
          <a href={`#${product.id}`} onClick={this.props.handleAddToCard}>
            <img src={`/products/${product.sku}.png`} alt={product.title}/>
              <p>{product.title}</p>
          </a>

          <div>
              <b>{product.price}</b>
              <button className="btn btn-default" onClick={(e)=>this.props.handleAddToCart(e, product)}>
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