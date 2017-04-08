import React from 'react';
import * as d3 from "d3";


const colors = d3.scaleOrdinal(d3.schemeCategory10);


export default class InteractivePieChart extends React.Component {
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

    const arc = d3.arc()
      .padRadius(outerRadius)
      .innerRadius(innerRadius);

    const chart = d3.select(this.chartRef)
      .attr("width", window.innerWidth - 100)
      .attr("height", 500)
      .append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`);

    const pie = d3.pie()
      .sort(null)
      .value((d) => +d.apps_by_deployment_doc_count)
      .padAngle(.02);

    const arcContainer = chart.selectAll("path")
      .data(pie(this.state.data))
      .enter()
        .append('g')
          .attr('class', 'arc');

    arcContainer
      .append("path")
        .attr("fill", (d, i) => colors(i))
        .each((d) => {
          d.outerRadius = outerRadius - 20;
        })
        .attr("d", arc)
        .on("mouseover", this.arcTween(arc, outerRadius, true))
        .on("mouseout", this.arcTween(arc, outerRadius - 20));

    arcContainer
      .append("text")
        .attr("transform", (d) => {
          return `translate(${arc.centroid(d)})`;
        })
        .attr("dy", "0.35em")
        .text(d => d.data.apps_by_deployment_doc_count);
  }

  arcTween(arc, newOuterRadius, isMouseOver) {
    return function interpolateFn(data, i) {
      d3.select(this)
        .transition()
        .duration(1000)
        .attrTween("d", (d) => {
          const interpolator = d3.interpolate(d.outerRadius, newOuterRadius);
          return (t) => {
            d.outerRadius = interpolator(t);
            return arc(d);
          };
        })
        .attrTween('fill', (d) => {
          const to = isMouseOver ? 'blue' : colors(i);
          return d3.interpolateRgb(this.getAttribute("fill"), to);
        });
    };
  }

  render() {
    return (
      <svg className="pie-chart__interactive" ref={(r) => this.chartRef = r}></svg>
    );
  }
}
