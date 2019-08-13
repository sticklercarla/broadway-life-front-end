const defaultState = { all_audition_locations: [] }

export default (state = defaultState, action) => {
    switch (action.type) {
        case "GET_AUDITION_LOCATIONS":
            return {...state, all_audition_locations: action.all_audition_locations};
        default:
            return state;
    }
};
