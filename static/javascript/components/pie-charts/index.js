import React from "react";
import * as d3 from "d3";
import { NavLink, Route } from "react-router-dom";
import BasicPieChart from "./basic-pie";
import InteractivePieChart from "./interactive-pie";
import LabelsPieChart from "./pie-with-labels";

export default class PieCharts extends React.Component {
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
            <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={`${match.url}/pie1`}>
              Pie 1
            </NavLink>
            <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={`${match.url}/interactive`}>
              Pie Interactive
            </NavLink>
            <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={`${match.url}/with-labels`}>
              Pie with outside labels
            </NavLink>
          </div>
        </div>
        <div className="col-9">
          <Route path={`${match.url}/pie1`} component={BasicPieChart} />
          <Route path={`${match.url}/interactive`} component={InteractivePieChart} />
          <Route path={`${match.url}/with-labels`} component={LabelsPieChart} />
        </div>
      </div>
    );
  }
}
