import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/actions/authActions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

export class SignUp extends Component {
  state = {
    email: "",
    password: "",
    confirmPass: "",
    firstName: "",
    lastName: "",
    bday: "",
    phoneNo: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleDateChange = date => {
    this.setState({
      bday: date
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (
      this.state.email !== "" &&
      this.state.password !== "" &&
      this.state.firstName !== "" &&
      this.state.lastName !== "" &&
      this.state.bday !== "" &&
      this.state.password === this.state.confirmPass
    ) {
      this.props.signUp(this.state);
    }
  };
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="small-text">
            During the current testing period, there is no authentication of
            values.
            <br />
            You must remember email and password to log back in.
            <br />
            If you would like to receive notifications, use your real email and
            phone number.
          </div>
          {/* START WITH NAME TO BE POLITE */}
          <div className="row">
            <div className="col s12 m6">
              <div className="input-field">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="col s12 m6">
              <div className="input-field">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" onChange={this.handleChange} />
              </div>
            </div>
          </div>
          {/* EMAIL AND PASS */}
          <div className="row">
            <div className="col s12 m6">
              <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={this.handleChange} />
              </div>
            </div>
            <div className="col s12 m6">
              <div className="input-field">
                <PhoneInput
                  placeholder="Enter phone number"
                  value={this.state.phone}
                  onChange={phone => this.setState({ phone })}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m6">
              <div className="input-field">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="col s12 m6">
              <div className="input-field">
                <label htmlFor="confirmPass">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPass"
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col s12 m6">
              <div className="input-field">
                <DatePicker
                  // id="bday"
                  selected={this.state.bday}
                  onChange={this.handleDateChange}
                  maxDate={new Date()}
                  placeholderText="Birthday"
                  showMonthDropdown
                  showYearDropdown
                />
              </div>
            </div>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
            <div className="red-text center">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
