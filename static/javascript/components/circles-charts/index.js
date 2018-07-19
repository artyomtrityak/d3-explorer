import React from "react";
import * as d3 from "d3";
import { NavLink, Route } from "react-router-dom";
import SvgCircles from "./svg-circles";
import SvgCirclesDragNDrop from "./circles-drag-n-drop";
import Zoom from "./circles-zoom";

export default class CirclesCharts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { match } = this.props;

    return (
      <div className="row">
        <div className="col-3">
          <div className="list-group">
            <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={`${match.url}/circles1`}>
              Circles 1
            </NavLink>
            <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={`${match.url}/drag`}>
              Circles Drag'n'Drop
            </NavLink>
            <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={`${match.url}/zoom`}>
              Circles Zoom
            </NavLink>
          </div>
        </div>

        <div className="col-9">
          <Route path={`${match.url}/circles1`} component={SvgCircles} />
          <Route path={`${match.url}/drag`} component={SvgCirclesDragNDrop} />
          <Route path={`${match.url}/zoom`} component={Zoom} />
        </div>
      </div>
    );
  }
}
