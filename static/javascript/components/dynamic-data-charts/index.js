import React from 'react';
import * as d3 from "d3";
import DynamicBarChart from './dynamic-bar-chart';

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
        <DynamicBarChart />
      </div>
    );
  }
};