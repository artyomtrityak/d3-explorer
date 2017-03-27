import React from "react";
import Rx from "rxjs/Rx";
import cn from 'classnames';
import { connect } from "react-redux";
import { Link, matchPath } from 'react-router-dom';


export default class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { pathname } = this.props.location;

    return (
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <a className="navbar-brand" href="#">D3 Explorer</a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">

            <li className={cn("nav-item", {"active": matchPath(pathname, {path: '/bar'}) || pathname === '/'})}>
              <Link className="nav-link" to="/bar">Bar charts</Link>
            </li>

            <li className={cn("nav-item", {"active": matchPath(pathname, {path: '/circle'})})}>
              <Link className="nav-link" to="/circle">Circle charts</Link>
            </li>

            <li className={cn("nav-item", {"active": matchPath(pathname, {path: '/pie'})})}>
              <Link className="nav-link" to="/pie">Pie charts</Link>
            </li>

            <li className={cn("nav-item", {"active": matchPath(pathname, {path: '/line'})})}>
              <Link className="nav-link" to="/line">Line charts</Link>
            </li>

          </ul>
        </div>

      </nav>
    );
  }
}
