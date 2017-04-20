import React from 'react';
import * as d3 from "d3";

export default class DivHorisontalBarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [4, 8, 15, 16, 23, 42]
    };
  }

  componentDidMount() {
    const scale = d3.scaleLinear()
      .domain([0, d3.max(this.state.data)])
      .range([0, window.innerWidth-100]);

    const p = d3.select(this.chart).selectAll("div")
      .data(this.state.data)
      .text(d => {
        return d;
      });

    p.enter()
      .append("div")
        .attr("class", "bar-chart--div")
        .transition()
        .duration(1000)
        .style("width", d => scale(d) + "px")
        .text(d => d);

    p.exit()
      .remove();
  }

  render() {
    return (
      <div ref={(r) => this.chart = r}></div>
    );
  }
}
