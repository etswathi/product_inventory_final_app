import React from "react";
import "./css/pdp.css";
import axios from "axios";
import Common from "./Common";
class Pdpcomponent extends React.Component {
  constructor() {
    super();

    this.state = {
      delete: false,
    };
  }

  componentWillMount() {
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

        {this.state.delete && (
          <div>
            <h1
              style={{
                color: "white",
                fontSize: "90px",
                textAlign: "center",
                border: "2px solid black",
              }}
            >
              deleted
            </h1>
          </div>
        )}
        {!this.state.delete && (
          <div className="content">
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
