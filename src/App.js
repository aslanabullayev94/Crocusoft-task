import React, { Component } from "react";
import Page from "./page/Page";
import img1 from "./images/img-1.jpg";
import img2 from "./images/img-2.jpg";
import img3 from "./images/img-3.jpg";
import img4 from "./images/img-4.jpg";
import img5 from "./images/img-5.jpg";
import img6 from "./images/img-6.jpg";
import img7 from "./images/img-7.jpg";
import img8 from "./images/img-8.jpg";
import img9 from "./images/img-9.jpg";
import img10 from "./images/img-10.jpg";
import img11 from "./images/img-11.jpg";
import img12 from "./images/img-12.jpg";
import img13 from "./images/img-13.jpg";
import img14 from "./images/img-14.jpg";
import img15 from "./images/img-15.jpg";
import img16 from "./images/img-16.jpg";
import img17 from "./images/img-17.jpg";
import img18 from "./images/img-18.jpg";
import img19 from "./images/img-19.jpg";
import img20 from "./images/img-20.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.data = [
      {
        id: 1,
        title: "Fjallraven - Foldsack",
        price: 109.95,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve",
        category: "men's clothing",
        image: img1,
        rating: { rate: 3.9, count: 120 },
      },
      {
        id: 2,
        title: "Mens Premium T-Shirts ",
        price: 22.3,
        description:
          "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight.",
        category: "men's clothing",
        image: img2,
        rating: { rate: 4.1, count: 259 },
      },
      {
        id: 3,
        title: "Mens Cotton Jacket",
        price: 55.99,
        description:
          "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions.",
        category: "men's clothing",
        image: img3,
        rating: { rate: 4.7, count: 500 },
      },
      {
        id: 4,
        title: "Mens Casual Slim Fit",
        price: 15.99,
        description:
          "The color could be slightly different between on the screen and in practice.",
        category: "men's clothing",
        image: img4,
        rating: { rate: 2.1, count: 430 },
      },
      // {
      //   id: 5,
      //   title: "Silver Dragon Bracelet",
      //   price: 695,
      //   description:
      //     "From our Legends Collection, the Naga was inspired by the mythical.",
      //   category: "jewelery",
      //   image: img5,
      //   rating: { rate: 4.6, count: 400 },
      // },
      {
        id: 6,
        title: "Solid Gold Petite Micropave ",
        price: 168,
        description:
          "Made of 316L Stainless Steel. From our Legends Collection",
        category: "jewelery",
        image: img6,
        rating: { rate: 3.9, count: 70 },
      },
      {
        id: 7,
        title: "White Gold Plated Princess",
        price: 9.99,
        description:
          "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her.",
        category: "jewelery",
        image: img7,
        rating: { rate: 3, count: 400 },
      },
      {
        id: 8,
        title: "Pierced Owl",
        price: 10.99,
        description:
          "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        category: "jewelery",
        image: img8,
        rating: { rate: 1.9, count: 100 },
      },
      {
        id: 9,
        title: "WD 2TB External Hard Drive",
        price: 64,
        description:
          "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC.",
        category: "electronics",
        image: img9,
        rating: { rate: 3.3, count: 203 },
      },
      {
        id: 10,
        title: "1TB Internal SSD",
        price: 109,
        description:
          "Easy upgrade for faster boot up, shutdown, application load and response.",
        category: "electronics",
        image: img10,
        rating: { rate: 2.9, count: 470 },
      },
      {
        id: 11,
        title: "256GB SSD",
        price: 109,
        description:
          "3D NAND flash are applied to deliver high transfer speeds Remarkable.",
        category: "electronics",
        image: img11,
        rating: { rate: 4.8, count: 319 },
      },
      {
        id: 12,
        title: "WD 4TB Gaming Drive",
        price: 114,
        description:
          "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek.",
        category: "electronics",
        image: img12,
        rating: { rate: 4.8, count: 400 },
      },
      {
        id: 13,
        title: "Acer Full HD ",
        price: 599,
        description:
          "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology.",
        category: "electronics",
        image: img13,
        rating: { rate: 2.9, count: 250 },
      },
      {
        id: 14,
        title: "Samsung Curved Gaming Monitor",
        price: 999.99,
        description:
          "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED).",
        category: "electronics",
        image: img14,
        rating: { rate: 2.2, count: 140 },
      },
      {
        id: 15,
        title: "BIYLACLESEN Snowboard Jacket",
        price: 56.99,
        description:
          "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester.",
        category: "women's clothing",
        image: img15,
        rating: { rate: 2.6, count: 235 },
      },
      {
        id: 16,
        title: "Lock and Love Faux Leather",
        price: 29.95,
        description:
          "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER).",
        category: "women's clothing",
        image: img16,
        rating: { rate: 2.9, count: 340 },
      },
      {
        id: 17,
        title: "Rain Jacket Raincoats",
        price: 39.99,
        description:
          "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable design.",
        category: "women's clothing",
        image: img17,
        rating: { rate: 3.8, count: 679 },
      },
      {
        id: 18,
        title: "MBJ Women's T-Shirt",
        price: 9.85,
        description:
          "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric.",
        category: "women's clothing",
        image: img18,
        rating: { rate: 4.7, count: 130 },
      },
      {
        id: 19,
        title: "Opna Women's T-Shirt",
        price: 7.95,
        description:
          "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit.",
        category: "women's clothing",
        image: img19,
        rating: { rate: 4.5, count: 146 },
      },
      {
        id: 20,
        title: "DANVOUY Womens T Shirt",
        price: 12.99,
        description:
          "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees.",
        category: "women's clothing",
        image: img20,
        rating: { rate: 3.6, count: 145 },
      },
    ];
  }
  render() {
    return <Page data={this.data} />;
  }
}
export default App;
