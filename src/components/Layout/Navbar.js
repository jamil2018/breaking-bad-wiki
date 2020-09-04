import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/breaking_bad_logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-nav">
          <Link className="nav-title" to="/">
            <img src={logo} alt="logo" />
          </Link>
          <ul className="nav-links">
            <li>
              <NavLink activeClassName="active" exact to="/">
                characters
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" exact to="/episodes">
                episodes
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" exact to="/quotes">
                quotes
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
