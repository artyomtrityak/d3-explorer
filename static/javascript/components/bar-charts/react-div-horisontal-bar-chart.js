import React from "react";
import * as d3 from "d3";

export default class DivHorisontalBarChart extends React.Component {
  static displayName = "DivHorisontalBarChart";

  constructor(props) {
    super(props);
    this.state = {
      data: [4, 8, 15, 16, 23, 42]
    };
  }

  componentDidMount() {
    const scale = d3
      .scaleLinear()
      .domain([0, d3.max(this.state.data)])
      .range([0, window.innerWidth - 100]);
    this.setState({ scale });
  }

  render() {
    if (!this.state.scale) {
      return null;
    }

    return (
      <div>
        {this.state.data.map((d, i) => (
          <div key={i} className="bar-chart bar-chart--div" style={{ width: this.state.scale(d) }}>
            {d}
          </div>
        ))}
      </div>
    );
  }
}
