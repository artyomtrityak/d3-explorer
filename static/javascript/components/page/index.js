import React from "react";
import Rx from "rxjs/Rx";
import { connect } from "react-redux";
import BarCharts from '../bar-charts';
import CircleCharts from '../circles-charts';
import DynamicBarCharts from '../dynamic-data-charts';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <BarCharts />
        <CircleCharts />
        <DynamicBarCharts />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    viewer: state.viewer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchLogin: data => dispatch({ action: "CATEGORY:CHANGE", data }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
