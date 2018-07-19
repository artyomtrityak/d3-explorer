import React from "react";
import { NavLink, Route } from "react-router-dom";
import Circles1 from "./circles1";
import CirclesDragNDrop from "./circles-drag-n-drop";
import CirclesZoom from "./circles-zoom";

export default class CirclesCharts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
          <Route path={`${match.url}/circles1`} component={Circles1} />
          <Route path={`${match.url}/drag`} component={CirclesDragNDrop} />
          <Route path={`${match.url}/zoom`} component={CirclesZoom} />
        </div>
      </div>
    );
  }
}
