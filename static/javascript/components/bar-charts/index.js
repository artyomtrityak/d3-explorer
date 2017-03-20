import React from 'react';
import * as d3 from "d3";
import { connect } from "react-redux";
import DivHorisontalBar from './div-horisontal-bar-chart';
import SvgHorisontalBar from './svg-horisontal-bar-chart';
import SvgVerticalBar from './svg-vertical-bar-chart';
import { NavLink, Route } from 'react-router-dom';

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
        </ul>

        <div className="bar-charts">
          <Route path={`${match.url}/div`} component={DivHorisontalBar}/>
          <Route path={`${match.url}/svg`} component={SvgHorisontalBar}/>
          <Route path={`${match.url}/vertical`} component={SvgVerticalBar}/>
        </div>
      </div>
    );
  }
};