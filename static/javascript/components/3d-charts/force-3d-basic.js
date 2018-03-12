import React from 'react';
import * as d3 from "d3";

export default class TreeChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {"name": "ProjectA",   "parent": ""},
        {"name": "ApplicationA",  "parent": "ProjectA"},
        {"name": "EnvironmentB",  "parent": "ProjectA"},

        {"name": "TierC",  "parent": "ApplicationA"},
        {"name": "TierD",  "parent": "ApplicationA"},
        {"name": "TierE",  "parent": "ApplicationA"},

        {"name": "ServiceF",  "parent": "EnvironmentB"},

        {"name": "ContainerG", "parent": "TierE"},
        {"name": "ContainerH", "parent": "TierE"}
      ]
    };
  }

  componentDidMount() {
    const width = 700,
          height = 500;

    const chart = d3.select(this.chartRef)
      .attr('width', width+100)
      .attr('height', height)
      .append('g')
        .attr('transform', 'translate(100, 0)');

    const tree = d3.tree()
      .size([height, width - 160]);

    const stratify = d3.stratify()
      .id((d) => {
        return d.name;
      })
      .parentId((d) => {
        return d.parent;
      });

    const root = stratify(this.state.data)
      .sort((a, b) => {
        return (a.height - b.height) || a.id.localeCompare(b.id);
      });

    const link = chart.selectAll('.link')
      .data(tree(root).links())
      .enter()
        .append('path')
          .attr('class', 'link')
          .attr("d", d3.linkHorizontal()
            .x((d) => {
              return d.y;
            })
            .y((d) => {
              return d.x;
            })
          );

    const node = chart.selectAll('.node')
      .data(root.descendants())
      .enter()
        .append('g')
          .attr("class", (d) => {
            return "node" + (d.children ? " node--internal" : " node--leaf");
          })
          .attr("transform", (d) => {
            return `translate(${d.y},${d.x})`;
          });

    node.append('circle')
      .attr('r', 2.5);

    node.append("text")
      .attr("dy", 3)
      .attr("x", (d) => {
        return d.children ? -8 : 8;
      })
      .style("text-anchor", (d) => {
        return d.children ? "end" : "start";
      })
      .text((d) => {
        return d.id;
      });

    console.log('root data:', root);
  }

  render() {
    return (
      <svg className="tree-chart-basic" ref={(r) => this.chartRef = r}></svg>
    );
  }
}
