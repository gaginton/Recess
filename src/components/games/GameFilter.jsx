import React, { Component } from "react";
import { connect } from "react-redux";
import { FILTER_BY, createFilterAction } from "../../store/actions/filterActions";
import "./GameFilter.css";

export class GameFilter extends Component{
    constructor(props) {
        super(props);
        this.props = props;
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        switch (e.target.id) {
            case FILTER_BY.TITLE:
                this.props.filterByTitle(e.target.value);
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div className="game-filter">
                <div>
                    <strong>Filter by Name:</strong>
                    <input
                        id={FILTER_BY.TITLE}
                        type="text"
                        onChange={this.handleChange}
                        value={this.props.filter.title}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filter: state.game.filter
    };
}

const mapDispatchToProps = dispatch => {
    return {
        filterByTitle: (title) => dispatch(createFilterAction(FILTER_BY.TITLE, title)),
        filterByCategory: (category) => dispatch(createFilterAction(FILTER_BY.CATEGORY, category)),
        filterByDate: (date) => dispatch(createFilterAction(FILTER_BY.DATE, date))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameFilter);