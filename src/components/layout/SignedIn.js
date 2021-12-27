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
          <NavLink to="/list" exact activeClassName="navItem-active">
            List
          </NavLink>
          <NavLink to="/" exact activeClassName="navItem-active">
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
          <NavLink to="/createGame" exact activeClassName="navItem-active">
            Game
          </NavLink>
          <NavLink to="/createLeague" exact activeClassName="navItem-active">
            League
          </NavLink>
        </div>
      </li>
      <li className="nav-item">
        <a onClick={props.signOut} className="nav-link">
          Log Out
        </a>
      </li>
      <li>
        <NavLink
          to="/profile"
          className="btn btn-floating pink lighten-1"
          exact
          activeClassName="navItem-active"
        >
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
