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
    const oneBarWidth = width / this.state.data.length;

    const scale = d3.scaleLinear()
      .domain([0, d3.max(this.state.data, x => x.val)])
      .range([height, 0]);

    const chart = d3.select(this.chart)
      .attr('height', height)
      .attr('width', width);

    const bar = chart.selectAll('g')
      .data(this.state.data)
      .enter()
        .append('g')
        .attr('transform', (el, i) => `translate(${i * oneBarWidth}, 0)`);

    bar.append('rect')
      .attr("width", oneBarWidth - 1)
      .attr("height", (x) => height - scale(x.val))
      .attr('y', (x) => scale(x.val));

    bar.append('text')
      .attr('x', (x, i) => `${oneBarWidth/2}`)
      .attr('y', (x) => scale(x.val) + 20)
      .text((x) => x.val);
  }

  render() {
    return (
      <svg className="chart" style={{border: '1px solid red'}} ref={(r) => this.chart = r}></svg>
    );
  }
}
