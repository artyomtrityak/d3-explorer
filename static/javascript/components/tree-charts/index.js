import React from 'react';
import * as d3 from "d3";
import { NavLink, Route } from 'react-router-dom';
import BasicChart from './tree-chart';

export default class ForceCharts extends React.Component {
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
            <NavLink activeClassName="active" className="nav-link" to={`${match.url}/basic`}>Basic</NavLink>
          </li>
        </ul>

        <div className="tree-charts-container">
          <Route path={`${match.url}/basic`} component={BasicChart}/>
        </div>
      </div>
    );
  }
};