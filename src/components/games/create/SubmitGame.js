import React, { Component } from "react";

export class SubmitGame extends Component {
  render() {
    if (this.props.currentStep !== 3) {
      return null;
    }
    return (
      <div>
        <h4 className="bold">Read Terms and Create Game</h4>
        <div className="grey-text text-darken-3">
          <li>Note, by clicking "Create Game" you are creating a PUBLIC game.</li>
          <li>Public games are visible to all Recess users. </li>
          <li>Currently, games can not be modified. </li>
          <li>Recess login uses Google's Authentication.</li>
          <li>That said, we rec you do not give personal info to strangers.</li>
          <li>Please do not use this app if you are under 18 years of age.</li>
        </div>
        <div className="input-field">
          <button
            className="btn pink lighten-1 z-depth-0"
            onSubmit={this.props.handleSubmit}
          >
            Create Game
          </button>
        </div>
      </div>
    );
  }
}

export default SubmitGame;
