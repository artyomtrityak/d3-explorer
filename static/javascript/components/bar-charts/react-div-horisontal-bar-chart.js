import ReactDOM from "react-dom";
import React from "react";
import * as d3 from "d3";

export default class DivHorisontalBarChart extends React.Component {
  static displayName = "DivHorisontalBarChart";
  state = {
    data: [4, 8, 15, 16, 23, 42],
    xScale: null
  };

  componentDidMount() {
    const margin = { left: 0, right: 50 };
    const width = ReactDOM.findDOMNode(this).parentNode.clientWidth;
    console.log(width);
    const xScale = d3
      .scaleLinear()
      .domain([0, d3.max(this.state.data)])
      .range([0, width - margin.left - margin.right]);
    this.setState({ xScale });
  }

  render() {
    return <div className="bar-chart">{this.state.xScale ? this.renderBars() : null}</div>;
  }

  renderBars() {
    return this.state.data.map((d, i) => (
      <div key={i} className="bar-chart__div" style={{ width: this.state.xScale(d) }}>
        {d}
      </div>
    ));
  }
}
