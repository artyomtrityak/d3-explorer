import React from "react";
import * as d3 from "d3";
import WithSize from "../../shared/with-size";

class PieChartWithLabelsOutside extends React.Component {
  svgRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      data: [{ type: "error", count: 5 }, { type: "success", count: 15 }, { type: "warning", count: 3 }, { type: "aborted", count: 2 }],
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
    return d3
      .arc()
      .outerRadius(this.getOuterRadius())
      .innerRadius(this.getOuterRadius() - 100);
  }

  createPie() {
    return d3
      .pie()
      .sort(null)
      .value(d => d.count)
      .padAngle(0.02);
  }

  createColors() {
    return d3.scaleOrdinal(d3.schemeCategory10).domain(this.state.data.map(d => d.type));
  }

  getTextPosition({ arc, d }) {
    const radius = Math.min(this.props.width, this.props.height) / 2;
    const labelRadius = radius - 50;

    const c = arc.centroid(d);
    const x = c[0];
    const y = c[1];
    const h = Math.sqrt(x * x + y * y);
    return `translate(${(x / h) * labelRadius},${(y / h) * labelRadius})`;
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
            return (
              <React.Fragment key={d.data.type}>
                <path fill={colors(d.data.type)} d={arc(d)} />
                {/* Label */}
                <text transform={this.getTextPosition({ arc, d })} textAnchor={(d.endAngle + d.startAngle) / 2 > Math.PI ? "end" : "start"}>
                  {`${d.data.type}: ${d.data.count}`}
                </text>
              </React.Fragment>
            );
          })}

          {/* Center label */}
          <g>
            <text textAnchor="middle" fontSize="24px">
              Total: {data.reduce((result, d) => result + d.count, 0)}
            </text>
          </g>
        </g>
      </svg>
    );
  }
}

export default WithSize(PieChartWithLabelsOutside);
