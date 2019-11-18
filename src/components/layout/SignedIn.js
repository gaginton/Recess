import React from "react";
import "./index.css";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedIn = props => {
  console.log({ props });

  return (
    <ul className="right furtherRight">
      <li>
        <NavLink to="/" exact activeClassName="navItem-active">
          List
        </NavLink>
      </li>
      <li>
        <NavLink to="/map" exact activeClassName="navItem-active">
          Map
        </NavLink>
      </li>
      <li>
        <NavLink to="/create" exact activeClassName="navItem-active">
          New
        </NavLink>
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
