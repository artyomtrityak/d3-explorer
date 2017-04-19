import React from 'react';
import * as d3 from "d3";
import { NavLink, Route } from 'react-router-dom';
import BasicPieChart from './basic-pie';
import InteractivePieChart from './interactive-pie';
import LabelsPieChart from './pie-with-labels';

export default class PieCharts extends React.Component {
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
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to={`${match.url}/interactive`}>Interactive Pie</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to={`${match.url}/with-labels`}>Pie with outside labels</NavLink>
          </li>
        </ul>

        <div>
          <Route path={`${match.url}/basic`} component={BasicPieChart}/>
          <Route path={`${match.url}/interactive`} component={InteractivePieChart}/>
          <Route path={`${match.url}/with-labels`} component={LabelsPieChart}/>
        </div>
      </div>
    );
  }
};