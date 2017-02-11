import React from 'react';
import Rx from 'rxjs/Rx';
import { connect } from 'react-redux';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
        Hello
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
    dispatchLogin: (data) => (
      dispatch({action: 'LOGIN:REQUEST', data})
    ),
    dispatchLogout: () => (
      dispatch({action: 'LOGOUT:REQUEST'})
    )
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Page);