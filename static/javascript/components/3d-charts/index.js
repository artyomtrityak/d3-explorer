import React from 'react';
import * as d3 from "d3";
import { NavLink, Route } from 'react-router-dom';
import Force3dBasic from './force-3d-basic';
import Force3dCamera from './force-3d-camera';
import Force3dGeometries from './force-3d-node-geometries';

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
            <NavLink activeClassName="active" className="nav-link" to={`${match.url}/force-geomentries`}>3D nodes geometries</NavLink>
          </li>
        </ul>

        <div className="3d-charts-container">
          <Route path={`${match.url}/force-basic`} component={Force3dBasic} />
          <Route path={`${match.url}/force-camera`} component={Force3dCamera} />
          <Route path={`${match.url}/force-geomentries`} component={Force3dGeometries} />
        </div>
      </div>
    );
  }
};