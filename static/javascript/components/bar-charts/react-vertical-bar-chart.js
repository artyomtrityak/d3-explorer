import React from "react";
import { generateArray } from "../../data-layer/array-processors";

export default class ReactVerticalBarChart extends React.Component {
  static displayName = "ReactVerticalBarChart";

  state = {
    data: generateArray() // [ {val: 12, label: 'Label A}, ... {val: 32, label: 'Label XX'} ]
  };

  constructor(props) {
    super(props);
    this.svgRef = React.createRef();
  }

  componentDidMount() {}

  render() {
    return <svg ref={this.svgRef} />;
  }
}
