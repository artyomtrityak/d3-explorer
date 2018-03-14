import React from "react";
import * as d3 from "d3";

export default class TreeChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      root: null,
      width: 700,
      height: 500,
      data: [
        { name: "ProjectA", parent: "" },
        { name: "ApplicationA", parent: "ProjectA" },
        { name: "EnvironmentB", parent: "ProjectA" },

        { name: "TierC", parent: "ApplicationA" },
        { name: "TierD", parent: "ApplicationA" },
        { name: "TierE", parent: "ApplicationA" },

        { name: "ServiceF", parent: "EnvironmentB" },

        { name: "ContainerG", parent: "TierE" },
        { name: "ContainerH", parent: "TierE" }
      ]
    };
  }

  componentDidMount() {
    const tree = d3.tree().size([this.state.height, this.state.width - 160]);

    const stratify = d3
      .stratify()
      .id(d => {
        return d.name;
      })
      .parentId(d => {
        return d.parent;
      });

    const root = stratify(this.state.data).sort((a, b) => {
      return a.height - b.height || a.id.localeCompare(b.id);
    });

    this.setState({ root, links: tree(root).links() });
  }

  render() {
    if (!this.state.links) {
      return null;
    }

    return (
      <svg
        width={this.state.width + 100}
        height={this.state.height}
        className="tree-chart-basic"
        ref={r => (this.chartRef = r)}
      >
        <g transform="translate(100, 0)">
          {this.renderLinks()}
          {this.renderNodes()}
        </g>
      </svg>
    );
  }

  renderLinks() {
    return this.state.links.map(function(data, i) {
      const link = d3
        .linkHorizontal()
        .x(d => {
          return d.y;
        })
        .y(d => {
          return d.x;
        });
      return <path key={`link${i}`} className="link" d={link(data)} />;
    });
  }

  renderNodes() {
    return this.state.root.descendants().map((d, i) => {
      return (
        <g key={`node${i}`} className="node" transform={`translate(${d.y},${d.x})`}>
          <circle r="5" />
          <text dy={20} x={-8} textAnchor={d.children ? "start" : "end"}>
            {d.id}
          </text>
        </g>
      );
    });
  }
}
