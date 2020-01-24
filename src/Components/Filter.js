import React, {Component} from 'react'
import { connect } from 'react-redux'
import {filterProducts, sortProducts} from '../actions/productActions'


 class Filter extends Component {
render() {
  return (
    <div className="row">
        <div className="col-md-4">
          {this.props.count} products found.</div>
        <div className="col-md-4">
          <label>
            Order by 
            <select className="form-control" value={this.props.sort}
            onChange={(e) => 
              this.props.sortProducts(this.props.filteredProducts, e.target.value)}>
              <option value="">Select</option>
              <option value="">lowest to higest</option>
              <option value="">higest to lowest</option>
            </select>
          </label>
      </div>
      <div className="col-md-4"></div>
      <label>
            Filter Type
            <select className="form-control" value={this.props.type}
            onChange={(e)=>
            this.props.filterProducts(this.props.products, e.target.value)}>
              <option value="">All</option>
              <option value="">WOMEN'S</option>
              <option value="">MEN'S</option>
            </select>
          </label>
      </div>
    )
  }
}

const mapStateToProps = state=> ({
  products:state.products.items,
  filteredProducts:state.products.filteredItems,
  type:state.products.size,
  sort:state.products.sort
})
export default  connect(mapStateToProps, {filterProducts, sortProducts})(Filter);