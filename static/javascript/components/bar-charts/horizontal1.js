import React from "react";
import * as d3 from "d3";
import WithSize from "../../shared/with-size";

const OFFSETS = {
  left: 0,
  right: 50,
  top: 0,
  bottom: 0
};

class HorisontalBarChart1 extends React.Component {
  static displayName = "HorisontalBarChart1";
  state = {
    data: [4, 8, 15, 16, 23, 42],
    scaleX: null,
    scaleY: null
  };

  componentDidMount() {
    this.setState({
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
      .scaleLinear()
      .domain([0, d3.max(this.state.data)])
      .range([0, this.props.width - OFFSETS.left - OFFSETS.right]);
  }

  createScaleY() {
    return d3
      .scaleBand()
      .domain(this.state.data)
      .range([0, this.props.height - OFFSETS.top - OFFSETS.bottom])
      .padding(0.1);
  }

  render() {
    const { scaleX, scaleY } = this.state;
    if (!scaleX || !scaleY) {
      return <div>Loadng...</div>;
    }
    return <div className="bar-chart">{this.renderBars()}</div>;
  }

  renderBars() {
    const { scaleX, scaleY } = this.state;
    return this.state.data.map((d, i) => (
      <div key={i} className="bar-chart__div" style={{ width: scaleX(d), height: scaleY.bandwidth() }}>
        {d}
      </div>
    ));
  }
}

export default WithSize(HorisontalBarChart1);
