import React from 'react';
import * as d3 from "d3";

export default class SvgLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 'release1',
          date: '2017-04-19',
          value: 141
        },
        {
          id: 'release2',
          date: '2017-09-15',
          value: 99
        },
        {
          id: 'release3',
          date: '2017-11-11',
          value: 151
        }
      ]
    };
  }

  componentDidMount() {
    const lineGenerator = d3.line();

    const chart = d3.select(this.chartRef)
      .attr('width', window.innerWidth-100)
      .attr('height', 500)
      .append('g')
        .attr('transform', 'translate(100, 0)');

    chart
      .append('path')
        .attr('d', lineGenerator(this.state.data));
  }

  render() {
    return (
      <svg className="line-chart" ref={(r) => this.chartRef = r}></svg>
    );
  }
}
