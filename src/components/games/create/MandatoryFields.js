import React from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import GameTypes from "../GameTypes";

export const MandatoryFields = (props) => {
    if (props.isVisible === false) {
        return null;
    }

    return (
        <div>
            <h2 className="bold">Mandatory Fields</h2>
            <div className="input-field">
                <Select
                    onChange={props.handleSelectCategory}
                    options={GameTypes}
                    value={props.category}
                />
            </div>
            <div className="input-field">
                <label htmlFor="title">
                    * Game Title (Ex: Football, Tag, DnD)
                </label>
                <input
                    type="text"
                    id="title"
                    onChange={props.handleChange}
                    value={props.title}
                    maxLength="150"
                />
            </div>
            <div className="input-field">
                <label htmlFor="content">
                    * Game Description (Rules, Expectations etc.)
                </label>
                <textarea
                    className="materialize-textarea"
                    id="content"
                    onChange={props.handleChange}
                    value={props.content}
                    rows="3" //NOT WORKING
                    maxLength="999"
                    style={{overflowX: "hidden", wordWrap: "break-word", height: 80+"PX"}}
                />
            </div>
            <div className="input-field">
                <label htmlFor="location">
                    * Location (Ex: Central Park, XBox Live, Mobile)
                </label>
                <input
                    type="text"
                    id="location"
                    onChange={props.handleChange}
                    value={props.location}
                    maxLength="150"
                />
            </div>
            <div className="input-field">
                <DatePicker
                    selected={
                        props.dateTime ? new Date(props.dateTime) : null
                    }
                    onChange={props.handleDateChange}
                    minDate={new Date()}
                    placeholderText="* Start Date and Time"
                    showTimeInput
                    timeInputLabel="Time:"
                    dateFormat="MM/dd/yyyy h:mm aa"
                />
            </div>
        </div>
    );
};

export default MandatoryFields;
