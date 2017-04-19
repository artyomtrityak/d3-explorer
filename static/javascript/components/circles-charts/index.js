import React from 'react';
import * as d3 from "d3";
import { NavLink, Route } from 'react-router-dom';
import SvgCircles from './svg-circles';
import SvgCirclesDragNDrop from './circles-drag-n-drop';
import Zoom from './circles-zoom';

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
            <NavLink activeClassName="active" className="nav-link" to={`${match.url}/basic`}>Basic</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to={`${match.url}/drag`}>Drag'n'Drop</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to={`${match.url}/zoom`}>Zoom</NavLink>
          </li>
        </ul>

        <div>
          <Route path={`${match.url}/basic`} component={SvgCircles}/>
          <Route path={`${match.url}/drag`} component={SvgCirclesDragNDrop}/>
          <Route path={`${match.url}/zoom`} component={Zoom}/>
        </div>
      </div>
    );
  }
};