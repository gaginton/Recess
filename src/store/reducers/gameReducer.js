const initState = {
  games: [
    { id: "1", title: "Basketball", content: "shirts vs skins" },
    { id: "2", title: "Football", content: "6 vs 6" },
    { id: "3", title: "Tag", content: "League rules" },
    { id: "4", title: "Beer Pong", content: "21 Must have ID" },
    { id: "5", title: "Hide n Seek", content: "One vs All" }
  ]
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
    default:
      return state;
  }
};

export default gameReducer;
