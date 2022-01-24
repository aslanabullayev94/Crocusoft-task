import React, { Component } from "react";
import Product from "./Product";
import "../style/Products.css";

export default class Products extends Component {
  // constructor(props) {
  //     super(props);
  //     this.data = {price: 25, color: "red"};
  // }
  // handleStorage = () => {
  //     this.data = JSON.stringify(this.data);
  //     localStorage.setItem('product1', this.data);
  // }
  render() {
    return (
      <div className="Products">
        {this.props.data.map((data, idx) => (
          <Product key={idx} data={data} favourites={this.props.favourites} />
        ))}
      </div>
    );
  }
}
