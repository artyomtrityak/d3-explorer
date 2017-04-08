import React from 'react';
import * as d3 from "d3";

export default class BasicForceChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
      ]
    };
  }

  componentDidMount() {
    const width = 700,
          height = 500;

    const chart = d3.select(this.chartRef)
      .attr('width', width+100)
      .attr('height', height)
      .append('g')
        .attr('transform', 'translate(100, 0)');
  }

  render() {
    return (
      <svg className="force-chart-1" ref={(r) => this.chartRef = r}></svg>
    );
  }
}
