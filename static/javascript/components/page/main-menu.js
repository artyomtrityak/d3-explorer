import React from "react";
import Rx from "rxjs/Rx";
import cn from 'classnames';
import { connect } from "react-redux";
import BarCharts from '../bar-charts';
import CircleCharts from '../circles-charts';
import DynamicBarCharts from '../dynamic-data-charts';

class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <a className="navbar-brand" href="#">D3 Explorer</a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className={cn("nav-item", {"active": this.props.viewer.category === 'bar'})}>
              <a className="nav-link" href="#" onClick={() => this.props.dispatchCategory('bar')}>
                Bar charts
              </a>
            </li>
            <li className={cn("nav-item", {"active": this.props.viewer.category === 'circle'})}>
              <a className="nav-link" href="#" onClick={() => this.props.dispatchCategory('circle')}>
                Cicrle charts
              </a>
            </li>
            <li className={cn("nav-item", {"active": this.props.viewer.category === 'pie'})}>
              <a className="nav-link" href="#" onClick={() => this.props.dispatchCategory('pie')}>
                Pie charts
              </a>
            </li>
            <li className={cn("nav-item", {"active": this.props.viewer.category === 'dynamic'})}>
              <a className="nav-link" href="#" onClick={() => this.props.dispatchCategory('dynamic')}>
                Dynamic data
              </a>
            </li>
          </ul>
        </div>
      </nav>
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
    dispatchCategory: name => dispatch({ type: "CATEGORY:CHANGE", name }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);
