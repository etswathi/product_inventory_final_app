import React from "react";
import "./css/homepage.css";
import image1 from "./images/-1117Wx1400H-461001523-multi-MODEL.webp";
import image2 from "./images/book.jpg";
import image3 from "./images/71Ms71OIM2L._UX569_.jpg";
import image4 from "./images/lap.jpg";
import image5 from "./images/kids.jpg";
import image6 from "./images/pexels-photo-396547.jpeg";
import logo from "./images/logoo.png";
import { Link } from "react-router-dom";
class HomePage extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <input type="checkbox" id="check" />
        <header className="homehead">
          <label for="check">
            <i className="fas fa-bars" id="sidebar_btn"></i>
            <div className="box">Homepage</div>
          </label>
          <div className="left_area">
            <h3>
              <span>Inventory.com</span>
            </h3>
          </div>
        </header>
        <div className="sidebar">
          <center>
            <img src={logo} className="image" alt="image" />
          </center>
          <Link to="/dashboard">
            <i className="fas fa-desktop"></i>
            <span>Home</span>
          </Link>
          <Link to="/products">
            <i className="fas fa-cogs"></i>
            <span>Products</span>
          </Link>

          <a href="#">
            <i className="fas fa-info-circle"></i>
            <span>About</span>
          </a>
          <a href="#">
            <i className="fas fa-sliders-h"></i>
            <span>Contact</span>
          </a>

          <Link to="/signup">
            <i className="fas fa-sign-out-alt"></i>
            <span>Signout</span>
          </Link>
        </div>

        <div className="content">
          <div className="slide-container">
            <span id="slider-image-1"></span>
            <span id="slider-image-2"></span>
            <span id="slider-image-3"></span>
            <span id="slider-image-4"></span>
            <span id="slider-image-5"></span>

            <div className="image-container">
              <img
                src={image1}
                className="slider-image"
                style={{ width: "800px", height: "300px" }}
              />
              <img
                src={image2}
                className="slider-image"
                style={{ width: "800px", height: "300px" }}
              />
              <img
                src={image3}
                className="slider-image"
                style={{ width: "800px", height: "300px" }}
              />
              <img
                src={image4}
                className="slider-image"
                style={{ width: "800px", height: "300px" }}
              />
              <img
                src={image5}
                className="slider-image"
                style={{ width: "800px", height: "300px" }}
              />
            </div>

            <div className="button-container">
              <a href="#slider-image-1" className="slider-button"></a>
              <a href="#slider-image-2" className="slider-button"></a>
              <a href="#slider-image-3" className="slider-button"></a>
              <a href="#slider-image-4" className="slider-button"></a>
              <a href="#slider-image-5" className="slider-button"></a>
            </div>
          </div>

          <h3
            style={{
              fontSize: "40px",
              textAlign: "center",
              marginTop: "-60px",
              fontFamily: "lucida calligraphy",
              color: "lightgoldenrodyellow",
            }}
          >
            Welcome to the world of shopping ..
          </h3>
        </div>
      </div>
    );
  }
}
export default HomePage;
