import React, { Component } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Products from "./Products";
// import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import "../style/Page.css";

export default class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favouritsState: [],
      cartState: [],
      searchState: [],
      cartNumState: 0,
    };
  }
  favouritesList = [];
  handleMenuClick = (e) => {
    if (e.target.classList.contains("fa-bars")) {
      e.target.classList.remove("fa-bars");
      e.target.classList.add("fa-window-close");

      document.querySelector(".nav-bottom").classList.remove("hide");
    } else {
      e.target.classList.remove("fa-window-close");
      e.target.classList.add("fa-bars");

      document.querySelector(".nav-bottom").classList.add("hide");
    }
  };
  getLocaleStorage = () => {
    let storageDataFavourites = JSON.parse(localStorage.getItem("favourites"));
    let favouritesArr = [];
    for (let item in storageDataFavourites) {
      for (let product of this.props.data) {
        if (+item === product.id) favouritesArr.push(product);
      }
    }

    let storageDataCart = JSON.parse(localStorage.getItem("cart"));
    let cartArr = [];
    let cartItemNum = 0;
    for (let item in storageDataCart) {
      cartItemNum++;
      for (let product of this.props.data) {
        if (+item === product.id) cartArr.push(product);
      }
    }
    this.setState({
      cartState: cartArr,
      favouritsState: favouritesArr,
      cartNumState: cartItemNum,
    });
  };
  handelSearch = (e) => {
    let searchArr = [];
    // console.log(e.target.value);
    for (let product of this.props.data) {
      if (
        product.title
          .toLowerCase()
          .includes(e.target.value.trim().toLowerCase())
      ) {
        // console.log(product.title);
        searchArr.push(product);
        this.setState({ searchState: searchArr });
        // console.log(this.state.searchState);
      }
    }
  };
  mensClothing = this.props.data.filter(
    (product) => product.category === "men's clothing"
  );
  womensClothing = this.props.data.filter(
    (product) => product.category === "women's clothing"
  );
  jewelery = this.props.data.filter(
    (product) => product.category === "jewelery"
  );
  electronics = this.props.data.filter(
    (product) => product.category === "electronics"
  );
  toggleNavBottom = (e) => {
    e.target.parentElement.parentElement.parentElement.classList.toggle("hide");
    let menuIcon = document.querySelector(".menu-btn i");

    if (menuIcon.classList.contains("fa-bars")) {
      menuIcon.classList.remove("fa-bars");
      menuIcon.classList.add("fa-window-close");
    } else {
      menuIcon.classList.remove("fa-window-close");
      menuIcon.classList.add("fa-bars");
    }
  };
  toggleNavBottom2 = (e) => {
    // e.target.parentElement.parentElement.parentElement.classList.toggle("hide");
    e.target.parentElement.parentElement.classList.toggle("hide");
    let menuIcon = document.querySelector(".menu-btn i");

    if (menuIcon.classList.contains("fa-bars")) {
      menuIcon.classList.remove("fa-bars");
      menuIcon.classList.add("fa-window-close");
    } else {
      menuIcon.classList.remove("fa-window-close");
      menuIcon.classList.add("fa-bars");
    }
  };
  render() {
    return (
      <div className="Page" onClick={this.getLocaleStorage}>
        <nav className="Page-nav">
          <div className="nav-top">
            {/*logo*/}
            <div className="nav-logo-wrapper">
              <NavLink
                className={(navData) => (navData.isActive ? "active-link" : "")}
                to="/products"
              >
                Shop
              </NavLink>
            </div>
            {/* favorites, cart, menu-icon  */}
            <div className="nav-others-wrapper">
              <NavLink
                className={(navData) => (navData.isActive ? "active-link" : "")}
                to="/favourites"
              >
                <i className="fas fa-heart"></i>
              </NavLink>
              <NavLink
                className={(navData) =>
                  navData.isActive ? "active-link cart" : "cart"
                }
                to="/cart"
              >
                <i className="fas fa-shopping-cart"></i>
                <span className={this.state.cartNumState ? "" : "d-none"}>
                  {this.state.cartNumState}
                </span>
              </NavLink>
              <button className="menu-btn" onClick={this.handleMenuClick}>
                <i className="fas fa-bars"></i>
              </button>
            </div>
          </div>
          <div className="nav-bottom hide">
            <div className="nav-bottom-search-wrapper">
              <NavLink
                className={(navData) => (navData.isActive ? "active-link" : "")}
                to="/search"
              >
                <input
                  onChange={this.handelSearch}
                  placeholder="search.."
                  type="text"
                />
              </NavLink>

              <i
                onClick={this.toggleNavBottom2}
                className="fas fa-search search-icon"
              ></i>
            </div>
            <ul className="nav-bottom-categories-wrapper">
              <li onClick={this.toggleNavBottom}>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? "active-link" : ""
                  }
                  to="/men-clothing"
                >
                  Men's Clothing
                </NavLink>
              </li>
              <li onClick={this.toggleNavBottom}>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? "active-link" : ""
                  }
                  to="/women-clothing"
                >
                  Women's Clothing
                </NavLink>
              </li>
              <li onClick={this.toggleNavBottom}>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? "active-link" : ""
                  }
                  to="/jewelery"
                >
                  Jewelery
                </NavLink>
              </li>
              <li onClick={this.toggleNavBottom}>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? "active-link" : ""
                  }
                  to="/electronics"
                >
                  Electronics
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <main>
          <Routes>
            <Route
              path="/products"
              element={<Products favourites={false} data={this.props.data} />}
            />
            <Route
              path="/favourites"
              element={
                <Products
                  cart={false}
                  favourites={true}
                  data={this.state.favouritsState}
                />
              }
            />
            <Route
              path="/cart"
              element={<Cart data={this.state.cartState} />}
            />
            <Route
              path="/search"
              element={
                <Products
                  cart={false}
                  favourites={false}
                  data={this.state.searchState}
                />
              }
            />
            <Route
              path="/men-clothing"
              element={<Products data={this.mensClothing} />}
            />
            <Route
              path="/women-clothing"
              element={<Products data={this.womensClothing} />}
            />
            <Route
              path="/jewelery"
              element={<Products data={this.jewelery} />}
            />
            <Route
              path="/electronics"
              element={<Products data={this.electronics} />}
            />
            <Route
              path="/"
              element={<Products favourites={false} data={this.props.data} />}
            />
          </Routes>
        </main>
      </div>
    );
  }
}
