import React, { Fragment } from "react";
import cn from 'classnames';
import { NavLink, matchPath } from 'react-router-dom';


export default class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { pathname } = this.props.location;

    return (
      <Fragment>
        <ul className="nav justify-content-center mb-5">
          <a className="navbar-brand" href="#/">D3 Explorer</a>

          <li className={cn("nav-item", {"active": matchPath(pathname, {path: '/bar'}) || pathname === '/'})}>
            <NavLink activeClassName="disabled" className="nav-link" to="/bar">Bar charts</NavLink>
          </li>

          <li className={cn("nav-item", {"active": matchPath(pathname, {path: '/circle'})})}>
            <NavLink activeClassName="disabled" className="nav-link" to="/circle">Circle charts</NavLink>
          </li>

          <li className={cn("nav-item", {"active": matchPath(pathname, {path: '/pie'})})}>
            <NavLink activeClassName="disabled" className="nav-link" to="/pie">Pie charts</NavLink>
          </li>

          <li className={cn("nav-item", {"active": matchPath(pathname, {path: '/line'})})}>
            <NavLink activeClassName="disabled" className="nav-link" to="/line">Line charts</NavLink>
          </li>

          <li className={cn("nav-item", {"active": matchPath(pathname, {path: '/tree'})})}>
            <NavLink activeClassName="disabled" className="nav-link" to="/tree">Tree charts</NavLink>
          </li>

          <li className={cn("nav-item", {"active": matchPath(pathname, {path: '/3d'})})}>
            <NavLink activeClassName="disabled" className="nav-link" to="/3d">3D charts</NavLink>
          </li>
        </ul>
      </Fragment>
    );
  }
}
