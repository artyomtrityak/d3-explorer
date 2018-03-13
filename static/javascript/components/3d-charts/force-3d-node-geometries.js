import React, { Fragment } from "react";
import * as d3 from "d3";
import ForceGraph3D from "3d-force-graph";
import * as THREE from 'three';

export default class TreeDBasicChart extends React.Component {
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
    this.graph = ForceGraph3D()(this.chartRef)
      .width(this.chartRef.clientWidth - 100)
      .height(window.innerHeight - 200)
      .backgroundColor("#FFFFFF")
      .nodeAutoColorBy("group")
      .linkWidth(2)
      .linkColor((d, d2) => {
        return d.source < 10 ? "#FF0000" : "#000000";
      })
      .nodeThreeObject(({ id }) => new THREE.Mesh(
        [
          new THREE.BoxGeometry(Math.random() * 20, Math.random() * 20, Math.random() * 20),
          new THREE.ConeGeometry(Math.random() * 10, Math.random() * 20),
          new THREE.CylinderGeometry(Math.random() * 10, Math.random() * 10, Math.random() * 20),
          new THREE.DodecahedronGeometry(Math.random() * 10),
          new THREE.SphereGeometry(Math.random() * 10),
          new THREE.TorusGeometry(Math.random() * 10, Math.random() * 2),
          new THREE.TorusKnotGeometry(Math.random() * 10, Math.random() * 2)
        ][id%7],
        new THREE.MeshLambertMaterial({
          color: Math.round(Math.random() * Math.pow(2, 24)),
          transparent: true,
          opacity: 0.75
        })
      ))
      .graphData(this.state.data);
  }

  render() {
    return <div className="basic-3d" ref={r => (this.chartRef = r)} />;
  }
}
