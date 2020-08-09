import React from "react";
import "../../css/addnewproduct.css";
import axios from "axios";
import Common from "../../Common";
class UpdateProduct extends React.Component {
  constructor(props) {
    super();
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
      nameError:''
    };
  }

  componentWillMount() {
    if (this.props.location.state === undefined) {
      this.props.history.push("/products");
      window.location.reload(false);
    }

    if (this.props.location.state !== undefined) {
      axios
        .get(
          "http://localhost:3000/allproducts/" +
            this.props.location.state.presentId
        )
        .then(
          (response) => {
            console.log(response.data.stock);
            this.setState({
              id: response.data.id,
              productName: response.data.productName,
              productDescription: response.data.productDescription,
              productPrice: response.data.productPrice,
              categoryName: response.data.categoryName,
              inStock: response.data.inStock,
              quantity: response.data.quantity,
              image: response.data.productImage,
              week1: response.data.stock.week1,
              week2: response.data.stock.week2,
              week3: response.data.stock.week3,
              week4: response.data.stock.week4,
              week5: response.data.stock.week5,
              week6: response.data.stock.week6,
            });
          },
          (error) => {
            error.log(error);
          }
        );
    }
  }
  checkValidation = () => {
    console.log("chek");
    let nameerror = "";
    let sinceerror = "";
    if (this.state.productName === "") {
      nameerror = "Please enter first name";
    }
    if (this.state.productDescription === "") {
      nameerror = "Please enter last name";
    }
    if (this.state.productPrice === "") {
      nameerror = "Please enter user name";
    }
    if (this.state.categoryName === "") {
      nameerror = "Please enter email";
    }
    if (this.state.inStock === "") {
      nameerror = "Please enter password";
    }
    if (this.state.quantity === "") {
      nameerror = "Please enter password";
    }
    if (this.state.week1 === "") {
      nameerror = "Please enter password";
    }
    if (this.state.week2 === "") {
      nameerror = "Please enter password";
    }
    if (this.state.week3 === "") {
      nameerror = "Please enter password";
    }
    if (this.state.week4 === "") {
      nameerror = "Please enter password";
    }
    if (this.state.week5 === "") {
      nameerror = "Please enter password";
    }
    if (this.state.week6 === "") {
      nameerror = "Please enter password";
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

  onChangeName = (event) => {
    this.setState({
      productName: event.target.value,
    });
    this.checkValidation()
  };
  onChangeDescription = (event) => {
    this.setState({
      productDescription: event.target.value,
    });
    this.checkValidation()
  };
  onChangePrice = (event) => {
    this.setState({
      productPrice: event.target.value,
    });
    this.checkValidation()
  };
  onChangeCategory = (event) => {
    this.setState({
      categoryName: event.target.value,
    });
    this.checkValidation()
  };
  onChangeStock = (event) => {
    this.setState({
      inStock: event.target.value,
    });
    this.checkValidation()
  };
  onChangeQuantity = (event) => {
    this.setState({ quantity: event.target.value });
    this.checkValidation()
  };
  

  onChangeWeek1 = (event) => {
    this.setState({ week1: event.target.value });
    this.checkValidation()
  };
  onChangeWeek2 = (event) => {
    this.setState({ week2: event.target.value });
    this.checkValidation()
  };
  onChangeWeek3 = (event) => {
    this.setState({ week3: event.target.value });
    this.checkValidation()
  };
  onChangeWeek4 = (event) => {
    this.setState({ week4: event.target.value });
    this.checkValidation()
  };
  onChangeWeek5 = (event) => {
    this.setState({ week5: event.target.value });
    this.checkValidation()
  };
  onChangeWeek6 = (event) => {
    this.setState({ week6: event.target.value });
    this.checkValidation()
  };

  onChangeImage = (event) => {
    this.setState({
      image: event.target.value,
    });
  };

  updatePro = (event) => {
    if(this.checkValidation()){
    event.preventDefault();

    console.log(this.state);

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
    axios
      .put("http://localhost:3000/allproducts/" + this.state.id, RequestBody)
      .then(
        (response) => {
          console.log(response);
          console.log(this.props.history);

          this.props.history.push("/products");
        },
        (error) => {
          console.error(error);
        }
      );
  };
}

  render() {
    console.log(this.props);
    return (
      <div>
        <Common></Common>

        <div className="content">
          <div className="wrapadd">
            <h3
              style={{
                fontFamily: "TimesNewRoman",
                fontSize: "30px",
                textDecoration: "underline",
                color: "lightgoldenrodyellow",
              }}
            >
              <b>Update details</b>
            </h3>
            <form>
              <input
                type="text"
                placeholder="Product Id"
                value={this.state.id}
                required
              />
              <input
                onChange={this.onChangeName}
                type="text"
                placeholder="Product Name"
                value={this.state.productName}
                required
              />
              <input
                onChange={this.onChangeDescription}
                type="text"
                placeholder="Product Description"
                value={this.state.productDescription}
                required
              />
              <input
                onChange={this.onChangePrice}
                type="text"
                placeholder="Price"
                value={this.state.productPrice}
                required
              />
              <input
                onChange={this.onChangeCategory}
                type="text"
                placeholder="Category"
                value={this.state.categoryName}
                required
              />
              <input
                onChange={this.onChangeStock}
                type="text"
                placeholder="Stock"
                value={this.state.inStock}
                required
              />

              <input
                onChange={this.onChangeWeek1}
                type="text"
                placeholder="stock:week 1"
                value={this.state.week1}
                required
              />
              <input
                onChange={this.onChangeWeek2}
                type="text"
                placeholder="stock:week 2"
                value={this.state.week2}
                required
              />
              <input
                onChange={this.onChangeWeek3}
                type="text"
                placeholder="stock:week 3"
                value={this.state.week3}
                required
              />
              <input
                onChange={this.onChangeWeek4}
                type="text"
                placeholder="stock:week 4"
                value={this.state.week4}
                required
              />
              <input
                onChange={this.onChangeWeek5}
                type="text"
                placeholder="stock:week 5"
                value={this.state.week5}
                required
              />
              <input
                onChange={this.onChangeWeek6}
                type="text"
                placeholder="stock:week 6"
                value={this.state.week6}
                required
              />

              <input
                onChange={this.onChangeQuantity}
                type="text"
                placeholder="Quantity"
                value={this.state.quantity}
                required
              />
              <input
                onChange={this.onChangeImage}
                type="text"
                placeholder="Image"
                value={this.state.image}
                required
              />
              <button onClick={this.updatePro}>Update</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateProduct;
