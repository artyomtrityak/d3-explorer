import React from "react";
import * as d3 from "d3";
import ForceGraph3D from "3d-force-graph";

export default class TreeChart extends React.Component {
  constructor(props) {
    super(props);

    const N = 100;
    const GROUPS = 5;

    this.state = {
      data: {
        nodes: [...Array(N).keys()].map(i => ({
          id: i,
          group: Math.ceil(Math.random() * GROUPS)
        })),
        links: [...Array(N).keys()].filter(id => id).map(id => ({
          source: id,
          target: Math.round(Math.random() * (id - 1))
        }))
      }
    };
  }

  componentDidMount() {
    const Graph = ForceGraph3D()(this.chartRef)
      .width(this.chartRef.clientWidth - 100)
      .height(window.innerHeight - 200)
      .backgroundColor("#FFFFFF")
      .nodeAutoColorBy("group")
      .graphData(this.state.data);
  }

  render() {
    return <div className="basic-3d" ref={r => (this.chartRef = r)} />;
  }
}
