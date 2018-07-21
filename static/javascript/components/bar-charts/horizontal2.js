import ReactDOM from "react-dom";
import React from "react";
import * as d3 from "d3";
import { generateArray } from "../../data-layer/array-processors";
import WithSize from "../../shared/with-size";
import Axis from "../../shared/axis";

const OFFSETS = {
  top: 50,
  bottom: 50,
  left: 100,
  right: 50
};

class HorisontalBarChart2 extends React.Component {
  static displayName = "HorisontalBarChart2";

  state = {
    data: generateArray()
  };

  componentDidMount() {
    this.setState({
      scaleX: this.createScaleX(),
      scaleY: this.createScaleY()
    });
  }

  compomentDidUpdate(prevProps) {
    if (prevProps.width !== this.props.width || prevProps.height !== this.props.height) {
      this.setState({
        scaleX: this.createScaleX(),
        scaleY: this.createScaleY()
      });
    }
  }

  createScaleX() {
    let minX = d3.min(this.state.data, x => x.val);
    // Add nevative support
    minX = minX > 0 ? 0 : minX;
    return d3
      .scaleLinear()
      .domain([minX, d3.max(this.state.data, x => x.val) + 10])
      .rangeRound([0, this.props.width - OFFSETS.left - OFFSETS.right]);
  }

  createScaleY() {
    return d3
      .scaleBand()
      .domain(this.state.data.map(d => d.label))
      .range([0, this.props.height - OFFSETS.top - OFFSETS.bottom])
      .padding(0.2);
  }

  render() {
    const { data, scaleX, scaleY } = this.state;
    const { width, height } = this.props;

    if (!data || !scaleX || !scaleY) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <svg className="bar-chart" width={width} height={height}>
          <g transform={`translate(${OFFSETS.left}, ${OFFSETS.top})`}>
            <g>
              <Axis scaleX={scaleX} scaleY={scaleY} />
            </g>
            <g>{this.renderBars()}</g>
          </g>
        </svg>
      </div>
    );
  }

  renderBars() {
    const { scaleX, scaleY, data } = this.state;
    return data.map(d => {
      return (
        <g key={`key_${d.label}`} transform={`translate(0, ${scaleY(d.label)})`}>
          <rect width={scaleX(d.val)} height={scaleY.bandwidth()} />
        </g>
      );
    });
  }
}

export default WithSize(HorisontalBarChart2);
