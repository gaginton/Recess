import React, { Component } from "react";
// import DatePicker from "react-datepicker";
// import Select from "react-select";
// import GameTypes from "./GameTypes";

export class LeagueFields extends Component {
    render() {
        if (this.props.currentStep !== 3) {
            return null;
        }
        return (
            <div>
                <h4 className="bold">League Schedule</h4>
                <div>The following fields will default based on the game chosen.</div>
                <div>
          Pick the logic of advancing between rounds. Elimination or matched
          pairing.
                </div>
                <div>Pick frequency of games if they reccur over multiple days.</div>
                <div className="input-field">
                    <label htmlFor="noTeams">Max match length</label>
                    <input
                        type="number"
                        id="maxMatchLength"
                        onChange={this.props.handleChange}
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="noTeams">Max round length</label>
                    <input
                        type="number"
                        id="maxRoundLength"
                        onChange={this.props.handleChange}
                    />
                </div>
            </div>
        );
    }
}

export default LeagueFields;
