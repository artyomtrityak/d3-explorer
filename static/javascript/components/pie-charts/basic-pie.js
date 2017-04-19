import React from 'react';
import * as d3 from "d3";

export default class BasicPieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          apps_by_deployment: "error",
          apps_by_deployment_doc_count: "5"
        },
        {
          apps_by_deployment: "success",
          apps_by_deployment_doc_count: "15"
        },
        {
          apps_by_deployment: "warning",
          apps_by_deployment_doc_count: "3"
        },
        {
          apps_by_deployment: "aborted",
          apps_by_deployment_doc_count: "2"
        }
      ]
    };
  }

  componentDidMount() {
    const width = 960,
      height = 500,
      outerRadius = height / 2 - 20,
      innerRadius = outerRadius / 3,
      cornerRadius = 10;

    const colors = d3.scaleOrdinal(d3.schemeCategory10);

    const chart = d3.select(this.chartRef)
      .attr("width", window.innerWidth - 100)
      .attr("height", 500)
      .append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`);

    const pie = d3.pie()
      .sort(null)
      .value((d) => +d.apps_by_deployment_doc_count)
      .padAngle(.02);

    var arc = d3.arc()
      .outerRadius(outerRadius - 20)
      .innerRadius(innerRadius);

    chart.selectAll("path")
      .data(pie(this.state.data))
      .enter()
        .append("path")
          .attr("fill", (d, i) => colors(i))
          .attr("d", arc);
  }

  render() {
    return (
      <svg className="pie-chart--basic" ref={(r) => this.chartRef = r}></svg>
    );
  }
}
