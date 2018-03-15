import React, { Fragment } from "react";
import * as d3 from "d3";
import ForceGraph3D from "3d-force-graph";
import * as THREE from "three";
import DATASET_1 from "./data-set-1";
import DATASET_2 from "./data-set-2";

export default class TreeDNgChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: DATASET_2()
    };
  }

  componentDidMount() {
    this.graph = ForceGraph3D()(this.chartRef)
      .width(this.chartRef.clientWidth - 100)
      .height(window.innerHeight - 200)
      .backgroundColor("#FFFFFF")
      .forceEngine("ngraph")
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
      .graphData(this.state.data);

    this.startOrbit();
  }

  startOrbit() {
    const distance = 700;
    let angle = 0;

    this.interval = setInterval(() => {
      angle = angle + Math.PI / 300;
      this.graph.cameraPosition({
        x: distance * Math.sin(angle),
        z: distance * Math.cos(angle)
      });
    }, 30);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div className="basic-3d-ng" ref={r => (this.chartRef = r)} />;
  }
}
