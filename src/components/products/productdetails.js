import React from "react";
import "../css/products.css";

class ProductDetails extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }

  componentWillMount() {
    console.log(this.props);
  }

  // deleteProduct = () => {
  //   console.log(this.props.id);

  //   this.props.deleteId(this.props.id);
  // };
  // updateProduct = () => {
  //   console.log(this.props.id);

  //   this.props.updateId(this.props.id);
  // };
  dashboard = () => {
    this.props.dashId(this.props.id);
  };

  details = () => {
    this.props.detailsId(
      this.props.id,
      this.props.name,
      this.props.description,
      this.props.price,
      this.props.category,
      this.props.stock,
      this.props.quantity,
      this.props.image
    );
  };

  render() {
    return (
      <div>
        <div className="card">
          <div className="title">{this.props.name}</div>
          <div className="image">
            <img src={this.props.image} />
          </div>

          <div className="price">${this.props.price}</div>

          <div>
            <button className="buttonproduct" onClick={this.dashboard}>
              View dashboard
            </button>
            <button className="buttonproduct" onClick={this.details}>
              View details
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
