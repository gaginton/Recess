import React, { Component } from "react";

export class OptionalFields extends Component {
    render() {
        if (this.props.currentStep !== 2) {
            return null;
        }
        return (
            <div>
                <h4 className="bold">Optional Fields</h4>
                <div className="input-field">
                    <label htmlFor="address">
            Address (Game location for map)
                    </label>
                    <input
                        type="text"
                        id="address"
                        onChange={this.props.handleChange}
                        value={this.props.address}
                    />
                </div>
                <div className="row">
                    <div className="col s12 m6">
                        {/* ---------------- TEAM SIZE, NUMBER OF TEAMS ----------------------- */}
                        <div className="grey-text text-darken-3">
              Team and Roster Layout
                        </div>
                        <div className="input-field">
                            <label htmlFor="minPlayers">Minimum Players</label>
                            <input
                                type="number"
                                id="minPlayers"
                                onChange={this.props.handleChange}
                                value={this.props.minPlayers}
                                min="2"
                            />
                        </div>
                        <div className="input-field">
                            <label htmlFor="maxPlayers">Maximum Players</label>
                            <input
                                type="number"
                                id="maxPlayers"
                                onChange={this.props.handleChange}
                                value={this.props.maxPlayers}
                                min="2"
                                max="50"
                            />
                        </div>
                        <div className="input-field">
                            <label htmlFor="noTeams">Set Number of Teams</label>
                            <input
                                type="number"
                                id="noTeams"
                                onChange={this.props.handleChange}
                                value={this.props.noTeams}
                                max={this.props.maxPlayers}
                            />
                        </div>
                    </div>
                    <div className="col s12 m6">
                        {/* ---------------- ADDITIONAL FIELDS: Max game length, bring with, min age ----------------------- */}
                        <div className="grey-text text-darken-3">
              Additional Fields <br />
                        </div>
                        <div className="input-field">
                            <label htmlFor="maxLength">
                Maximum Length of Game (Minutes)
                            </label>
                            <input
                                type="number"
                                id="maxLength"
                                onChange={this.props.handleChange}
                                value={this.props.maxLength}
                            />
                        </div>
                        <div className="input-field">
                            <label htmlFor="minAge">Minimum Age of Players</label>
                            <input
                                type="number"
                                id="minAge"
                                onChange={this.props.handleChange}
                                value={this.props.minAge}
                            />
                        </div>
                        <div className="input-field">
                            <label htmlFor="equipment">
                Please bring to game (Equipment, fees, etc.)
                            </label>
                            <input
                                type="text"
                                id="equipment"
                                onChange={this.props.handleChange}
                                value={this.props.equipment}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OptionalFields;
