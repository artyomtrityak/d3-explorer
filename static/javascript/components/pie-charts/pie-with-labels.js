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

    const radius = Math.min(width, height) / 2,
          labelRadius = radius - 10;

    const colors = d3.scaleOrdinal(d3.schemeCategory10);

    const chart = d3.select(this.chartRef)
      .attr("width", window.innerWidth - 100)
      .attr("height", height + 100)
      .append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`);

    //Center label
    chart
      .append('text')
        .attr("text-anchor", "middle")
        .attr('dy', '0.35em')
        .style('font-size', '24px')
        .text('1912');

    const pie = d3.pie()
      .sort(null)
      .value((d) => +d.apps_by_deployment_doc_count)
      .padAngle(.02);

    const arc = d3.arc()
      .outerRadius(outerRadius - 20)
      .innerRadius(innerRadius);

    const arcsWithData = pie(this.state.data);

    const gContainer = chart.selectAll("path")
      .data(arcsWithData)
      .enter()
        .append('g');

    gContainer
      .append("path")
        .attr("fill", (d, i) => colors(i))
        .attr("d", arc);

    //Add outside labels
    gContainer
      .append('text')
      .attr("transform", (d) => {
        const c = arc.centroid(d);
        const x = c[0];
        const y = c[1];
        const h = Math.sqrt(x*x + y*y);
        return `translate(${x/h * labelRadius},${y/h * labelRadius})`;
      })
      .attr("text-anchor", (d) => {
        // did we past the center?
        return (d.endAngle + d.startAngle) / 2 > Math.PI ? "end" : "start";
      })
      .attr("dy", ".35em")
      .text((d) => {
        return `${d.data.apps_by_deployment}: ${d.data.apps_by_deployment_doc_count}`;
      });
  }

  render() {
    return (
      <svg className="pie-chart--basic" ref={(r) => this.chartRef = r}></svg>
    );
  }
}
