import ReactDOM from "react-dom";
import React from "react";
import * as d3 from "d3";
import { generateArray } from "../../data-layer/array-processors";

export default class HorisontalBarChart2 extends React.Component {
  static displayName = "HorisontalBarChart2";
  state = {
    data: generateArray()
  };

  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    const margins = { left: 0, right: 50 };
    const width = ReactDOM.findDOMNode(this).parentNode.clientWidth - margins.left - margins.right;
    const height = ReactDOM.findDOMNode(this).parentNode.clientHeight;

    // Scales

    const scaleX = d3
      .scaleLinear()
      .domain([0, d3.max(this.state.data, x => x.val)])
      .range([0, width]);

    const scaleY = d3
      .scaleBand()
      .domain(this.state.data.map(d => d.label))
      .range([0, height])
      .padding(0.2);

    // Rendering

    const chart = d3
      .select(this.chartRef.current)
      .attr("height", height)
      .attr("width", width);

    const bar = chart
      .selectAll("g")
      .data(this.state.data)
      .enter()
      .append("g")
      .attr("transform", (el, i) => `translate(0, ${i * 40})`);

    bar
      .append("rect")
      .attr("width", d => scaleX(d.val))
      .attr("height", scaleY.bandwidth());

    bar
      .append("text")
      .attr("x", x => scaleX(x.val) - 100)
      .attr("y", scaleY.bandwidth() / 2)
      .attr("dy", "0.35em")
      .text(x => `${x.label} - ${x.val}`);
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <svg className="bar-chart" ref={this.chartRef} />
      </div>
    );
  }
}
