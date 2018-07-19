import React from "react";
import { NavLink, Route } from "react-router-dom";
import Horisontal1 from "./horizontal1";
import Horisontal2 from "./horizontal2";
import Vertical1 from "./vertical1";
import Vertical2 from "./vertical2";
import Vertical3 from "./vertical3";
import DynamicBar from "./dynamic-bar-chart";
import StackVerticalBar from "./stack-vertical-bar-chart";
import StackHorisontalBar from "./stack-horisontal-bar-chart";
import GroupHorisontalBar from "./group-horisontal-bar-chart";

export default class BarCharts extends React.Component {
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
            <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={`${match.url}/horizontal1`}>
              Horisontal 1
            </NavLink>
            <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={`${match.url}/horizontal2`}>
              Horisontal 2
            </NavLink>
            <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={`${match.url}/stacked-horisontal1`}>
              Stacked Horisontal 1
            </NavLink>
            <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={`${match.url}/grouped-horisontal1`}>
              Grouped Horisontal 1
            </NavLink>
            <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={`${match.url}/vertical1`}>
              Vertical 1
            </NavLink>
            <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={`${match.url}/vertical2`}>
              Vertical 2
            </NavLink>
            <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={`${match.url}/vertical3`}>
              Vertical 3
            </NavLink>
            <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={`${match.url}/stacked-vertical1`}>
              Stacked Vertical 1
            </NavLink>
            <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={`${match.url}/dynamic-vertical1`}>
              Dynamic Vertical 1
            </NavLink>
          </div>
        </div>

        <div className="col-9 bar-chart">
          <Route path={`${match.url}/horizontal1`} component={Horisontal1} />
          <Route path={`${match.url}/horizontal2`} component={Horisontal2} />
          <Route path={`${match.url}/stacked-horisontal1`} component={StackHorisontalBar} />
          <Route path={`${match.url}/grouped-horisontal1`} component={GroupHorisontalBar} />
          <Route path={`${match.url}/vertical1`} component={Vertical1} />
          <Route path={`${match.url}/vertical2`} component={Vertical2} />
          <Route path={`${match.url}/vertical3`} component={Vertical3} />
          <Route path={`${match.url}/stacked-vertical1`} component={StackVerticalBar} />
          <Route path={`${match.url}/dynamic-vertical1`} component={DynamicBar} />
        </div>
      </div>
    );
  }
}
