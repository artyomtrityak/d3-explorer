import React from 'react';
import * as d3 from "d3";
import { NavLink, Route } from 'react-router-dom';
import DivHorisontalBar from './div-horisontal-bar-chart';
import SvgHorisontalBar from './svg-horisontal-bar-chart';
import SvgVerticalBar from './svg-vertical-bar-chart';
import DynamicBar from './dynamic-bar-chart';
import StackBar from './stack-bar-chart';


export default class BarCharts extends React.Component {
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
            <NavLink activeClassName="active" className="nav-link" to={`${match.url}/div`}>Div Horisontal</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to={`${match.url}/svg`}>Svg Horisontal</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to={`${match.url}/vertical`}>Vertical</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to={`${match.url}/dynamic`}>Dynanic</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to={`${match.url}/stack`}>Stack</NavLink>
          </li>
        </ul>

        <div className="bar-charts">
          <Route path={`${match.url}/div`} component={DivHorisontalBar}/>
          <Route path={`${match.url}/svg`} component={SvgHorisontalBar}/>
          <Route path={`${match.url}/vertical`} component={SvgVerticalBar}/>
          <Route path={`${match.url}/dynamic`} component={DynamicBar}/>
          <Route path={`${match.url}/stack`} component={StackBar}/>
        </div>
      </div>
    );
  }
};