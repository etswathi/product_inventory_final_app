import React from "react";
import "./css/addnewproduct.css";
import axios from "axios";
import Common from "./Common";
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
    };
  }

  componentWillMount() {
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

  onChangeName = (event) => {
    this.setState({
      productName: event.target.value,
    });
  };
  onChangeDescription = (event) => {
    this.setState({
      productDescription: event.target.value,
    });
  };
  onChangePrice = (event) => {
    this.setState({
      productPrice: event.target.value,
    });
  };
  onChangeCategory = (event) => {
    this.setState({
      categoryName: event.target.value,
    });
  };
  onChangeStock = (event) => {
    this.setState({
      inStock: event.target.value,
    });
  };
  onChangeQuantity = (event) => {
    this.setState({ quantity: event.target.value });
  };

  onChangeWeek1 = (event) => {
    this.setState({ week1: event.target.value });
  };
  onChangeWeek2 = (event) => {
    this.setState({ week2: event.target.value });
  };
  onChangeWeek3 = (event) => {
    this.setState({ week3: event.target.value });
  };
  onChangeWeek4 = (event) => {
    this.setState({ week4: event.target.value });
  };
  onChangeWeek5 = (event) => {
    this.setState({ week5: event.target.value });
  };
  onChangeWeek6 = (event) => {
    this.setState({ week6: event.target.value });
  };

  onChangeImage = (event) => {
    this.setState({
      image: event.target.value,
    });
  };

  updatePro = (event) => {
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

  render() {
    console.log(this.props);
    return (
      <div>
        <Common></Common>

        <div className="content">
         

          <div className="wrapadd">
          <h3 style={{fontFamily:'TimesNewRoman',fontSize:'30px',textDecoration:'underline',color:'lightgoldenrodyellow'}}><b>Add new product</b></h3>
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
                placeholder="Ctegory"
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
