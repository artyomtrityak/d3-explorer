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

    const r = Math.min(width, height) / 2,
    labelr = r - 10; // radius for label anchor

    const colors = d3.scaleOrdinal(d3.schemeCategory10);

    const chart = d3.select(this.chartRef)
      .attr("width", window.innerWidth - 100)
      .attr("height", height + 100)
      .append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`);

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

    gContainer
      .append('text')
    //   .attr("transform", function(d) {
    //       var c = arc.centroid(d),
    //           x = c[0],
    //           y = c[1],
    //           // pythagorean theorem for hypotenuse
    //           h = Math.sqrt(x*x + y*y);
    //       return "translate(" + (x/h * labelr) +  ',' +
    //         (y/h * labelr) +  ")";
    //   })
    //       .attr("text-anchor", function(d) {
    //     // are we past the center?
    //     return (d.endAngle + d.startAngle)/2 > Math.PI ?
    //         "end" : "start";
    // })
      // .attr("transform", function(d) {
      //   return "translate(" +
      //     ( (outerRadius + 10) * Math.sin( ((d.endAngle - d.startAngle) / 2) + d.startAngle ) ) +
      //     ", " +
      //     ( -1 * (outerRadius + 10) * Math.cos( ((d.endAngle - d.startAngle) / 2) + d.startAngle ) ) +
      //   ")";
      // })
      // .style("text-anchor", function(d) {
      //   var rads = ((d.endAngle - d.startAngle) / 2) + d.startAngle;
      //   if ( (rads > 7 * Math.PI / 4 && rads < Math.PI / 4) || (rads > 3 * Math.PI / 4 && rads < 5 * Math.PI / 4) ) {
      //     return "middle";
      //   } else if (rads >= Math.PI / 4 && rads <= 3 * Math.PI / 4) {
      //     return "start";
      //   } else if (rads >= 5 * Math.PI / 4 && rads <= 7 * Math.PI / 4) {
      //     return "end";
      //   } else {
      //     return "middle";
      //   }
      // })
      .text('hello hello hello');
  }

  render() {
    return (
      <svg className="pie-chart__basic" ref={(r) => this.chartRef = r}></svg>
    );
  }
}
