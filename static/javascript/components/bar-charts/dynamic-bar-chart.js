import React from 'react';
import * as d3 from "d3";
import Rx from "rxjs/Rx";
import { getRandomlyChangedValuesArray, generateArray } from '../../data-layer/array-processors';

const BASE_DATA = generateArray();

export default class DynamicBarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: BASE_DATA,
      width: 600,
      height: 400
    };
  }

  componentDidMount() {
    this.svg = d3.select(this.chartRef)
      .attr("width", this.state.width)
      .attr("height", this.state.height)
      .append('g')
        .attr('class', 'chart-inner');

    this.processing();

    this._subscription = Rx.Observable.interval(5000)
      .map(() => (getRandomlyChangedValuesArray(BASE_DATA)))
      .subscribe((data) => {
        this.setState({data});
      });
  }

  componentWillUnmount() {
    this._subscription.unsubscribe();
  }

  componentDidUpdate() {
    this.processing();
  }

  processing() {
    const { xScale, yScale } = this.getScales();

    const bars = this.svg.selectAll('g')
      .data(this.state.data, (d) => {
        return d.label;
      });

    const enterGElements = bars
      .enter()
        .append('g')
          .attr('class', 'added')
          .attr('transform', (x, i) => `translate(${xScale(x.label)}, 0)`);

    bars
      .attr('class', 'updated');

    enterGElements
      .append('rect')
        .attr("width", xScale.bandwidth())
        .attr('y', (d) => yScale(d.val))
        .attr("height", (d) => this.state.height - yScale(d.val));

    bars
      .exit()
        .remove();
  }

  getScales() {
    const xScale = d3.scaleBand()
      .range([0, this.state.width])
      .padding(0.1)
      .domain(this.state.data.map((d) => d.label));

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(this.state.data, d => d.val)])
      .range([this.state.height, 0]);

    return { xScale, yScale };
  }

  render() {
    return (
      <svg className="chart-container" ref={(r) => this.chartRef = r}></svg>
    );
  }
};