import React from 'react';
import * as d3 from "d3";
import { generateArray } from '../../data-layer/array-processors';

export default class SvgVerticalBarChart extends React.Component {
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
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 500 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    const { xScale, yScale } = this.getScales(width, height, margin);

    const chart = d3.select(this.chartRef)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom);

    this.chartInner = chart
      .append("g")
        .attr('class', 'chart-inner')
        .attr("transform", `translate(${margin.left},${margin.top})`);

    const series = d3.stack()
      .keys(["apples", "bananas", "cherries"])
      (this.state.data);

    console.log(xScale('Q2-2017'));

    this.processing();
  }

  processing() {
  }

  getScales(width, height, margin) {
    const xScale = d3.scaleBand()
      .domain(this.state.data.map((d) => d.month))
      .rangeRound([margin.left, width - margin.right])
      .padding(0.1);

    return { xScale };
  }

  render() {
    return (
      <div className="chart-container">
        <svg className="chart" ref={(r) => this.chartRef = r}></svg>
      </div>
    );
  }
}
