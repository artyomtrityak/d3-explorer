import React from "react";
import * as d3 from "d3";
import { generateArray } from "../../data-layer/array-processors";
import WithSize from "../../shared/with-size";
import Axis from "./axis";

const MARGINS = {
  left: 50,
  right: 50,
  top: 50,
  bottom: 50
};

class SvgVerticalBarChart extends React.Component {
  static displayName = "SvgVerticalBarChart";
  state = {
    data: generateArray(),
    scaleX: null,
    scaleY: null
  };

  constructor(props) {
    super(props);
    this.renderBar = this.renderBar.bind(this);
  }

  componentDidMount() {
    const scaleX = this.createScaleX();
    const scaleY = this.createScaleY();
    this.setState({ scaleX, scaleY });
  }

  componentDidUpdate(prevProps) {
    // You might want to add also data change check here to rebuild scales if your data is dynamic
    if (prevProps.width !== this.props.width || prevProps.height !== this.props.height) {
      const scaleX = this.createScaleX();
      const scaleY = this.createScaleY();
      this.setState({ scaleX, scaleY });
    }
  }

  createScaleX() {
    return d3
      .scaleBand()
      .domain(this.state.data.map(d => d.label))
      .range([0, this.props.width - MARGINS.left - MARGINS.right])
      .padding(0.1);
  }

  createScaleY() {
    return d3
      .scaleLinear()
      .domain([0, d3.max(this.state.data.map(d => d.val))])
      .range([this.props.height - MARGINS.top - MARGINS.bottom, 0]);
  }

  render() {
    const { width, height } = this.props;
    const { scaleX, scaleY } = this.state;
    if (!width || !height || !scaleX || !scaleY) {
      return null;
    }

    return (
      <svg className="bar-chart bar-chart--group" width={width} height={height}>
        <g transform={`translate(${MARGINS.left},${MARGINS.top})`}>
          <Axis scaleX={scaleX} scaleY={scaleY} />
        </g>
        <g transform={`translate(${MARGINS.left},${MARGINS.top})`}>{this.state.data.map(this.renderBar)}</g>
      </svg>
    );
  }

  renderBar(d) {
    const { scaleX, scaleY } = this.state;

    return (
      <g key={d.label}>
        <rect
          key={d.type}
          width={scaleX.bandwidth()}
          height={scaleY.range()[0] - scaleY(d.val)}
          fill={`steelblue`}
          x={scaleX(d.label)}
          y={scaleY(d.val)}
        >
          <title>{d.val}</title>
        </rect>
      </g>
    );
  }
}

export default WithSize(SvgVerticalBarChart);
