import React, { Fragment } from "react";
import * as d3 from "d3";
import ForceGraph3D from "3d-force-graph";

export default class ThreeDCameraChart extends React.Component {
  constructor(props) {
    super(props);

    const N = 200;
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
    this.graph = ForceGraph3D()(this.chartRef)
      .width(this.chartRef.clientWidth - 100)
      .height(window.innerHeight - 200)
      .forceEngine("ngraph")
      .backgroundColor("#FFFFFF")
      .nodeAutoColorBy("group")
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

  stopOrbit() {
    clearInterval(this.interval);
  }

  componentWillUnmount() {
    this.stopOrbit();
  }

  render() {
    return <div className="basic-3d" ref={r => (this.chartRef = r)} />;
  }
}
