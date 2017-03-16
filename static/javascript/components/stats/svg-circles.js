import React from 'react';
import * as d3 from "d3";

export default class SvgCircles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { val: 11, label: "A1" },
        { val: 33, label: "A2" },
        { val: 55, label: "A3" },
        { val: 64, label: "A4" },
        { val: 14, label: "A5" },
        { val: 5, label: "A6" }
      ]
    };
  }

  componentDidMount() {
    const chart = d3.select(this.chart)
      .attr('width', window.innerWidth-100)
      .attr('height', 500);

    const circles = chart.selectAll('circle')
      .data(this.state.data);

    circles
      .enter()
        .append('circle')
          .attr('class', 'booble')
          .attr('cy', 100)
          .attr('cx', (el, i) => i*100 + 50)
          .transition()
          .duration(1000)
          .attr('r', (el) => el.val);

    circles
      .exit()
        .transition()
        .attr('r', 0)
        .remove();
  }

  render() {
    return (
      <div>
        <svg className="chart" style={{border: '1px solid red'}} ref={(r) => this.chart = r}></svg>
      </div>
    );
  }
}
