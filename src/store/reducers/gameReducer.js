import { FILTER_BY } from "../actions/filterActions";

const initState = {
    filter: {
        title: "",
        categories: []
    }
};

const gameReducer = (state = initState, action) => {
    switch (action.type) {
    case "CREATE_GAME":
        // console.log("created game", action.game);
        return state;
    case "CREATE_GAME_ERROR":
        // console.log("create game error", action.err);
        return state;
    case "JOINED_GAME":
        // console.log("joined game", action.game);
        return state;
    case "JOIN_GAME_ERROR":
        // console.log("join game error", action.err);
        return state;
    case "FILTER_GAMES":
        return filterGamesReducer(state, action);
    default:
        return state;
    }
};

const filterGamesReducer = (state, action) => {
    switch (action.filterBy) {
    case FILTER_BY.TITLE:
        return filterByTitle(state, action);
    case FILTER_BY.CATEGORY:
        return filterByCategory(state, action);
    default:
        return state;
    }
};

const filterByTitle = (state, { value }) => {
    return { ...state, filter: { ...state.filter, title: value } };
};

const filterByCategory = (state, { value }) => {
    const newCategories = value;
    return { ...state, filter: { ...state.filter, categories: newCategories } };
};

export default gameReducer;
