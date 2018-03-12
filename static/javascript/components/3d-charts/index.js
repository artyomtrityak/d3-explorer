import React from 'react';
import * as d3 from "d3";
import { NavLink, Route } from 'react-router-dom';
import Force3dBasic from './force-3d-basic';

export default class ForceCharts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    const { match } = this.props;

    console.log('render');

    return (
      <div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to={`${match.url}/force-basic`}>Force 3D basic</NavLink>
          </li>
        </ul>

        <div className="3d-charts-container">
          <Route path={`${match.url}/force-basic`} component={Force3dBasic} />
        </div>
      </div>
    );
  }
};