import React from 'react';
import * as d3 from "d3";
import { generateArray } from '../../data-layer/array-processors';

export default class SvgVerticallyStackedBarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          label: 'Group A',
          vals: [
            {
              type: 'error',
              val: 12
            },
            {
              type: 'success',
              val: 16
            }
          ]
        },
        {
          label: 'Group B',
          vals: [
            {
              type: 'error',
              val: 8
            },
            {
              type: 'success',
              val: 16
            }
          ]
        },
        {
          label: 'Group C',
          vals: [
            {
              type: 'error',
              val: 8
            },
            {
              type: 'success',
              val: 4
            }
          ]
        },
        {
          label: 'Group D',
          vals: [
            {
              type: 'error',
              val: 15
            },
            {
              type: 'success',
              val: 4
            }
          ]
        },
        {
          label: 'Group E',
          vals: [
            {
              type: 'error',
              val: 8
            },
            {
              type: 'success',
              val: 4
            }
          ]
        }
      ]
    };
  }

  componentDidMount() {
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 800 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    const { xScale, xScaleGroup, yScale } = this.getScales(width, height);
    const xAxis = d3.axisBottom(xScaleGroup);
    const yAxis = d3.axisLeft(yScale).ticks(10);

    const chart = d3.select(this.chart)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom);

    chart
      .append("g")
        .attr('class', 'chart-inner')
        .attr("transform", `translate(${margin.left},${margin.top})`);

    chart.select('.chart-inner')
      .append('g')
        .attr("class", "x axis")
        .attr('transform', `translate(0, ${height})`)
        .call(xAxis)
      .append("text")
        .attr("y", 16)
        .attr("x", width + 20)
        .text("Labels");

    // chart.select('.chart-inner')
    //   .append('g')
    //     .attr("class", "y axis")
    //     .call(yAxis)
    //   .append("text")
    //     .attr("transform", "rotate(-90)")
    //     .attr("y", 6)
    //     .attr("dy", ".71em")
    //     .text("Frequency");

    const barsContainer = chart.select('.chart-inner')
      .append("g")
        .attr('class', 'chart-content');

    const barGroup = barsContainer.selectAll('g')
      .data(this.state.data)
      .enter()
        .append('g')
          .attr("transform", (d, i) => {
            return `translate(${xScaleGroup(d.label)},0)`;
          });
          //.attr('transform', (x, i) => `translate(${xScale(x.label)}, 0)`);

    const barContainer = barGroup.selectAll('rect')
      .data((d) => {
        return d.vals;
      })
      .enter()
        .append('g')
          .attr("transform", (d, i) => {
            return `translate(${i * (xScaleGroup.bandwidth() / 2)},0)`;
          });

    barContainer.append('rect')
      .style('fill', (d) => {
        return d.type === 'error' ? 'red' : 'green';
      })
      .attr('y', (d) => yScale(d.val))
      .attr("width", xScaleGroup.bandwidth() / 2)
      .attr("height", (x) => height - yScale(x.val));

    barContainer.append('text')
      .attr('x', xScaleGroup.bandwidth() / 4)
      .attr('y', (x) => yScale(x.val) + 20)
      .text((x) => x.val);
  }

  getScales(width, height) {
    const xScale = d3.scaleBand()
      .range([0, width])
      .domain(d3.range(10)); // total items length;

    const xScaleGroup = d3.scaleBand()
      .range([0, width])
      .padding(0.2)
      .domain(this.state.data.map((d) => d.label)); // groups length


    const yScale = d3.scaleLinear()
      .domain([0, 20])
      .range([height, 0]);

    return { xScale, xScaleGroup, yScale };
  }

  render() {
    return (
      <div>
        <svg className="basic" ref={(r) => this.chart = r}></svg>
      </div>
    );
  }
}
