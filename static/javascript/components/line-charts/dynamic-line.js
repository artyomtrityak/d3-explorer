import React from 'react';
import * as d3 from "d3";

export default class SvgLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        [0, 80],
        [100, 100],
        [200, 30],
        [300, 50],
        [400, 40],
        [500, 80]
      ]
    };
  }

  componentDidMount() {
    this.chart = d3.select(this.chartRef)
      .attr('width', window.innerWidth-100)
      .attr('height', 500)
      .append('g')
        .attr('transform', 'translate(100, 0)');

    this._interval = setInterval(() => {
      this.transformData();
    }, 1000);

    this.processing();
  }

  componentDidUpdate() {
    this.processing();
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }

  processing() {
    const lineGenerator = d3.line();

    const line = this.chart.selectAll('path')
      .data(() => [{value: this.state.data}]);

    line
      .enter()
        .append('path')
      .merge(line)
        .attr('d', (d) => lineGenerator(d.value));

    line
      .exit()
        .remove();
  }

  transformData() {
    let newData = [];
    for (let i = 0; i < this.state.data.length; i++) {
      if (i === this.state.data.length - 1) {
        newData.push([this.state.data[i][0], this.state.data[0][1]]);
      } else {
        newData.push([this.state.data[i][0], this.state.data[i+1][1]]);
      }
    }
    this.setState({data: newData});
  }

  render() {
    return (
      <svg className="line-charts__base" ref={(r) => this.chartRef = r}></svg>
    );
  }
}
