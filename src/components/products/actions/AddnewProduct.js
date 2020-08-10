import React from "react";
import "../../css/addnewproduct.css";
import axios from "axios";
import Common from "../../Common";
import logo from "../../images/logoo.png";
import { Message } from "semantic-ui-react";
import { Link } from "react-router-dom";
class AddnewProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      productName: "",
      productDescription: "",
      productPrice: 0,
      categoryName: "",
      inStock: true,
      quantity: 0,
      image: "",
      week1: 0,
      week2: 0,
      week3: 0,
      week4: 0,
      week5: 0,
      week6: 0,
      nameError: "",
      qua: false,
      add: false,
    };
  }

  checkValidation = () => {
    console.log("chek");
    let nameerror = "";
    let sinceerror = "";
    if (this.state.productName === "") {
      nameerror = "Please enter first name";
    }
    if (this.state.productDescription === "") {
      nameerror = "Please enter first name";
    }
    if (this.state.productPrice === "") {
      nameerror = "Please enter first name";
    }
    if (this.state.categoryName === "") {
      nameerror = "Please enter first name";
    }
    if (this.state.inStock === "") {
      nameerror = "Please enter first name";
    }
    if (this.state.quantity === "") {
      nameerror = "Please enter first name";
    }

    if (this.state.quantity != 0) {
      this.setState({
        qua: false,
      });
    }

    if (this.state.week1 === "") {
      nameerror = "Please enter first name";
    }
    if (this.state.week2 === "") {
      nameerror = "Please enter first name";
    }
    if (this.state.week3 === "") {
      nameerror = "Please enter first name";
    }
    if (this.state.week4 === "") {
      nameerror = "Please enter first name";
    }
    if (this.state.week5 === "") {
      nameerror = "Please enter first name";
    }
    if (this.state.week6 === "") {
      nameerror = "Please enter first name";
    }

    if (nameerror) {
      console.log("set state for nameError");
      this.setState({
        nameError: nameerror,
      });

      return false;
    }

    this.setState({
      nameError: "",
    });
    return true;
  };

  addNewProduct = (event) => {
    if (this.checkValidation()) {
      event.preventDefault();
      console.log(this.state.image);

      let RequestBody = {
        productName: this.state.productName,
        productDescription: this.state.productDescription,
        productPrice: this.state.productPrice,
        categoryName: this.state.categoryName,
        inStock: this.state.inStock,
        quantity: this.state.quantity,
        productImage: this.state.image,
        stock: {
          week1: this.state.week1,
          week2: this.state.week2,
          week3: this.state.week3,
          week4: this.state.week4,
          week5: this.state.week5,
          week6: this.state.week6,
        },
      };
      axios.post("http://localhost:3000/allproducts", RequestBody).then(
        (response) => {
          console.log(response);

          this.setState({
            add: true,
          });
          // this.props.history.push("/products");
        },
        (error) => {
          console.error(error);
        }
      );
    }
  };

  onChangeName = (event) => {
    this.setState({
      productName: event.target.value,
    });
    this.checkValidation();
  };
  onChangeDescription = (event) => {
    this.setState({
      productDescription: event.target.value,
    });
    this.checkValidation();
  };
  onChangePrice = (event) => {
    this.setState({
      productPrice: event.target.value,
    });
    this.checkValidation();
  };
  onChangeCategory = (event) => {
    this.setState({
      categoryName: event.target.value,
    });
    this.checkValidation();
  };
  onChangeStock = (event) => {
    this.setState({
      inStock: event.target.value,
    });
    this.checkValidation();
  };
  onChangeQuantity = (event) => {
    this.setState({ quantity: event.target.value });

    if (this.state.quantity === 0) {
      this.setState({ qua: true });
    }

    this.checkValidation();
  };

  onChangeWeek1 = (event) => {
    this.setState({ week1: parseInt(event.target.value) });
    this.checkValidation();
  };
  onChangeWeek2 = (event) => {
    this.setState({ week2: parseInt(event.target.value) });
    this.checkValidation();
  };
  onChangeWeek3 = (event) => {
    this.setState({ week3: parseInt(event.target.value) });
    this.checkValidation();
  };
  onChangeWeek4 = (event) => {
    this.setState({ week4: parseInt(event.target.value) });
    this.checkValidation();
  };
  onChangeWeek5 = (event) => {
    this.setState({ week5: parseInt(event.target.value) });
    this.checkValidation();
  };
  onChangeWeek6 = (event) => {
    this.setState({ week6: parseInt(event.target.value) });
    this.checkValidation();
  };

  onChangeImage = (event) => {
    this.setState({
      image: event.target.value,
    });
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
            <a href="#">
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

        <div className="addcontent">
          {this.state.add && (
            <div style={{ backgroundColor: "green", color: "white" }}>
              <Message negative>
                <Message.Header>
                  <b
                    style={{
                      fontFamily: "TimesNewRoman",
                      fontSize: "25px",
                    }}
                  >
                    Added!!!
                  </b>
                </Message.Header>
                <p style={{ fontFamily: "TimesNewRoman" }}>
                  You have successfully added the product details
                </p>
              </Message>
            </div>
          )}

          {!this.state.add && (
            <div className="wrapadd">
              <h3
                style={{
                  fontFamily: "TimesNewRoman",
                  fontSize: "30px",
                  textDecoration: "underline",
                  color: "lightgoldenrodyellow",
                }}
              >
                <b>Add new product</b>
              </h3>

              <form>
                <input
                  onChange={this.onChangeName}
                  type="text"
                  placeholder="Product Name"
                  required
                />
                <input
                  onChange={this.onChangeDescription}
                  type="text"
                  placeholder="Product Description"
                  required
                />
                <input
                  onChange={this.onChangePrice}
                  type="number"
                  placeholder="Price"
                  required
                />
                {/* <input
    onChange={this.onChangeCategory}
    type="text"
    placeholder="Category"
    required
  /> */}

                <select
                  onChange={this.onChangeCategory}
                  id="category"
                  name="category"
                >
                  <option placeholder="Category">Please select Category</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Dress">Dress</option>
                  <option value="Kids">Kids</option>
                </select>

                {/* <input
    onChange={this.onChangeStock}
    type="text"
    placeholder="Stock"
    required
    
  /> */}

                <select onChange={this.onChangeStock} id="stock" name="stock">
                  <option placeholder="In Stock">
                    Please select stock availability
                  </option>
                  <option value="false">false</option>
                  <option value="true">true</option>
                </select>

                <input
                  onChange={this.onChangeQuantity}
                  type="number"
                  placeholder="Quantity"
                  required
                />

                {this.state.qua && <p style={{color:'white',backgroundColor:'maroon'}}>Quantity should not be 0</p>}

                <input
                  onChange={this.onChangeWeek1}
                  type="number"
                  placeholder="stock:week 1"
                  required
                />
                <input
                  onChange={this.onChangeWeek2}
                  type="number"
                  placeholder="stock:week 2"
                  required
                />
                <input
                  onChange={this.onChangeWeek3}
                  type="number"
                  placeholder="stock:week 3"
                  required
                />
                <input
                  onChange={this.onChangeWeek4}
                  type="number"
                  placeholder="stock:week 4"
                  required
                />
                <input
                  onChange={this.onChangeWeek5}
                  type="number"
                  placeholder="stock:week 5"
                  required
                />
                <input
                  onChange={this.onChangeWeek6}
                  type="number"
                  placeholder="stock:week 6"
                  required
                />

                <input
                  onChange={this.onChangeImage}
                  type="text"
                  placeholder="Image"
                  required
                />

                <button onClick={this.addNewProduct}>Add</button>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default AddnewProduct;
