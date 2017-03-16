import React from "react";
import Rx from "rxjs/Rx";
import { connect } from "react-redux";
import StatsD3 from '../stats';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <StatsD3 />
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
    dispatchLogin: data => dispatch({ action: "LOGIN:REQUEST", data }),
    dispatchLogout: () => dispatch({ action: "LOGOUT:REQUEST" })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
