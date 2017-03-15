import React from 'react';
import * as d3 from "d3";

export default class Stats extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    console.log(this.chart);
    const data = [4, 8, 15, 16, 23, 42];

    const scale = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([0, window.innerWidth]);

    var p = d3.select(this.chart)
    .selectAll("div")
    .data(data)
    .text(d => {
      return d;
    });

    // Enter…
    p.enter()
     .append("div")
     .attr('class', 'my-class')
     .transition()
     .duration(1000)
     .style("width", d => scale(d) + "px")
     .text(d => {
       return d;
     });

    // Exit…
    p.exit().remove();
  }

  render() {
    return (
      <div>
        Stats D3
        <div style={{border: '1px solid red'}} ref={(r) => this.chart = r}></div>
        <div style={{border: '1px green red'}} ref={(r) => this.chart2 = r}></div>
      </div>
    );
  }
};