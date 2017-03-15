import React from 'react';
import * as d3 from "d3";

export default class Stats extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    console.log(this.chart);

    var p = d3.select(this.chart)
    .selectAll("div")
    .data([4, 8, 15, 16, 23, 42])
    .text(function(d) {
      return d;
    });

    // Enter…
    p.enter()
     .append("div")
     .attr('class', 'my-class')
     .transition()
     .duration(1000)
     .style("width", d => d + "0px")
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
      </div>
    );
  }
};