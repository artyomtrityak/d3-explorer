import React from 'react';
import * as d3 from "d3";

export default class BasicPieChart extends React.Component {
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
    const width = 960,
      height = 500,
      outerRadius = height / 2 - 20,
      innerRadius = outerRadius / 3,
      cornerRadius = 10;

    const colors = d3.scaleOrdinal(d3.schemeCategory10);

    const chart = d3.select(this.chartRef)
      .attr('width', window.innerWidth-100)
      .attr('height', 500)
      .append('g')
        .attr('transform', `translate(${width/2}, ${height/2})`);

    const pie = d3.pie()
      .sort(null)
      .value((d) => d.apples)
      .padAngle(.02);

    var arc = d3.arc()
      .padRadius(outerRadius)
      .innerRadius(innerRadius);

    chart.selectAll("path")
      .data(pie(this.state.data))
      .enter()
        .append("path")
          .attr('fill', (d, i) => colors(i))
          .each((d) => { d.outerRadius = outerRadius - 20; })
          .attr("d", arc);
  }

  render() {
    return (
      <svg className="basic-pie" ref={(r) => this.chartRef = r}></svg>
    );
  }
}
