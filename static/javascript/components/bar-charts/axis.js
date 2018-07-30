import React from "react";
import * as d3 from "d3";

export default class HorisontalBarChart2 extends React.Component {
  static displayName = "Axis";

  constructor(props) {
    super(props);
    this.axisXRef = React.createRef();
    this.axisYRef = React.createRef();
  }

  componentDidMount() {
    this.createXAxis();
    this.createYAxis();
  }

  createXAxis() {
    const xAxis = d3
      .axisTop(this.props.scaleX)
      .tickSize(this.props.scaleY.range()[1])
      .tickFormat(d => d);

    d3.select(this.axisXRef.current).call(g => {
      g.call(xAxis);
      g.selectAll(".tick text")
        .attr("y", 20)
        .classed("chart-axis__label", true);

      g.selectAll(".tick line")
        .attr("y1", 5)
        .classed("chart-axis__axis", true);

      g.selectAll(".domain").classed("chart-axis__axis", true);
    });
  }

  createYAxis() {
    const yAxis = d3
      .axisRight(this.props.scaleY)
      .tickSize(this.props.scaleX.range()[1])
      .tickFormat(d => d);

    d3.select(this.axisYRef.current).call(g => {
      g.call(yAxis);
      g.selectAll(".tick line")
        .attr("x1", -5)
        .classed("chart-axis__axis", true);

      g.selectAll(".tick text")
        .attr("x", -10)
        .classed("chart-axis__label", true);

      g.selectAll(".domain").classed("chart-axis__axis", true);
    });
  }

  render() {
    const { scaleY } = this.props;

    return (
      <g className="axis">
        <g ref={this.axisXRef} transform={`translate(0, ${scaleY.range()[1]})`} />
        <g ref={this.axisYRef} />
      </g>
    );
  }
}
