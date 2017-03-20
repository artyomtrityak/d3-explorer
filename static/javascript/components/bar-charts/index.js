import React from 'react';
import * as d3 from "d3";
import { connect } from "react-redux";
import DivHorisontalBar from './div-horisontal-bar-chart';
import SvgHorisontalBar from './svg-horisontal-bar-chart';
import SvgVerticalBar from './svg-vertical-bar-chart';

export default class BarSubcategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" href="#">Div Horisontal</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Svg Horisontal</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Vertical</a>
          </li>
        </ul>

        <div className="bar-charts">
          <DivHorisontalBar />
          <SvgHorisontalBar />
          <SvgVerticalBar />
        </div>
      </div>
    );
  }
};