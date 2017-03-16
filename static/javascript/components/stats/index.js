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
      .range([0, window.innerWidth-100]);

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


    const data2 = [
      { val: 11, label: "A1" },
      { val: 33, label: "A2" },

      { val: 55, label: "A3" },
      { val: 64, label: "A4" },

      { val: 14, label: "A5" },
      { val: 5, label: "A6" }
    ];

    const scale2 = d3.scaleLinear()
      .domain([0, d3.max(data2, x => x.val)])
      .range([0, window.innerWidth-100]);


    const chart2 = d3.select(this.chart2)
      .attr('height', 50 * data2.length)
      .attr('width', window.innerWidth-100);

    const bar = chart2.selectAll('g')
      .data(data2)
      .enter()
        .append('g')
        .attr('transform', (el, i) => `translate(0, ${i * 40})`);

    bar.append('rect')
      .attr("width", (x) => scale2(x.val))
      .attr("height", 30);

    bar.append('text')
      .attr('x', (x) => scale2(x.val) - 10)
      .attr('y', 15)
      .attr('dy', '0.35em')
      .text((x) => `${x.label} - ${x.val}`);
  }

  render() {
    return (
      <div>
        Stats D3
        <div style={{border: '1px solid red'}} ref={(r) => this.chart = r}></div>
        <svg className="chart" ref={(r) => this.chart2 = r}></svg>
      </div>
    );
  }
};