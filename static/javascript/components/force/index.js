import React from "react";
import * as d3 from "d3";
import { NavLink, Route } from "react-router-dom";
import ForceBasic from "./force-basic-chart";

export default class ForceCharts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { match } = this.props;

    return (
      <div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to={`${match.url}/basic`}>
              Force basic
            </NavLink>
          </li>
        </ul>

        <div className="3d-charts-container">
          <Route path={`${match.url}/basic`} component={ForceBasic} />
        </div>
      </div>
    );
  }
}
