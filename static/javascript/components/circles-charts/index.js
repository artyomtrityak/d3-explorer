import React from 'react';
import * as d3 from "d3";
import SvgCircles from './svg-circles';

export default class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <SvgCircles />
      </div>
    );
  }
};