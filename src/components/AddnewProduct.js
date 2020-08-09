import React from "react";
import "./css/addnewproduct.css";
import axios from "axios";
import Common from "./Common";
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
    };
  }

  addNewProduct = (event) => {
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
        this.props.history.push("/products");
      },
      (error) => {
        console.error(error);
      }
    );
  };

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
    this.setState({ week1: parseInt(event.target.value) });
  };
  onChangeWeek2 = (event) => {
    this.setState({ week2: parseInt(event.target.value) });
  };
  onChangeWeek3 = (event) => {
    this.setState({ week3: parseInt(event.target.value) });
  };
  onChangeWeek4 = (event) => {
    this.setState({ week4: parseInt(event.target.value) });
  };
  onChangeWeek5 = (event) => {
    this.setState({ week5: parseInt(event.target.value) });
  };
  onChangeWeek6 = (event) => {
    this.setState({ week6: parseInt(event.target.value) });
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
        <div className="content">
         


         

          <div className="wrapadd">
            <h3 style={{fontFamily:'TimesNewRoman',fontSize:'30px',textDecoration:'underline',color:'lightgoldenrodyellow'}}><b>Add new product</b></h3>
           
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
                type="text"
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
               <option placeholder="Category">
                  Please select Category
                </option>
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
                type="text"
                placeholder="Quantity"
                required
              />

              <input
                onChange={this.onChangeWeek1}
                type="text"
                placeholder="stock:week 1"
                required
              />
              <input
                onChange={this.onChangeWeek2}
                type="text"
                placeholder="stock:week 2"
                required
              />
              <input
                onChange={this.onChangeWeek3}
                type="text"
                placeholder="stock:week 3"
                required
              />
              <input
                onChange={this.onChangeWeek4}
                type="text"
                placeholder="stock:week 4"
                required
              />
              <input
                onChange={this.onChangeWeek5}
                type="text"
                placeholder="stock:week 5"
                required
              />
              <input
                onChange={this.onChangeWeek6}
                type="text"
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
        </div>
      </div>
    );
  }
}

export default AddnewProduct;
