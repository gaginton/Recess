import { FILTER_BY } from "../actions/filterActions";

const initState = {
    filter: {
        title: "",
        // categories: []
    }
};

const filterByTitle = (state, { value }) => {
    return { ...state, filter: { ...state.filter, title: value } };
};

// const filterByCategory = (state, { value }) => {
//     return { ...state, filter: { ...state.filter, categories: value } };
// };

const filterClubsReducer = (state, action) => {
    switch (action.filterBy) {
    case FILTER_BY.TITLE:
        return filterByTitle(state, action);
    default:
        return state;
    }
};

const clubReducer = (state = initState, action) => {
    switch (action.type) {
    case "CREATE_CLUB":
        // console.log("created club", action.club);
        return state;
    case "CREATE_CLUB_ERROR":
        // console.log("create club error", action.err);
        return state;
    case "JOINED_CLUB":
        // console.log("joined club", action.club);
        return state;
    case "JOIN_CLUB_ERROR":
        // console.log("join club error", action.err);
        return state;
    case "EDIT_CLUB":
        return state;
    case "EDIT_CLUB_ERROR":
        return state;
    case "FILTER_CLUBS":
        return filterClubsReducer(state, action);
    default:
        return state;
    }
};

export default clubReducer;
