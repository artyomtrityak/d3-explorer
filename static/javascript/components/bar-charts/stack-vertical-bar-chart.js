import React from "react";
import * as d3 from "d3";
import WithSize from "../../shared/with-size";

function stackMin(serie) {
  return d3.min(serie, d => d[0]);
}

function stackMax(serie) {
  return d3.max(serie, d => d[1]);
}

const MARGINS = { top: 20, right: 30, bottom: 30, left: 40 };

class StackVerticalBarChart extends React.Component {
  static displayName = "StackVerticalBarChart";

  constructor(props) {
    super(props);
    this.state = {
      keys: ["apples", "bananas", "cherries"],
      data: [
        { month: "Q1-2017", apples: 300, bananas: 500, cherries: 700, total: 1500 },
        { month: "Q2-2017", apples: 500, bananas: 400, cherries: 1000, total: 1900 },
        { month: "Q3-2017", apples: 700, bananas: 200, cherries: 500, total: 1400 },
        { month: "Q4-2017", apples: 300, bananas: 700, cherries: 200, total: 1200 },
        { month: "Q1-2018", apples: 300, bananas: 700, cherries: 200, total: 1200 },
        { month: "Q2-2018", apples: 500, bananas: 400, cherries: 1000, total: 1900 },
        { month: "Q3-2018", apples: 300, bananas: 500, cherries: 700, total: 1500 }
      ]
    };
  }

  componentDidMount() {
    const chart = d3
      .select(this.chartRef)
      .attr("width", this.props.width)
      .attr("height", this.props.height);

    this.chartInner = chart
      .append("g")
      .attr("class", "chart-inner")
      .attr("transform", `translate(${MARGINS.left},${MARGINS.top})`);

    const series = d3.stack().keys(this.state.keys)(this.state.data);

    const { xScale, yScale } = this.getScales(this.props.width, this.props.height, series);

    this.chartInner
      .append("g")
      .attr("transform", "translate(0," + yScale(0) + ")")
      .call(d3.axisBottom(xScale));

    this.chartInner
      .append("g")
      .attr("transform", "translate(" + MARGINS.left + ",0)")
      .call(d3.axisLeft(yScale));

    const colors = d3.scaleOrdinal(d3.schemeCategory10);

    this.chartInner
      .append("g")
      .selectAll("g")
      .data(series)
      .enter()
      .append("g")
      .attr("fill", d => colors(d.key))
      .selectAll("rect")
      .data(d => d)
      .enter()
      .append("rect")
      .attr("width", xScale.bandwidth)
      .attr("x", d => xScale(d.data.month))
      .attr("y", d => yScale(d[1]))
      .attr("height", d => yScale(d[0]) - yScale(d[1]));
  }

  getScales(width, height, series) {
    const xScale = d3
      .scaleBand()
      .domain(this.state.data.map(d => d.month))
      .rangeRound([MARGINS.left, width - MARGINS.right])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([d3.min(series, stackMin), d3.max(series, stackMax)])
      .rangeRound([height - MARGINS.bottom, MARGINS.top]);

    return { xScale, yScale };
  }

  createScaleX() {}

  createScaleY() {}

  render() {
    return (
      <div>
        <svg className="bar-chart bar-chart--stack" ref={r => (this.chartRef = r)} />
      </div>
    );
  }

  renderStack(stack) {}
}

export default WithSize(StackVerticalBarChart);
