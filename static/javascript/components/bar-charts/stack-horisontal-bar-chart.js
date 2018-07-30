import React from "react";
import * as d3 from "d3";
import WithSize from "../../shared/with-size";

const MARGINS = { top: 20, right: 30, bottom: 30, left: 40 };

class StackHorisontalBarChart extends React.Component {
  state = {
    keys: ["apples", "bananas", "cherries"],
    data: [
      { month: "Q1-2017", apples: 300, bananas: 500, cherries: 700, total: 1500 },
      { month: "Q2-2017", apples: 500, bananas: 400, cherries: 1000, total: 1900 },
      { month: "Q3-2017", apples: 700, bananas: 200, cherries: 500, total: 1400 },
      { month: "Q4-2017", apples: 300, bananas: 700, cherries: 200, total: 1200 }
    ]
  };

  constructor(props) {
    super(props);
    this.renderStacks = this.renderStacks.bind(this);
    this.axisRef = React.createRef();
  }

  componentDidMount() {
    this.setState({
      colors: d3.scaleOrdinal(d3.schemeCategory10),
      scaleX: this.createScaleX(),
      scaleY: this.createScaleY()
    });
  }

  componentDidUpdate(prevProps) {
    // You might want to add also data change check here to rebuild scales if your data id dynamic
    if (prevProps.width !== this.props.width || prevProps.height !== this.props.height) {
      this.setState({
        scaleX: this.createScaleX(),
        scaleY: this.createScaleY()
      });
    }
  }

  createScaleX() {
    const xValues = this.state.data.map(d => d.total);
    return d3
      .scaleLinear()
      .domain([0, d3.max(xValues)])
      .rangeRound([0, this.props.width - MARGINS.right - MARGINS.left]);
  }

  createScaleY() {
    return d3
      .scaleBand()
      .domain(this.state.data.map(d => d.month))
      .rangeRound([0, this.props.height - MARGINS.bottom - MARGINS.top])
      .padding(0.1);
  }

  render() {
    const { width, height } = this.props;
    const { scaleX, scaleY } = this.state;

    if (!scaleX || !scaleY) {
      return <div>Loading...</div>;
    }

    const series = d3.stack().keys(this.state.keys)(this.state.data);

    return (
      <svg ref={this.axisRef} className="bar-chart bar-chart--stack" width={width} height={height}>
        <g transform={`translate(${MARGINS.left},${MARGINS.top})`}>{series.map(this.renderStacks)}</g>
      </svg>
    );
  }

  renderStacks(stack) {
    const { colors, scaleX, scaleY } = this.state;
    return (
      <g key={stack.key} fill={colors(stack.key)}>
        {stack.map(d => {
          const width = scaleX(d[1]) - scaleX(d[0]);
          return (
            <rect key={String(d.data.month)} x={scaleX(d[0])} y={scaleY(d.data.month)} width={width} height={scaleY.bandwidth()}>
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

export default WithSize(StackHorisontalBarChart);
