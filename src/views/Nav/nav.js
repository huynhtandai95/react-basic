import React from "react";
import "./nav.scss";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div className="topnav">
        <NavLink activeclassname="active" to="/home">
          Home
        </NavLink>
        <NavLink to="/todo" activeclassname="active">
          ToDO
        </NavLink>
        <NavLink to="/about" activeclassname="active">
          About
        </NavLink>
        <NavLink to="/users" activeclassname="active">
          Users
        </NavLink>
      </div>
    );
  }
}
export default Nav;
