import React, { Fragment } from "react";
import * as d3 from "d3";
import ForceGraph3D from "3d-force-graph";
import * as THREE from "three";

export default class TreeDBasicChart extends React.Component {
  constructor(props) {
    super(props);

    const N = 100;
    const GROUPS = 5;

    this.state = {
      data: {
        nodes: [...Array(N).keys()].map(i => ({
          id: i,
          group: Math.ceil(Math.random() * GROUPS),
          val: Math.ceil(Math.random() * GROUPS)
        })),
        links: [...Array(N).keys()].filter(id => id).map(id => ({
          source: id,
          target: Math.round(Math.random() * (id - 1))
        }))
      }
    };
  }

  componentDidMount() {
    this.graph = ForceGraph3D()(this.chartRef)
      .width(this.chartRef.clientWidth - 100)
      .height(window.innerHeight - 200)
      .backgroundColor("#FFFFFF")
      .nodeAutoColorBy("group")
      .linkWidth(3)
      .linkColor((d, d2) => {
        return d.source < 20 ? "#FF0000" : "#000000";
      })
      .graphData(this.state.data);

    //this.graph.d3Force('charge').strength(-200);
    // this.graph.d3Force('link').distance(function(d) {
    //   if (d.index < 20) {
    //     return 90;
    //   }
    //   return 50;
    // });

    this.graph.d3Force('link').strength((d) => {
      console.log(d);
      if (d.index < 20) {
        return 0.5;
      }
      return 2;
    });

    this.graph.d3Force('charge').strength(-150);
    //this.graph.d3Force('charge').distanceMin(100);
    //this.graph.d3Force('radial', d3.forceRadial(150));
    // this.graph.d3Force("r", d3.forceRadial(function(d) {
    //   return d.index < 10 ? 100 : 300;
    // }));
    // this.graph.d3Force('link').distance(50).strength(1);
  }

  render() {
    return <div className="basic-3d" ref={r => (this.chartRef = r)} />;
  }
}
