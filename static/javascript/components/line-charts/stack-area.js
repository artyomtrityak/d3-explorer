import React from 'react';
import * as d3 from "d3";

export default class StackedAreaLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          date: new Date(2015, 0, 1),
          successfull: 11,
          failed: 12,
          warning: 21
        },
        {
          date: new Date(2016, 0, 1),
          successfull: 9,
          failed: 7,
          warning: 11
        },
        {
          date: new Date(2017, 0, 1),
          successfull: 9,
          failed: 2,
          warning: 7
        },
        {
          date: new Date(2018, 0, 1),
          successfull: 17,
          failed: 3,
          warning: 9
        }
      ]
    };
  }

  componentDidMount() {
    const margin = {top: 20, right: 20, bottom: 30, left: 50},
          width = 700 - margin.left - margin.right,
          height = 500 - margin.top - margin.bottom;

    const chart = d3.select(this.chartRef)
      .attr('width', 700) //base width todo
      .attr('height', 500) //base height todo
      .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3.scaleTime()
      .domain([new Date(2015, 0, 1), new Date(2018, 0, 1)]) // min max dates
      .range([0, width]);

    const y = d3.scaleLinear()
      .range([height, 0])
      .domain([0, 50]); //max sum or all within one date

    const z = d3.scaleOrdinal(d3.schemeCategory10)
      .domain(['successfull', 'failed', 'warning'])
      .range(['green', 'red', 'yellow']);

    const stack = d3.stack()
      .keys(['successfull', 'failed', 'warning']);

    const area = d3.area()
      .x((d, i) => {
        return x(d.data.date);
      })
      .y0((d) => {
        return y(d[0]);
      })
      .y1((d) => {
        return y(d[1]);
      });

    const layer = chart.selectAll(".layer")
      .data(stack(this.state.data))
      .enter()
        .append("g")
          .attr("class", "layer");

    layer
      .append('path')
        .attr("class", "area")
        .style("fill", (d) => {
          return z(d.key);
        })
        .attr("d", area);
  }

  render() {
    return (
      <svg className="line-charts__area" ref={(r) => this.chartRef = r}></svg>
    );
  }
}
