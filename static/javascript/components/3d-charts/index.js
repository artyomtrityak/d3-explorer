import React from "react";
import { NavLink, Route } from "react-router-dom";
import Force3d1 from "./force-3d-1";
import Force3dCamera from "./force-3d-camera";
import Force3dGeometries from "./force-3d-node-geometries";
import Force3dD3 from "./force-3d-d3";
import Force3dNgraph from "./force-3d-ng";
import Force3dThreeObject from "./force-3d-three-object";

export default class ThreeDCharts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { match } = this.props;

    return (
      <div className="row">
        <div className="col-3">
          <div className="list-group">
            <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={`${match.url}/force1`}>
              Force 3D 1
            </NavLink>
            <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={`${match.url}/force-camera`}>
              Force 3D camera
            </NavLink>
            <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={`${match.url}/force-geometries`}>
              3D nodes geometries
            </NavLink>
            <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={`${match.url}/force-d3`}>
              3D D3 parameters
            </NavLink>
            <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={`${match.url}/force-ng`}>
              3D NGraph
            </NavLink>
            <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={`${match.url}/force-three-object`}>
              3D With Custom Object
            </NavLink>
          </div>
        </div>

        <div className="col-9 3d-charts-container">
          <Route path={`${match.url}/force1`} component={Force3d1} />
          <Route path={`${match.url}/force-camera`} component={Force3dCamera} />
          <Route path={`${match.url}/force-geometries`} component={Force3dGeometries} />
          <Route path={`${match.url}/force-d3`} component={Force3dD3} />
          <Route path={`${match.url}/force-ng`} component={Force3dNgraph} />
          <Route path={`${match.url}/force-three-object`} component={Force3dThreeObject} />
        </div>
      </div>
    );
  }
}
