import React from "react";

import Chart from "react-google-charts";
import "./css/chartcomponent.css";
import Common from "./Common";

class ChartComponent extends React.Component {
  constructor(props) {
    super(props);
    var value = this.props.location.state.chartdata;
    this.state = {
      data: [
        ["Ye", "Stock", { role: "style" }],
        [
          "Week 1",
          value.week1,
          "stroke-color: #703593; stroke-width: 4; fill-color: red",
        ],
        [
          "Week 2",
          value.week2,
          "stroke-color: #703593; stroke-width: 4; fill-color: blue",
        ],
        [
          "Week 3",
          value.week3,
          "stroke-color: #703593; stroke-width: 4; fill-color: yellow",
        ],
        [
          "Week 4",
          value.week4,
          "stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF",
        ],
        [
          "Week 5",
          value.week5,
          "stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 8; fill-color: #BC5679; fill-opacity: 0.2",
        ],
        [
          "Week 6",
          value.week6,
          "stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 8; fill-color: #BC5679; fill-opacity: 0.2",
        ],
      ],
    };
  }

  componentWillMount() {
    console.log(this.props.location.state);
  }

  render() {
    return (
      <div>
        <Common></Common>

        <div className="content">
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

export default ChartComponent;
