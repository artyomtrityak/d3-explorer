import React from "react";
import * as d3 from "d3";
import { NavLink, Route } from "react-router-dom";
import DivHorisontalBar from "./react-div-horisontal-bar-chart";
import SvgHorisontalBar from "./svg-horisontal-bar-chart";
import SvgVerticalBar from "./svg-vertical-bar-chart";
import DynamicBar from "./dynamic-bar-chart";
import StackVerticalBar from "./stack-vertical-bar-chart";
import StackHorisontalBar from "./stack-horisontal-bar-chart";
import VerticalWithAxisOnTop from "./vertical-bar-chart-with-axis-lines";
import HorisontallyStacked from "./horisontally-stacked-bar-chart";
import ReactVertical from "./react-vertical-bar-chart";

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
            <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={`${match.url}/dynamic-vertical1`}>
              Dynamic Vertical 1
            </NavLink>
            <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={`${match.url}/stacked-vertical1`}>
              Stacked Vertical 1
            </NavLink>
          </div>
        </div>

        <div className="col-9 bar-chart">
          <Route path={`${match.url}/horizontal1`} component={DivHorisontalBar} />
          <Route path={`${match.url}/horizontal2`} component={SvgHorisontalBar} />
          <Route path={`${match.url}/stacked-horisontal1`} component={StackHorisontalBar} />
          <Route path={`${match.url}/grouped-horisontal1`} component={HorisontallyStacked} />
          <Route path={`${match.url}/vertical1`} component={ReactVertical} />
          <Route path={`${match.url}/vertical2`} component={SvgVerticalBar} />
          <Route path={`${match.url}/vertical3`} component={VerticalWithAxisOnTop} />
          <Route path={`${match.url}/dynamic-vertical1`} component={DynamicBar} />
          <Route path={`${match.url}/stacked-vertical1`} component={StackVerticalBar} />
        </div>
      </div>
    );
  }
}
