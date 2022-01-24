import React, { Component } from "react";
import "../style/Product.css";

export default class Product extends Component {
  handleWishList = () => {
    let storageWishList = JSON.parse(localStorage.getItem("favourites"));
    if (storageWishList) {
      if (storageWishList[this.props.data.id]) {
        // varsa silsin
        delete storageWishList[this.props.data.id];
        localStorage.setItem("favourites", JSON.stringify(storageWishList));
      } else {
        // yoxdursa elave etsin
        storageWishList[this.props.data.id] = this.props.data.id;
        localStorage.setItem("favourites", JSON.stringify(storageWishList));
      }
    } else {
      let itemInfo = { [this.props.data.id]: this.props.data.id };
      localStorage.setItem("favourites", JSON.stringify(itemInfo));
    }
  };
  handleCart = () => {
    let storageCartList = JSON.parse(localStorage.getItem("cart"));
    if (storageCartList) {
      if (storageCartList[this.props.data.id]) {
        // varsa silsin
        delete storageCartList[this.props.data.id];
        localStorage.setItem("cart", JSON.stringify(storageCartList));
      } else {
        // yoxdursa elave etsin
        storageCartList[this.props.data.id] = this.props.data.id;
        localStorage.setItem("cart", JSON.stringify(storageCartList));
      }
    } else {
      let itemInfo = { [this.props.data.id]: this.props.data.id };
      localStorage.setItem("cart", JSON.stringify(itemInfo));
    }
  };
  infoToggler = (target) => {
    let detailsEl =
      target.parentElement.parentElement.querySelector(".Product-details");
    if (detailsEl.classList.contains("hidden")) {
      detailsEl.classList.remove("hidden");
    } else {
      detailsEl.classList.add("hidden");
    }
  };
  render() {
    return (
      <div className="Product">
        <div className="Product-img-wrapper">
          <img alt="" src={this.props.data.image} />
        </div>
        <span>{this.props.data.title}</span>
        <span>{this.props.data.price} AZN</span>

        <div className="Product-btns">
          <button
            onClick={(e) => {
              this.infoToggler(e.target);
            }}
          >
            Details
          </button>
          <button
            onClick={this.handleWishList}
            className="Product-wishlist-btn"
          >
            <i className="fas fa-heart"></i>
          </button>
          <button onClick={this.handleCart} className="Product-cart-btn">
            <i className="fas fa-shopping-cart"></i>
          </button>
        </div>
        <div className="Product-details hidden">
          {/*description, category,rating */}
          <div className="Product-details-first-row">
            <p>Rating: <span className="rating">{this.props.data.rating.rate}</span></p>
            <button
              onClick={(e) => {
                this.infoToggler(e.target.parentElement);
              }}
              className="Product-details-close"
            >
              X
            </button>
          </div>
          <div className="Product-details-second-row">
            <p>Category: <span className="category">{this.props.data.category}</span></p>
            <p>{this.props.data.description}</p>
          </div>
        </div>
      </div>
    );
  }
}
