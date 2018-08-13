import React from "react";
import * as d3 from "d3";
import WithSize from "../../shared/with-size";

class PieChart1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { type: "error", count: "5" },
        { type: "success", count: "15" },
        { type: "warning", count: "3" },
        { type: "aborted", count: "2" }
      ]
    };
  }

  componentDidMount() {
    this.setState({
      arc: this.createArc(),
      pie: this.createPie(),
      colors: this.createColors()
    });
  }

  componentDidUpdate(prevProps) {
    // You might want to add also data change check here to rebuild scales if your data is dynamic
    if (prevProps.width !== this.props.width || prevProps.height !== this.props.height) {
      this.setState({
        arc: this.createArc(),
        pie: this.createPie()
      });
    }
  }

  createArc() {
    const outerRadius = this.props.height / 2;
    return d3
      .arc()
      .outerRadius(outerRadius - 20)
      .innerRadius(0);
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

  render() {
    const { width, height } = this.props;
    const { colors, arc, pie, data } = this.state;

    if (!arc || !pie || !colors) {
      return <div>Loading...</div>;
    }

    return (
      <svg width={width} height={height} className="pie-chart">
        <g transform={`translate(${width / 2}, ${height / 2})`}>
          {pie(data).map(d => {
            return <path key={d.data.type} fill={colors(d.data.type)} d={arc(d)} />;
          })}
        </g>
      </svg>
    );
  }
}

export default WithSize(PieChart1);
