import React from 'react';
import * as d3 from "d3";
import Rx from "rxjs/Rx";
import { getRandomlyChangedValuesArray, generateArray } from '../../data-layer/array-processors';

const BASE_DATA = generateArray();

export default class DynamicBarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: BASE_DATA
    };
  }

  componentDidMount() {
    this._subscription = Rx.Observable.interval(5000)
    .map(() => (getRandomlyChangedValuesArray(BASE_DATA)))
    .subscribe((data) => {
      this.setState({data});
    });

    const width = 600;
    const height = 300;
    this.svg = d3.select(this.chartRef)
      .attr("width", width)
      .attr("height", height)
      .append('g')
        .attr('class', 'chart-inner');

    this.processing();
  }

  componentWillUnmount() {
    this._subscription.unsubscribe();
  }

  componentDidUpdate() {
    console.log(this.state.data);
    this.processing();
  }

  processing() {
    const width = 600;
    const height = 300;
    const { xScale, yScale } = this.getScales(width, height);

    const bars = this.svg.selectAll('rect')
      .data(this.state.data, (d) => {
        return d.label;
      });

    bars
      .enter()
        .append('rect')
          .attr('class', 'added')
          .attr('transform', (x, i) => `translate(${xScale(x.label)}, 0)`)
          .attr("width", xScale.bandwidth())
      .merge(bars)
        .transition()
        .duration(1000)
        .attr("height", (d) => height - yScale(d.val))
        .attr('y', (d) => yScale(d.val));

    bars
      .attr('class', 'updated');

    bars
      .exit()
        .remove();
  }

  getScales(width, height) {
    const xScale = d3.scaleBand()
      .range([0, width])
      .padding(0.1)
      .domain(this.state.data.map((d) => d.label));

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(this.state.data, d => d.val)])
      .range([height, 0]);

    return { xScale, yScale };
  }

  render() {
    return (
      <svg className="chart-container" ref={(r) => this.chartRef = r}>
      </svg>
    );
  }
};