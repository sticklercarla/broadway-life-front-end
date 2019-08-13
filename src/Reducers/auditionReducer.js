const defaultState = { all_auditions: [] }

export default (state = defaultState, action) => {
    switch (action.type) {
        case "GET_AUDITIONS":
            return {...state, all_auditions: action.all_auditions};
        default:
            return state;
    }
};
