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

const DATA = [
  {
    label: "Group A",
    vals: [
      {
        type: "error",
        val: 12
      },
      {
        type: "success",
        val: 16
      }
    ]
  },
  {
    label: "Group B",
    vals: [
      {
        type: "error",
        val: 8
      },
      {
        type: "success",
        val: 16
      }
    ]
  },
  {
    label: "Group C",
    vals: [
      {
        type: "error",
        val: 8
      },
      {
        type: "success",
        val: 4
      }
    ]
  },
  {
    label: "Group D",
    vals: [
      {
        type: "error",
        val: 15
      },
      {
        type: "success",
        val: 4
      }
    ]
  },
  {
    label: "Group E",
    vals: [
      {
        type: "error",
        val: 8
      },
      {
        type: "success",
        val: 4
      }
    ]
  }
];

class SvgVerticalGroupedBarChart extends React.Component {
  static displayName = "SvgVerticalGroupedBarChart";
  state = {
    keys: ["success", "error"],
    data: DATA,
    scaleX: null,
    scaleY: null,
    subscaleX: null,
    colors: null
  };

  constructor(props) {
    super(props);
    this.renderGroup = this.renderGroup.bind(this);
  }

  componentDidMount() {
    const scaleX = this.createScaleX();
    const subscaleX = this.createSubscaleX(scaleX);
    const scaleY = this.createScaleY();
    const colors = d3.scaleOrdinal(d3.schemeCategory10);

    this.setState({ scaleX, subscaleX, scaleY, colors });
  }

  componentDidUpdate(prevProps) {
    console.log("DID update");
    // You might want to add also data change check here to rebuild scales if your data is dynamic
    if (prevProps.width !== this.props.width || prevProps.height !== this.props.height) {
      const scaleX = this.createScaleX();
      const subscaleX = this.createSubscaleX(scaleX);
      const scaleY = this.createScaleY();
      this.setState({ scaleX, subscaleX, scaleY });
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
    const yValues = this.state.data.map(d => d3.max(d.vals.map(v => v.val)));

    return d3
      .scaleLinear()
      .domain([0, d3.max(yValues)])
      .range([this.props.height - MARGINS.top - MARGINS.bottom, 0]);
  }

  createSubscaleX(scaleX) {
    return d3
      .scaleBand()
      .domain(this.state.keys)
      .range([0, scaleX.bandwidth()])
      .padding(0.1);
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
        <g transform={`translate(${MARGINS.left},${MARGINS.top})`}>{this.state.data.map(this.renderGroup)}</g>
      </svg>
    );
  }

  renderGroup(group) {
    const { scaleX, scaleY, subscaleX, colors } = this.state;

    return (
      <g key={group.label} transform={`translate(${scaleX(group.label)}, 0)`}>
        {group.vals.map(d => {
          console.log(colors(d.type));
          return (
            <rect
              key={d.type}
              width={subscaleX.bandwidth()}
              height={scaleY.range()[0] - scaleY(d.val)}
              fill={colors(d.type)}
              x={subscaleX(d.type)}
              y={scaleY(d.val)}
            />
          );
        })}
      </g>
    );
  }
}

export default WithSize(SvgVerticalGroupedBarChart);
