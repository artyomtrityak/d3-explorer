import React from 'react';
import * as d3 from "d3";

export default class SvgLine extends React.Component {
  constructor(props) {
    super(props);
    const parseTime = d3.timeParse("%Y");
    this.state = {
      data: [
        {
          date: parseTime('2013'),
          value: 121
        },
        {
          date: parseTime('2014'),
          value: 111
        },
        {
          date: parseTime('2015'),
          value: 91
        },
        {
          date: parseTime('2016'),
          value: 111
        },
        {
          date: parseTime('2017'),
          value: 150
        }
      ]
    };
  }

  componentDidMount() {
    const width = 700,
          height = 500;

    const lineGenerator = d3.line()
      .x(d => x(d.date))
      .y(d => y(d.value));

    const x = d3.scaleTime()
      .domain([new Date(2013, 0, 1), new Date(2017, 0, 1)]) // min max dates
      .range([0, width]);

    const y = d3.scaleLinear()
      .domain([0, 150]) //max value
      .range([height, 0]);

    const chart = d3.select(this.chartRef)
      .attr('width', width)
      .attr('height', height)
      .append('g')
        .attr('transform', 'translate(100, 0)');

    chart
      .append('path')
        .style('stroke', 'red')
        .attr('d', lineGenerator(this.state.data));
  }

  render() {
    return (
      <svg className="line-charts__base" ref={(r) => this.chartRef = r}></svg>
    );
  }
}
