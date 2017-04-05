import React from 'react';
import * as d3 from "d3";

export default class SvgLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { month: "Q1-2017", apples: 3840, bananas: 1920, cherries: 1960},
        { month: "Q2-2017", apples: 1600, bananas: 1440, cherries: 960},
        { month: "Q3-2017", apples: 640, bananas: 960, cherries: 640},
        { month: "Q4-2017", apples: 320, bananas: 480, cherries: 640}
      ]
    };
  }

  componentDidMount() {
    const chart = d3.select(this.chartRef)
      .attr('width', window.innerWidth-100)
      .attr('height', 500)
      .append('g')
        .attr('transform', 'translate(100, 0)');
  }

  render() {
    return (
      <svg className="basic-pie" ref={(r) => this.chartRef = r}></svg>
    );
  }
}
