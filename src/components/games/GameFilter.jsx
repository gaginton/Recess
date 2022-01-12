import React, { Component } from "react";
import { connect } from "react-redux";
import Select from "react-select";
import { FILTER_BY, createFilterAction } from "../../store/actions/filterActions";
import "./GameFilter.css";
import GameTypes from "./GameTypes";

export class GameFilter extends Component{
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className="game-filter">
                <div>
                    <strong>Filter by Name:</strong>
                    <input
                        id={FILTER_BY.TITLE}
                        type="text"
                        onChange={(e) => this.props.filterByTitle(e.target.value)}
                        value={this.props.filter.title}
                    />
                </div>
                <div>
                    <strong>Filter by Category:</strong>
                    <Select
                        isMulti={true}
                        aria-multiselectable={true}
                        isClearable={true}
                        id={FILTER_BY.CATEGORY}
                        options={GameTypes}
                        onChange={(categories) => this.props.filterByCategory(categories ? categories.map(cat => cat.value) : [])}
                        value={
                            GameTypes.filter((gameCategory) => this.props.filter.categories.includes(gameCategory.value))
                        }
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
        filterByCategory: (categories) => dispatch(createFilterAction(FILTER_BY.CATEGORY, categories)),
        filterByDate: (date) => dispatch(createFilterAction(FILTER_BY.DATE, date))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameFilter);