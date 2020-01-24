import React, {Component} from 'react'


export default class Filter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          {this.props.count} products found.</div>
        <div className="col-md-4">
          <label>
            Order by 
            <select className="form-control" value={this.props.sort}
            onChange={this.props.handleChangeSort}>
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
            onChange={this.props.handleChangeType}>
              <option value="">All</option>
              <option value="">WOMEN'S</option>
              <option value="">MEN'S</option>
            </select>
          </label>
      </div>
    )
  }
}