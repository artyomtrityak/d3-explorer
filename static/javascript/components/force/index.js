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
      <div className="row">
        <div className="col-3">
          <div className="list-group">
            <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={`${match.url}/basic`}>
              Basic
            </NavLink>
          </div>
        </div>

        <div className="col-9">
          <Route path={`${match.url}/basic`} component={ForceBasic} />
        </div>
      </div>
    );
  }
}
