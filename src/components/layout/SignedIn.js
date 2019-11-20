import React from "react";
import "./index.css";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedIn = props => {
  // console.log({ props });
  return (
    <ul className="right furtherRight navbar">
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          id="viewsDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          View
        </a>
        <div
          className="dropdown-menu dropdown-menu-right"
          aria-labelledby="viewsDropdown"
        >
          <NavLink to="/" exact activeClassName="navItem-active">
            List
          </NavLink>
          <NavLink to="/map" exact activeClassName="navItem-active">
            Map
          </NavLink>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          id="createDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          New
        </a>
        <div
          className="dropdown-menu dropdown-menu-right"
          aria-labelledby="createDropdown"
        >
          <NavLink to="/create" exact activeClassName="navItem-active">
            Game
          </NavLink>
          <NavLink to="/createLeague" exact activeClassName="navItem-active">
            League
          </NavLink>
        </div>
      </li>
      <li>
        <a onClick={props.signOut}>Log Out</a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          {props.profile.initials}
        </NavLink>
      </li>
    </ul>
  );
  // }
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(null, mapDispatchToProps)(withRouter(SignedIn));
