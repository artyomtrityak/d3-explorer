import React from 'react';
import * as d3 from "d3";
import { NavLink, Route } from 'react-router-dom';
import DivHorisontalBar from './div-horisontal-bar-chart';
import SvgHorisontalBar from './svg-horisontal-bar-chart';
import SvgVerticalBar from './svg-vertical-bar-chart';
import DynamicBar from './dynamic-bar-chart';
import StackVerticalBar from './stack-vertical-bar-chart';
import StackHorisontalBar from './stack-horisontal-bar-chart';
import VerticalWithAxisOnTop from './vertical-bar-chart-with-axis-lines';
import HorisontallyStacked from './horisontally-stacked-bar-chart';


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
            <NavLink activeClassName="active" className="nav-link" to={`${match.url}/dynamic`}>Dynamic</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to={`${match.url}/stack-vertical`}>Stack Vertical</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to={`${match.url}/stack-horisontal`}>Stack Horisontal</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to={`${match.url}/vertical-ontop-axis`}>Vertical with axis ontop</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to={`${match.url}/horisontally-stacked`}>Horisontally stacked</NavLink>
          </li>
        </ul>

        <div className="bar-charts">
          <Route path={`${match.url}/div`} component={DivHorisontalBar}/>
          <Route path={`${match.url}/svg`} component={SvgHorisontalBar}/>
          <Route path={`${match.url}/vertical`} component={SvgVerticalBar}/>
          <Route path={`${match.url}/dynamic`} component={DynamicBar}/>
          <Route path={`${match.url}/stack-vertical`} component={StackVerticalBar}/>
          <Route path={`${match.url}/stack-horisontal`} component={StackHorisontalBar}/>
          <Route path={`${match.url}/vertical-ontop-axis`} component={VerticalWithAxisOnTop}/>
          <Route path={`${match.url}/horisontally-stacked`} component={HorisontallyStacked}/>

        </div>
      </div>
    );
  }
};