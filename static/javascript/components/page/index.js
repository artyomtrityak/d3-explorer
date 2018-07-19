import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import MainMenu from "./main-menu";
import BarCharts from "../bar-charts";
import CircleCharts from "../circles-charts";
import PieCharts from "../pie-charts";
import LineCharts from "../line-charts";
import TreeCharts from "../tree-charts";
import ThreeDCharts from "../3d-charts";
import ForceCharts from "../force";

export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <HashRouter>
        <div>
          <Route path="/" component={MainMenu} />
          <div className="container-fluid mt-2">
            <Switch>
              <Route path="/bar" component={BarCharts} />
              <Route path="/pie" component={PieCharts} />
              <Route path="/circle" component={CircleCharts} />
              <Route path="/line" component={LineCharts} />
              <Route path="/tree" component={TreeCharts} />
              <Route path="/3d" component={ThreeDCharts} />
              <Route path="/force" component={ForceCharts} />

              <Redirect from="/" to="/bar" />
            </Switch>
          </div>
        </div>
      </HashRouter>
    );
  }
}
