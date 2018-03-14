import React, { Fragment } from "react";
import * as d3 from "d3";
import ForceGraph3D from "3d-force-graph";
import * as THREE from "three";
import DATASET_1 from "./data-set-1";

export default class TreeDBasicChart extends React.Component {
  constructor(props) {
    super(props);

    const N = 100;
    const GROUPS = 5;

    this.state = {
      data: DATASET_1
    };
  }

  componentDidMount() {
    this.graph = ForceGraph3D()(this.chartRef)
      .width(this.chartRef.clientWidth - 100)
      .height(window.innerHeight - 200)
      .backgroundColor("#FFFFFF")
      .nodeColor(d => {
        switch (d.type) {
          case "application":
            return "blue";
          case "environment":
            return "yellow";
          case "microservice":
            return "purple";
          case "K8Container":
            return "green";
          case "K8Pod":
            return "red";
          case "K8Cluster":
            return "black";
          default:
            return "gray";
        }
      })
      .linkWidth(3)
      .linkColor((d) => {
        return d.type === "application" ? "#FF0000" : "#000000";
      })
      .graphData(this.state.data);

    this.graph.d3Force("charge").strength(-250);
    this.graph.d3Force("charge").distanceMin(150);
    this.graph.d3Force(
      "r",
      d3.forceRadial(function(d) {
        if (d.type === "application" || d.type === "microservice") {
          return 20;
        } else {
          return 100;
        }
      })
    );
    this.graph.d3Force("link").distance(d => {
      if (d.type === "application" || d.type === "microservice") {
        return 120;
      }
      return 20;
    });

    this.startOrbit();
  }

  startOrbit() {
    const distance = 800;
    let angle = 0;

    this.interval = setInterval(() => {
      angle = angle + Math.PI / 300;
      this.graph.cameraPosition({
        x: distance * Math.sin(angle),
        z: distance * Math.cos(angle)
      });
    }, 30);
  }

  render() {
    return <div className="basic-3d" ref={r => (this.chartRef = r)} />;
  }
}
