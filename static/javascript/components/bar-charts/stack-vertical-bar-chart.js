import React from "react";
import * as d3 from "d3";
import WithSize from "../../shared/with-size";
import Axis from "./axis";

const MARGINS = { top: 20, right: 30, bottom: 50, left: 40 };

class StackVerticalBarChart extends React.Component {
  static displayName = "StackVerticalBarChart";

  constructor(props) {
    super(props);
    this.renderStacks = this.renderStacks.bind(this);
    this.state = {
      keys: ["apples", "bananas", "cherries"],
      data: [
        { month: "Q1-2017", apples: 300, bananas: 500, cherries: 700, total: 1500 },
        { month: "Q2-2017", apples: 500, bananas: 400, cherries: 1000, total: 1900 },
        { month: "Q3-2017", apples: 700, bananas: 200, cherries: 500, total: 1400 },
        { month: "Q4-2017", apples: 300, bananas: 700, cherries: 200, total: 1200 },
        { month: "Q1-2018", apples: 300, bananas: 700, cherries: 200, total: 1200 },
        { month: "Q2-2018", apples: 500, bananas: 400, cherries: 1000, total: 1900 },
        { month: "Q3-2018", apples: 300, bananas: 500, cherries: 700, total: 1500 }
      ]
    };
  }

  componentDidMount() {
    this.setState({
      colors: d3.scaleOrdinal(d3.schemeCategory10),
      scaleX: this.createScaleX(),
      scaleY: this.createScaleY()
    });
  }

  componentDidUpdate(prevProps) {
    // You might want to add also data change check here to rebuild scales if your data is dynamic
    if (prevProps.width !== this.props.width || prevProps.height !== this.props.height) {
      this.setState({
        scaleX: this.createScaleX(),
        scaleY: this.createScaleY()
      });
    }
  }

  createScaleX() {
    return d3
      .scaleBand()
      .domain(this.state.data.map(d => d.month))
      .range([0, this.props.width - MARGINS.left - MARGINS.right])
      .padding(0.1);
  }

  createScaleY() {
    const yValues = this.state.data.map(d => d.total);

    return d3
      .scaleLinear()
      .domain([0, d3.max(yValues)])
      .range([this.props.height - MARGINS.top - MARGINS.bottom, 0]);
  }

  render() {
    const { width, height } = this.props;
    const { scaleX, scaleY } = this.state;

    if (!scaleX || !scaleY) {
      return <div>Loading...</div>;
    }

    const series = d3.stack().keys(this.state.keys)(this.state.data);
    return (
      <svg width={width} height={height} className="bar-chart bar-chart--stack">
        <g transform={`translate(${MARGINS.left},${MARGINS.top})`}>
          <Axis scaleX={scaleX} scaleY={scaleY} />
        </g>
        <g transform={`translate(${MARGINS.left},${MARGINS.top})`}>{series.map(this.renderStacks)}</g>
      </svg>
    );
  }

  renderStacks(stack) {
    const { colors, scaleX, scaleY } = this.state;
    return (
      <g key={stack.key} fill={colors(stack.key)}>
        {stack.map(d => {
          const height = scaleY(d[0]) - scaleY(d[1]);
          return (
            <rect key={String(d.data.month)} x={scaleX(d.data.month)} y={scaleY(d[1])} width={scaleX.bandwidth()} height={height}>
              <title>
                {stack.key}: {d.data[stack.key]}
              </title>
            </rect>
          );
        })}
      </g>
    );
  }
}

export default WithSize(StackVerticalBarChart);
