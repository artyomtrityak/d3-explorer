import React from 'react';
import * as d3 from "d3";
import { NavLink, Route } from 'react-router-dom';
import SvgLine from './line';
import SvgArea from './area';
import DynamicLine from './dynamic-line';
import LineOverTime from './line-over-time';
import MultipleLines from './multiple-lines';

export default class CirclesCharts extends React.Component {
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
            <NavLink activeClassName="active" className="nav-link" to={`${match.url}/line`}>Line</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to={`${match.url}/area`}>Area</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to={`${match.url}/dynamic-line`}>Dynamic Line</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to={`${match.url}/line-over-time`}>Line over time</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to={`${match.url}/multiple`}>Multiple lines</NavLink>
          </li>
        </ul>

        <div className="line-charts-container">
          <Route path={`${match.url}/line`} component={SvgLine}/>
          <Route path={`${match.url}/area`} component={SvgArea}/>
          <Route path={`${match.url}/dynamic-line`} component={DynamicLine}/>
          <Route path={`${match.url}/line-over-time`} component={LineOverTime}/>
          <Route path={`${match.url}/multiple`} component={MultipleLines}/>
        </div>
      </div>
    );
  }
};