import React from 'react';
import * as d3 from "d3";
import Rx from "rxjs/Rx";
import { getRandomlyChangedArray, generateArray } from '../../data-layer/array-processors';

export default class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: generateArray()
    };
  }

  componentDidMount() {
    console.log(this.state.data);
  }

  render() {
    return (
      <div className="chart-container">
      </div>
    );
  }
};