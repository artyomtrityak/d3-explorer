import React from 'react';
import * as d3 from "d3";

export default class SvgVerticalBarChart extends React.Component {
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
    const width = 500;
    const height = 500;

    const xScale = d3.scaleBand()
      .range([0, width])
      .padding(0.1)
      .domain(this.state.data.map((x) => x.label));

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(this.state.data, x => x.val)])
      .range([height, 0]);

    const chart = d3.select(this.chart)
      .attr('height', height)
      .attr('width', width);

    const bar = chart.selectAll('g')
      .data(this.state.data)
      .enter()
        .append('g')
        .attr('transform', (x, i) => `translate(${xScale(x.label)}, 0)`);

    bar.append('rect')
      .attr("width", xScale.bandwidth())
      .attr("height", (x) => height - yScale(x.val))
      .attr('y', (x) => yScale(x.val));

    bar.append('text')
      .attr('x', xScale.bandwidth() / 2)
      .attr('y', (x) => yScale(x.val) + 20)
      .text((x) => x.val);
  }

  render() {
    return (
      <svg className="chart" style={{border: '1px solid red'}} ref={(r) => this.chart = r}></svg>
    );
  }
}
