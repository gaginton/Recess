import React from "react";
import { Link } from "react-router-dom";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { connect } from "react-redux";

const Navbar = props => {
  const { auth, profile } = props;
  // console.log(auth);
  const links = auth.uid ? <SignedIn profile={profile} /> : <SignedOut />;
  return (
    <nav className="nav-wrapper black darken-3 mr-auto" fixed="top">
      <div className="container">
        <Link to="/" className="brand-logo">
          Recess
        </Link>
        {links}
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Navbar);
