import React from "react";
import { NavLink, Route } from "react-router-dom";
import Force1 from "./force-1";

export default class ForceCharts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { match } = this.props;

    return (
      <div className="row">
        <div className="col-3">
          <div className="list-group">
            <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={`${match.url}/force1`}>
              Force 1
            </NavLink>
          </div>
        </div>

        <div className="col-9">
          <Route path={`${match.url}/force1`} component={Force1} />
        </div>
      </div>
    );
  }
}
