import React from 'react';
import * as d3 from "d3";

export default class SvgLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        [0, 80],
        [100, 100],
        [200, 30],
        [300, 50],
        [400, 40],
        [500, 80]
      ]
    };
  }

  componentDidMount() {
    const areaGenerator = d3.area()
      .y0(150);

    const chart = d3.select(this.chart)
      .attr('width', window.innerWidth-100)
      .attr('height', 500)
      .append('g')
        .attr('transform', 'translate(100, 0)');

    chart
      .append('path')
        .attr('d', areaGenerator(this.state.data));
  }

  render() {
    return (
      <svg className="line-chart--area" ref={(r) => this.chart = r}>
      </svg>
    );
  }
}
