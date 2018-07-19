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
            <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={`${match.url}/div`}>
              React Div Horisontal
            </NavLink>
            <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={`${match.url}/react-vertical`}>
              React Svg Vertical
            </NavLink>
            <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={`${match.url}/svg`}>
              Svg Horisontal
            </NavLink>
            <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={`${match.url}/vertical`}>
              Vertical
            </NavLink>
            <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={`${match.url}/dynamic`}>
              Dynamic
            </NavLink>
            <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={`${match.url}/stack-vertical`}>
              Stack Vertical
            </NavLink>
            <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={`${match.url}/stack-horisontal`}>
              Stack Horisontal
            </NavLink>
            <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={`${match.url}/vertical-ontop-axis`}>
              Vertical with axis
            </NavLink>
            <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={`${match.url}/horisontally-stacked`}>
              Vertical with axis
            </NavLink>
          </div>
        </div>

        <div className="col-9 bar-chart">
          <Route path={`${match.url}/div`} component={DivHorisontalBar} />
          <Route path={`${match.url}/svg`} component={SvgHorisontalBar} />
          <Route path={`${match.url}/vertical`} component={SvgVerticalBar} />
          <Route path={`${match.url}/dynamic`} component={DynamicBar} />
          <Route path={`${match.url}/stack-vertical`} component={StackVerticalBar} />
          <Route path={`${match.url}/stack-horisontal`} component={StackHorisontalBar} />
          <Route path={`${match.url}/vertical-ontop-axis`} component={VerticalWithAxisOnTop} />
          <Route path={`${match.url}/horisontally-stacked`} component={HorisontallyStacked} />
          <Route path={`${match.url}/react-vertical`} component={ReactVertical} />
        </div>
      </div>
    );
  }
}
