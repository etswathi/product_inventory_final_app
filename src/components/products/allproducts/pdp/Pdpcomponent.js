import React from "react";
import "./pdp.css";
import axios from "axios";
import Common from "../../../commonpage/Common";
import logo from "../../../../images/inventory.jpg";
import { Link } from "react-router-dom";
import { Message } from "semantic-ui-react";

class Pdpcomponent extends React.Component {
  constructor() {
    super();

    this.state = {
      delete: false,
    };
  }

  componentWillMount() {
    if (this.props.location.state === undefined) {
      this.props.history.push("./products");
      window.location.reload(false);
    }
    console.log(this.props);
  }

  productUpdate = () => {
    this.props.history.push({
      pathname: "/update",
      state: { presentId: this.props.location.state.id },
    });
  };

  productDelete = () => {
    axios
      .delete(
        "http://localhost:3000/allproducts/" + this.props.location.state.id
      )
      .then(
        (response) => {
          console.log(response);
          alert("Are you sure ?");
          this.setState({
            delete: true,
          });
        },

        (error) => {
          error.log(error);
        }
      );
  };

  render() {
    return (
      <div>
        <Common></Common>

        <div className="sidebar">
          <center>
            <img src={logo} className="image" alt="image" />
          </center>
          <Link to="/products">
            <a>
              <i class="fas fa-backward"></i>
              <span>Back</span>
            </a>
          </Link>
          <Link to="/signup">
            <a>
              <i className="fas fa-sign-out-alt"></i>
              <span>Signout</span>
            </a>
          </Link>
        </div>

        <br />
        <br />
        <br />
        <br />

        {this.state.delete && (
          <div style={{ backgroundColor: "maroon", color: "white" }}>
            <Message negative>
              <Message.Header>
                <b style={{ fontFamily: "TimesNewRoman", fontSize: "25px" }}>
                  Deleted!!!
                </b>
              </Message.Header>
              <p>You have successfully deleted the product details</p>
            </Message>
          </div>
        )}
        {!this.state.delete && (
          <div className="contentpdp">
            <div class="cardpdp">
              <img
                src={this.props.location.state.image}
                alt="Denim Jeans"
                style={{ width: "100%", height: "30%" }}
              />
              <h1 style={{ fontWeight: "bold", fontFamily: "TimesNewRoman" }}>
                {this.props.location.state.name}
              </h1>
              <p>
                Category:
                {this.props.location.state.category}
              </p>
              <p class="pricepdp">${this.props.location.state.price}</p>
              <p>
                Quantity:
                {this.props.location.state.quantity}
              </p>
              <p>{this.props.location.state.description}</p>
              <p>
                {this.props.location.state.stock === "true" && (
                  <p>
                    <b>In Stock</b>
                  </p>
                )}

                {this.props.location.state.stock === "false" && (
                  <p>
                    <b>Not In Stock</b>
                  </p>
                )}
              </p>

              <div>
                <button onClick={this.productUpdate} className="pdpbutton">
                  Update
                </button>
                <button onClick={this.productDelete} className="pdpbutton">
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Pdpcomponent;
