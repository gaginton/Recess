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
          * Please note, by clicking "Create Game" you are creating a PUBLIC
          game, visible to all Recess users. These games can not be modified in
          the current Recess version. Private games and editing, up until the
          day of a game, are features expected soon.
        </div>
        <div className="grey-text text-darken-3">
          * Your information is confidential. However, Recess is not responsible
          for what you write online. We recommend you do not give personal
          information to strangers.
        </div>
        <div className="grey-text text-darken-3">
          * Please do not use this app if you are under 18 years of age.
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
