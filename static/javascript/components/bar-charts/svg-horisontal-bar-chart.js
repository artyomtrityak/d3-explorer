import React from 'react';
import * as d3 from "d3";
import { generateArray } from '../../data-layer/array-processors';

export default class SvgHorisontalBarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: generateArray()
    };
  }

  componentDidMount() {
    const scale = d3.scaleLinear()
      .domain([0, d3.max(this.state.data, x => x.val)])
      .range([0, window.innerWidth-100]);

    const chart = d3.select(this.chartRef)
      .attr('height', 50 * this.state.data.length)
      .attr('width', window.innerWidth-100);

    const bar = chart.selectAll('g')
      .data(this.state.data)
      .enter()
        .append('g')
        .attr('transform', (el, i) => `translate(0, ${i * 40})`);

    bar.append('rect')
      .attr("width", (x) => scale(x.val))
      .attr("height", 30);

    bar.append('text')
      .attr('x', (x) => scale(x.val) - 10)
      .attr('y', 15)
      .attr('dy', '0.35em')
      .text((x) => `${x.label} - ${x.val}`);
  }

  render() {
    return (
      <div className="chart-container">
        <svg ref={(r) => this.chartRef = r}></svg>
      </div>
    );
  }
}
