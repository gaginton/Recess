import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedIn = props => {
  return (
    <ul className="right furtherRight">
      <li>
        {props.viewStyle != "mapStyle" && (
          <NavLink to="/map" onClick={props.viewStyle == "mapStyle"}>
            Map
          </NavLink>
        )}
        {props.viewStyle == "mapStyle" && (
          <NavLink to="/" onClick={props.viewStyle == "listStyle"}>
            List
          </NavLink>
        )}
      </li>
      <li>
        <NavLink to="/create">New</NavLink>
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

export default connect(
  null,
  mapDispatchToProps
)(SignedIn);
