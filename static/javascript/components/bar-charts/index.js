import React from 'react';
import * as d3 from "d3";
import DivHorisontalBar from './div-horisontal-bar-chart';
import SvgHorisontalBar from './svg-horisontal-bar-chart';
import SvgVerticalBar from './svg-vertical-bar-chart';

export default class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="bar-charts">
        <DivHorisontalBar />
        <SvgHorisontalBar />
        <SvgVerticalBar />
      </div>
    );
  }
};