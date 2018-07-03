import React from "react";

export default class ReactVerticalBarChart extends React.Component {
  static displayName = "ReactVerticalBarChart";
  static propTypes = {};

  constructor(props) {
    super(props);

    this.svgRef = React.createRef();
  }

  componentDidMount() {}

  render() {
    return <svg ref={this.svgRef} />;
  }
}
