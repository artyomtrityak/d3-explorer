import React, { Fragment } from "react";
import * as d3 from "d3";
import ForceGraph3D from "3d-force-graph";
import * as THREE from "three";
import DATASET_3 from "./data-set-3";


export default class TreeDBasicChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: DATASET_3()
    };
  }

  componentDidMount() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    this.graph = ForceGraph3D()(this.chartRef)
      .width(this.chartRef.clientWidth - 100)
      .height(window.innerHeight - 200)
      .backgroundColor("#FFFFFF")
      .nodeAutoColorBy("type")
      .linkWidth(1)
      .nodeThreeObject(node => {
        if (node.type === 'application' || node.type === 'microservice') {
          var geometry = new THREE.DodecahedronGeometry( 10 );

          var diffuseColor = new THREE.Color().setHSL( 0.9, 0.5, 0.25 );
          var material = new THREE.MeshPhysicalMaterial( {
            color: diffuseColor,
            metalness: 0,
            roughness: 0.5,
            clearCoat:  1.0,
            clearCoatRoughness: 1.0,
            reflectivity: 1.0,
          } );
          return new THREE.Mesh( geometry, material );
        }
      })
      .forceEngine("ngraph")
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

  render() {
    return <div className="basic-3d" ref={r => (this.chartRef = r)} />;
  }
}
