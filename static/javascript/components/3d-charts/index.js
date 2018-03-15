import React from 'react';
import * as d3 from "d3";
import { NavLink, Route } from 'react-router-dom';
import Force3dBasic from './force-3d-basic';
import Force3dCamera from './force-3d-camera';
import Force3dGeometries from './force-3d-node-geometries';
import Force3dD3 from './force-3d-d3';
import Force3dNgraph from './force-3d-ng';

export default class ForceCharts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    const { match } = this.props;

    return (
      <div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to={`${match.url}/force-basic`}>Force 3D basic</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to={`${match.url}/force-camera`}>Force 3D camera</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to={`${match.url}/force-geometries`}>3D nodes geometries</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to={`${match.url}/force-d3`}>3D D3 parameters</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to={`${match.url}/force-ng`}>3D NGraph</NavLink>
          </li>
        </ul>

        <div className="3d-charts-container">
          <Route path={`${match.url}/force-basic`} component={Force3dBasic} />
          <Route path={`${match.url}/force-camera`} component={Force3dCamera} />
          <Route path={`${match.url}/force-geometries`} component={Force3dGeometries} />
          <Route path={`${match.url}/force-d3`} component={Force3dD3} />
          <Route path={`${match.url}/force-ng`} component={Force3dNgraph} />
        </div>
      </div>
    );
  }
};