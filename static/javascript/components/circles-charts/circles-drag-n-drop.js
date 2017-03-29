import React from 'react';
import * as d3 from "d3";

export default class SvgCircles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { val: 19, label: "A1" },
        { val: 33, label: "A2" },
        { val: 55, label: "A3" },
        { val: 64, label: "A4" },
        { val: 14, label: "A5" },
        { val: 21, label: "A6" }
      ]
    };
  }

  componentDidMount() {
    const chart = d3.select(this.chartRef)
      .attr('width', window.innerWidth-100)
      .attr('height', 500);

    const color = d3.scaleOrdinal()
      .range(d3.schemeCategory10);

    const circles = chart.selectAll('circle')
      .data(this.state.data);

    circles
      .enter()
        .append('circle')
          .attr('cy', 100)
          .attr('cx', (el, i) => i*100 + 50)
          .attr('fill', (d, i) => color(i))
        .merge(circles) //merges enter() and update()
          .call(
            d3.drag()
              .on('start', this.onDragStart)
              .on('drag', this.onDrag)
              .on('end', this.onDragEnd)
          )
          .transition()
          .duration(1000)
          .attr('r', (el) => el.val);

    circles
      .exit()
        .transition()
        .attr('r', 0)
        .remove();
  }

  onDragStart() {
    d3.select(this).classed('active', true);
  }

  onDrag(d) {
    d3.select(this).attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);
  }

  onDragEnd() {
    d3.select(this).classed('active', false);
  }

  render() {
    return (
      <div className="chart-container">
        <svg className="chart" ref={(r) => this.chartRef = r}></svg>
      </div>
    );
  }
}
