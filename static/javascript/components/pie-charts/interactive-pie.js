import React from "react";
import * as d3 from "d3";
import WithSize from "../../shared/with-size";

class PieChart1 extends React.Component {
  svgRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      data: [
        { type: "error", count: "5" },
        { type: "success", count: "15" },
        { type: "warning", count: "3" },
        { type: "aborted", count: "2" }
      ],
      arc: null,
      pie: null,
      hovered: null
    };
  }

  componentDidMount() {
    this.setState({
      arc: this.createArc(),
      pie: this.createPie(),
      colors: this.createColors()
    });
  }

  componentDidUpdate(prevProps, prevState) {
    // You might want to add also data change check here to rebuild scales if your data is dynamic
    if (prevProps.width !== this.props.width || prevProps.height !== this.props.height) {
      this.setState({
        arc: this.createArc(),
        pie: this.createPie()
      });
    }
  }

  getOuterRadius() {
    return this.props.height / 2 - 100;
  }

  createArc() {
    return d3.arc().innerRadius(this.getOuterRadius() - 100);
  }

  createPie() {
    return d3
      .pie()
      .sort(null)
      .value(d => +d.count)
      .padAngle(0.02);
  }

  createColors() {
    return d3.scaleOrdinal(d3.schemeCategory10).domain(this.state.data.map(d => d.type));
  }

  arcOver({ event, d }) {
    event.persist();
    d3.select(event.target)
      .transition()
      .duration(1000)
      .attrTween("fill", () => {
        return d3.interpolateRgb(event.target.getAttribute("fill"), "pink");
      })
      .attrTween("d", () => {
        const interpolator = d3.interpolate(d.outerRadius, d.outerRadius + 50);
        return t => {
          d.outerRadius = interpolator(t);
          return this.state.arc(d);
        };
      });
  }

  arcOut({ event, d }) {
    event.persist();
    const color = this.state.colors(d.data.type);
    d3.select(event.target)
      .transition()
      .duration(1000)
      .attrTween("fill", () => {
        return d3.interpolateRgb(event.target.getAttribute("fill"), color);
      })
      .attrTween("d", () => {
        const interpolator = d3.interpolate(d.outerRadius, this.getOuterRadius());
        return t => {
          d.outerRadius = interpolator(t);
          return this.state.arc(d);
        };
      });
  }

  render() {
    const { width, height } = this.props;
    const { colors, arc, pie, data } = this.state;

    if (!arc || !pie || !colors) {
      return <div>Loading...</div>;
    }

    return (
      <svg ref={this.svgRef} width={width} height={height} className="pie-chart">
        <g transform={`translate(${width / 2}, ${height / 2})`}>
          {pie(data).map(d => {
            d.outerRadius = this.getOuterRadius();
            return (
              <path
                key={d.data.type}
                fill={colors(d.data.type)}
                d={arc(d)}
                onMouseOver={event => this.arcOver({ event, d })}
                onMouseOut={event => this.arcOut({ event, d })}
              />
            );
          })}
        </g>
      </svg>
    );
  }
}

export default WithSize(PieChart1);
