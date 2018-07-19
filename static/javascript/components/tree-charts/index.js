import React from "react";
import * as d3 from "d3";
import { NavLink, Route } from "react-router-dom";
import BasicChart from "./tree-chart";
import ReactSVGRenderChart from "./tree-react-svg-render-chart";

export default class ForceCharts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { match } = this.props;

    return (
      <div className="row">
        <div className="col-3">
          <div className="list-group">
            <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={`${match.url}/tree1`}>
              Tree 1
            </NavLink>
            <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={`${match.url}/tree2`}>
              Tree 2 (React svg render)
            </NavLink>
          </div>
        </div>

        <div className="col-9 tree-charts-container">
          <Route path={`${match.url}/tree1`} component={BasicChart} />
          <Route path={`${match.url}/tree2`} component={ReactSVGRenderChart} />
        </div>
      </div>
    );
  }
}
