import React from 'react';
import * as d3 from "d3";
import { NavLink, Route } from 'react-router-dom';

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
        </ul>

        <div className="pie-chart">
          <Route path={`${match.url}/basic`} component={null}/>
        </div>
      </div>
    );
  }
};