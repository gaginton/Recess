export const FILTER_BY = {
    TITLE: "title",
    CATEGORY: "category",
    DATE: "date"
};

export const createFilterAction = (filterBy, value) => {
    return {
        type: "FILTER_GAMES",
        filterBy,
        value
    };
};

