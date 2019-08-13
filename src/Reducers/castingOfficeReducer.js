const defaultState = { all_casting_offices: [] }

export default (state = defaultState, action) => {
    switch (action.type) {
        case "GET_CASTING_OFFICES":
            return {...state, all_casting_offices: action.all_casting_offices};
        default:
            return state;
    }
}; 
