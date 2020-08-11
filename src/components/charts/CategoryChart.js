import React from "react";
import logo from "../images/inventory.jpg";
import { Link } from "react-router-dom";
import "../css/chartcomponent.css";

import Chart from "react-google-charts";
import Common from "../Common";
class CategoryChart extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.location.state);
    if (this.props.location.state === undefined) {
      this.props.history.push("/products");
      window.location.reload(false);
    }

    this.get();

    this.state = {
      avg: [],

      data: [
        ["Electronics", "Stock", { role: "style" }],
        [
          this.props.location.state[0].productName,
          this.props.location.state[0].averageStock,
          "stroke-color: #703593; stroke-width: 4; fill-color: red",
        ],
        [
          this.props.location.state[1].productName,
          this.props.location.state[1].averageStock,
          "stroke-color: #703593; stroke-width: 4; fill-color: blue",
        ],

        //    "Week 3",
        //   value.week3,
        //   "stroke-color: #703593; stroke-width: 4; fill-color: yellow",

        // [
        //   "Week 4",
        //   value.week4,
        //   "stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF",
        // ],
        // [
        //   "Week 5",
        //   value.week5,
        //   "stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 8; fill-color: #BC5679; fill-opacity: 0.2",
        // ],
        // [
        //   "Week 6",
        //   value.week6,
        //   "stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 8; fill-color: #BC5679; fill-opacity: 0.2",
        // ],
      ],
    };
  }

  get = () => {
    console.log(this.props.location.state);
    var avgs = this.props.location.state.map((avg) => {
      return avg.averageStock;
    });
    this.setState({
      avg: avgs,
    });
    console.log(avgs[0]);
  };

  componentWillMount() {
    console.log(this.props.location.state);
  }

  render() {
    return (
      <div>
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

        {/* <br />
        <br />
        <br />
        <br /> */}

        <Common></Common>

        <div className="contentchart">
          <br />
          <br />
          <br />
          <br />
          <br />

          <h1
            style={{
              marginTop: "-30px",
              color: "white",
              fontFamily: "TimesNewRoman",
              textDecoration: "underline",
            }}
          >
            Average Stock details:
          </h1>

          <Chart
            chartType="BarChart"
            width="100%"
            height="500px"
            data={this.state.data}
          />
        </div>
      </div>
    );
  }
}
export default CategoryChart;
