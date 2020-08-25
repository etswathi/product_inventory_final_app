import React from "react";
import "./homepage.css";
import image1 from "../../images/-1117Wx1400H-461001523-multi-MODEL.webp";
import image2 from "../../images/book.jpg";
import image3 from "../../images/71Ms71OIM2L._UX569_.jpg";
import image4 from "../../images/lap.jpg";
import image5 from "../../images/kids.jpg";
import image6 from "../../images/pexels-photo-396547.jpeg";
import logo from "../../images/inventory.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
    };
  }

  componentWillMount() {
    console.log(this.props);
    if (this.props.location.state === undefined) {
      this.props.history.push("/signup");
      window.location.reload(false);
    }

    if (this.props.location.state.verifiedemail) {
      console.log("inside axios");

      axios
        .get(
          "http://localhost:3000/allusers?email=" +
            this.props.location.state.verifiedemail
        )
        .then((response) => {
          this.setState({
            username: response.data[0].userName,
          });
        });
    }
  }

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
            <h3 data-testid='h3'>
              <span>Inventory.com</span>
            </h3>
          </div>
          <div class="right">
            {this.props.location.state.signup && (
              <p style={{ color: "white" }}>
                <i class="fas fa-user-circle"></i>
                <span>Hi,{this.props.location.state.username}</span>
              </p>
            )}

            {this.props.location.state.login && (
              <p style={{ color: "white" }}>
                <i class="fas fa-user-circle"></i>
                <span>Hi,{this.state.username}</span>
              </p>
            )}
          </div>
        </header>
        <div className="sidebar">
          <center>
            <img src={logo} className="image" alt="image" />
          </center>
          <Link to="/">
            <i className="fas fa-desktop"></i>
            <span>Home</span>
          </Link>
          <Link to="/products">
            <i className="fas fa-cogs"></i>
            <span>Products</span>
          </Link>

         

          <Link to="/signup">
            <i className="fas fa-sign-out-alt"></i>
            <span>Signout</span>
          </Link>
        </div>

        <div className="contenthome">
          <div className="slide-container">
            <span id="slider-image-1"></span>
            <span id="slider-image-2"></span>
            {/* <span id="slider-image-3"></span>
            <span id="slider-image-4"></span>
            <span id="slider-image-5"></span> */}

            <div className="image-container">
              <img
                src={image1}
                className="slider-image"
                // style={{ width: "800px", height: "300px" }}
              />
              <img
                src={image2}
                className="slider-image"
                // style={{ width: "800px", height: "300px" }}
              />
              {/* <img
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
              /> */}
            </div>

            {/* <div className="button-container">
              <a href="#slider-image-1" className="slider-button"></a>
              <a href="#slider-image-2" className="slider-button"></a>
              <a href="#slider-image-3" className="slider-button"></a>
              <a href="#slider-image-4" className="slider-button"></a>
              <a href="#slider-image-5" className="slider-button"></a>
            </div> */}
          </div>

          <h3 class="headname">
           
            Welcome to the world of shopping ..
          </h3>
        </div>
      </div>
    );
  }
}
export default HomePage;
