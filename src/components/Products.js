import React from "react";
import logo from "./images/logoo.png";
import "./css/products.css";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductDetails from "./productdetails";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      manage: false,
      presentId: 0,
      searchproducts: [],
      search: false,
    };
  }

  componentWillMount() {
    this.getAllProducts();
  }

  getSearch = (event) => {
    let searchV = event.target.value;
    if (searchV === "") {
      this.getAllProducts();
      this.setState({
        searchproducts: this.state.products,
        search: false,
      });
    }
    this.setState({ searchValue: searchV });
    console.log(searchV);
    let searchF = this.state.products.filter((p) => {
      return p.productName.toLowerCase().match(searchV.toLowerCase());
    });
    console.log(searchF);

    if (searchF) {
      console.log("search");
      this.setState({ searchproducts: searchF, search: true });
      console.log(this.state.searchproducts);
    }
  };

  getAllProducts = () => {
    axios.get("http://localhost:3000/allproducts").then(
      (response) => {
        console.log(response);
        console.log(response.data);
        this.setState({ products: response.data });
        console.log(this.state.products);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  renderAllProducts = () => {
    if (this.state.search === true) {
      console.log("true");

      return this.state.searchproducts.map((product) => {
        return (
          <ProductDetails
            key={product.id}
            id={product.id}
            name={product.productName}
            description={product.productDescription}
            category={product.categoryName}
            price={product.productPrice}
            stock={product.inStock}
            quantity={product.quantity}
            image={product.productImage}
            // deleteId={this.deleteProductById}
            // updateId={this.updateProductById}
            dashId={this.dashProductById}
            detailsId={this.detailsById}
          ></ProductDetails>
        );
      });
    }
    return this.state.products.map((product) => {
      return (
        <ProductDetails
          key={product.id}
          id={product.id}
          name={product.productName}
          description={product.productDescription}
          category={product.categoryName}
          price={product.productPrice}
          stock={product.inStock}
          quantity={product.quantity}
          image={product.productImage}
          // deleteId={this.deleteProductById}
          // updateId={this.updateProductById}
          dashId={this.dashProductById}
          detailsId={this.detailsById}
        ></ProductDetails>
      );
    });
  };

  // deleteProductById = (id) => {
  //   axios.delete("http://localhost:3000/allproducts/" + id).then(
  //     (response) => {
  //       console.log(response);
  //       this.getAllProducts();
  //     },

  //     (error) => {
  //       error.log(error);
  //     }
  //   );
  // };

  detailsById = (
    id,
    name,
    description,
    price,
    category,
    stock,
    quantity,
    image,
    updateId
  ) => {
    console.log(
      id,
      name,
      description,
      price,
      category,
      stock,
      quantity,
      image,
      updateId
    );
    console.log(updateId);
    this.props.history.push({
      pathname: "/pdp",
      state: {
        id: id,
        name: name,
        description: description,
        price: price,
        category: category,
        stock: stock,
        quantity: quantity,
        image: image,
      },
    });
  };

  electronicsFetch = () => {
    axios
      .get("http://localhost:3000/allproducts?categoryName=Electronics")
      .then(
        (response) => {
          console.log(response);
          this.setState({
            products: response.data,
          });
          this.renderAllProducts();
        },

        (error) => {
          console.error(error);
        }
      );
  };

  electronicsFetch = () => {
    axios
      .get("http://localhost:3000/allproducts?categoryName=Electronics")
      .then(
        (response) => {
          console.log(response);
          this.setState({
            products: response.data,
          });
          this.renderAllProducts();
        },

        (error) => {
          console.error(error);
        }
      );
  };
  dressFetch = () => {
    axios.get("http://localhost:3000/allproducts?categoryName=Dress").then(
      (response) => {
        console.log(response);
        this.setState({
          products: response.data,
        });
        this.renderAllProducts();
      },

      (error) => {
        console.error(error);
      }
    );
  };
  kidsFetch = () => {
    axios.get("http://localhost:3000/allproducts?categoryName=Kids").then(
      (response) => {
        console.log(response);
        this.setState({
          products: response.data,
        });
        this.renderAllProducts();
      },

      (error) => {
        console.error(error);
      }
    );
  };

  dashProductById = (id) => {
    axios.get("http://localhost:3000/allproducts/" + id).then(
      (response) => {
        console.log(response.data);
        this.props.history.push({
          pathname: "/chart",
          state: {
            chartdata: response.data.stock,
          },
        });
      },
      (error) => {
        console.error(error);
      }
    );
  };

  updateProductById = (id) => {
    this.setState({ presentId: id });
    console.log("update friend with id: " + id);
    this.props.history.push({
      pathname: "/update",
      state: { presentId: id },
    });
  };

  addNewProduct = () => {
    this.props.history.push({
      pathname: "/addnewproduct",
      state: this.state.products,
    });
  };

  // manageState=()=>{
  //   console.log("manage")

  //   this.setState({

  //     manage:true
  //   })
  // }

  // manageProducts=()=>{
  //   console.log("inside manage")

  //   return this.state.products.map((product) => {
  //     return (
  //       <ManageProducts
  //         key={product.id}
  //         id={product.id}
  //         name={product.productName}
  //         description={product.productDescription}
  //         category={product.categoryName}
  //         stock={product.inStock}
  //         quantity={product.quantity}
  //         image={product.productImage}

  //       ></ManageProducts>
  //     );
  //   });

  // }

  render() {
    return (
      <div className="marginn">
        <input type="checkbox" id="check" />
        <header>
          <label for="check">
            <i className="fas fa-bars" id="sidebar_btn"></i>
            <div className="box">
              <table className="element">
                <tr>
                  <td>
                    <input
                      type="text"
                      value={this.state.searchValue}
                      onChange={this.getSearch}
                      placeholder="Search for products.."
                      className="search"
                    />
                  </td>
                  <td>
                    <a href="">
                      <i className="fas fa-search"></i>
                    </a>
                  </td>
                </tr>
              </table>
            </div>
          </label>
          <div className="left_area">
            <h3>
              <span>Inventory.com</span>
            </h3>
          </div>

          <div className="right_area">
            <button onClick={this.addNewProduct} className="managebutton">
              Add new Product
            </button>
          </div>
        </header>
        <div className="sidebar">
          <center>
            <img
              src={logo}
              className="image"
              alt="image"
            />
            
          </center>
          <a>
            <i className="fas fa-desktop"></i>

            <span>Home</span>
          </a>
          <a>
            <i className="fas fa-tv"></i>
            <span style={{cursor:'pointer'}} onClick={this.electronicsFetch}>Electronics</span>
          </a>
          <a>
            <i className="fas fa-tshirt"></i>
            <span style={{cursor:'pointer'}} onClick={this.dressFetch}>Clothing</span>
          </a>
          <a>
            <i className="fas fa-book"></i>
            <span style={{cursor:'pointer'}} onClick={this.kidsFetch}>Kids</span>
          </a>

          <Link to="/signup">
            <i className="fas fa-sign-out-alt"></i>
            <span>Signout</span>
          </Link>
        </div>

        <div className="content">
          <div className="product-list">
            <div className="product-container">{this.renderAllProducts()}</div>
          </div>
       
       
       
       {/* {this.renderAllProducts} */}
       
       
       
       
       
        </div>
      </div>
    );
  }
}

export default Products;
