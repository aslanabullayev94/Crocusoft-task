import React, { Component } from "react";
import "../style/Cart.css";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
  }
  removeBtn = (e) => {
    let storageData = JSON.parse(localStorage.getItem("cart"));
    delete storageData[e.target.id];
    localStorage.setItem("cart", JSON.stringify(storageData));
  };

  increaseBtn = (e) => {
    const quantity = e.target.parentElement.querySelector(".quantity");
    quantity.innerHTML = +quantity.innerHTML + 1;
  };
  decreaseBtn = (e) => {
    const quantity = e.target.parentElement.querySelector(".quantity");
    if (+quantity.innerHTML >= 2) {
      quantity.innerHTML = +quantity.innerHTML - 1;
    }
  };
  countTotal = (e) => {
    let quantityArr = e.currentTarget.querySelectorAll(".quantity");
    let priceArr = e.currentTarget.querySelectorAll(".price");

    let total = 0;
    for (let i = 0; i < quantityArr.length; i++) {
      total +=
        // parseFloat(quantityArr[i].innerHTML) *
        // parseFloat(priceArr[i].innerHTML);
        parseFloat(quantityArr[i].innerHTML).toFixed(2) *
        parseFloat(priceArr[i].innerHTML).toFixed(2);
    }
    e.currentTarget.querySelectorAll(".total")[0].innerHTML =
      total.toFixed(2) + " AZN";
  };
  render() {
    return (
      <div onClick={this.countTotal} className="Cart">
        {this.props.data.map((data, idx) => (
          <div key={idx} className="Cart-element">
            <div className="Cart-element-img-wrapper">
              <img src={data.image} alt="" />
            </div>
            <div className="Cart-element-body-wrapper">
              <p>{data.title}</p>
              <span className="price">{data.price} AZN</span>
            </div>
            <div className="Cart-element-count-wrapper">
              <button onClick={this.increaseBtn} className="increase-btn">
                +
              </button>
              <span className="quantity">1</span>
              <button onClick={this.decreaseBtn} className="decrease-btn">
                -
              </button>
            </div>
            <div className="Cart-element-remove-wrapper">
              <button
                id={data.id}
                onClick={this.removeBtn}
                className="remove-btn"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        <div
          className={
            this.props.data.length
              ? "cart-checkout-btn-wrapper"
              : "cart-checkout-btn-wrapper d-none"
          }
        >
          <p>
            Total <span className="total"></span>
          </p>
          <button>Refresh Total</button>
          <button>Make checkout</button>
        </div>
      </div>
    );
  }
}
