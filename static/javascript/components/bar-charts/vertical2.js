import React from "react";
import { generateArray } from "../../data-layer/array-processors";
import * as d3 from "d3";

export default class ReactVerticalBarChart extends React.Component {
  static displayName = "ReactVerticalBarChart";

  state = {
    initialized: false,
    data: generateArray() // [ {val: 12, label: 'Label A}, ... {val: 32, label: 'Label XX'} ]
  };

  xScale = null;
  yScale = null;
  height = 500;

  constructor(props) {
    super(props);
    this.svgRef = React.createRef();
  }

  componentDidMount() {
    const width = this.svgRef.current.clientWidth - 50;

    this.xScale = d3
      .scaleBand()
      .domain(this.state.data.map(d => d.label))
      .range([0, width])
      .paddingInner(0.1);

    this.yScale = d3
      .scaleLinear()
      .domain([d3.min(this.state.data, d => d.val), d3.max(this.state.data, d => d.val)])
      .range([0, this.height]);

    this.setState({ initialized: true });
  }

  render() {
    return (
      <svg className="bar-chart bar-chart--full-width" ref={this.svgRef}>
        {this.state.initialized ? this.renderBars() : null}
      </svg>
    );
  }

  renderBars() {
    return this.state.data.map(d => {
      return (
        <g key={`bar-${d.label}`} transform={`translate(${this.xScale(d.label)}, ${this.height - this.yScale(d.val)})`}>
          <rect className="bar-chart__bar" width={this.xScale.bandwidth()} height={this.yScale(d.val)} />
          <text className="bar-chart__text">{d.label}</text>
        </g>
      );
    });
  }
}
