import React from 'react';
import * as d3 from "d3";
import { generateArray } from '../../data-layer/array-processors';


function stackMin(serie) {
  return d3.min(serie, (d) => d[0]);
}

function stackMax(serie) {
  return d3.max(serie, (d) => d[1]);
}

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

    const { xScale, yScale } = this.getScales(width, height, margin, series);

    this.chartInner.append("g")
      .attr("transform", "translate(0," + yScale(0) + ")")
      .call(d3.axisBottom(xScale));

    this.chartInner.append("g")
      .attr("transform", "translate(" + margin.left + ",0)")
      .call(d3.axisLeft(yScale));

    const colors = d3.scaleOrdinal(d3.schemeCategory10);

    this.chartInner
      .append('g')
        .selectAll("g")
        .data(series)
        .enter()
          .append("g")
            .attr("fill", (d) => colors(d.key))
            .selectAll("rect")
            .data((d) => d)
            .enter()
              .append("rect")
                .attr("width", xScale.bandwidth)
                .attr("x", (d) => xScale(d.data.month))
                .attr("y", (d) => yScale(d[1]))
                .attr("height", (d) => yScale(d[0]) - yScale(d[1]));

    this.processing();
  }

  processing() {
  }

  getScales(width, height, margin, series) {
    const xScale = d3.scaleBand()
      .domain(this.state.data.map((d) => d.month))
      .rangeRound([margin.left, width - margin.right])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([d3.min(series, stackMin), d3.max(series, stackMax)])
      .rangeRound([height - margin.bottom, margin.top]);

    return { xScale, yScale };
  }

  render() {
    return (
      <div className="stack-chart-container">
        <svg className="stack-chart" ref={(r) => this.chartRef = r}></svg>
      </div>
    );
  }
}
