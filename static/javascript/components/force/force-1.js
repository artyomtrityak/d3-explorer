import React from "react";

export default class ReactForceBasicChart extends React.Component {
  static displayName = "ReactForceBasicChart";
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
