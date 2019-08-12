const defaultState = { page: "profile" }

export default (state = defaultState, action) => {
    switch (action.type) {
        case "CHANGE_PAGE":
            return {...state, page: action.page};
        default:
            return state;
    }
  };
