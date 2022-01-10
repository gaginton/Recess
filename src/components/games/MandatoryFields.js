import React, { Component } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import GameTypes from "./GameTypes";

export class MandatoryFields extends Component {
  render() {
    if (this.props.currentStep !== 1) {
      return null;
    }
    return (
      <div>
        <h4 className="bold">Mandatory Fields</h4>
        <div className="input-field">
          <Select
            onChange={this.props.handleSelectCategory}
            options={GameTypes}
            value={this.props.category}
          />
        </div>
        <div className="input-field">
          <label htmlFor="title">
            * Game Title (Ex: Football, Tag, DnD, Beer Pong)
          </label>
          <input
            type="text"
            id="title"
            onChange={this.props.handleChange}
            value={this.props.title}
          />
        </div>
        <div className="input-field">
          <label htmlFor="content">
            * Game Description (Ex: Full court, Shirts vs Skins, Beginners
            Welcome, 10 cup)
          </label>
          <textarea
            className="materialize-textarea"
            id="content"
            onChange={this.props.handleChange}
            value={this.props.content}
          />
        </div>
        <div className="input-field">
          <label htmlFor="location">
            * Location (Ex: Central Park, XBox Live, Mobile)
          </label>
          <input
            type="text"
            id="location"
            onChange={this.props.handleChange}
            value={this.props.location}
          />
        </div>
        <div className="input-field">
          <DatePicker
            // id="gameDateTimeSelector"
            selected={
              this.props.dateTime ? new Date(this.props.dateTime) : null
            }
            onChange={this.props.handleDateChange}
            minDate={new Date()}
            placeholderText="* Start Date and Time"
            showTimeInput
            // showMonthDropdown
            timeInputLabel="Time:"
            dateFormat="MM/dd/yyyy h:mm aa"
          />
        </div>
      </div>
    );
  }
}

export default MandatoryFields;
