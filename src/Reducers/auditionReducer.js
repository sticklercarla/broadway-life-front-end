const defaultState = { all_auditions: [] }

export default (state = defaultState, action) => {
    switch (action.type) {
        case "GET_AUDITIONS":
            return {...state, all_auditions: action.all_auditions};
        case "ADD_AUDITION":
            return {all_auditions: [...state.all_auditions, action.new_audition]};
        case "UPDATE_AUDITION":
            const new_state = state.all_auditions.filter(audition => (audition.id !== action.new_audition.id))
            return {all_auditions: [...new_state, action.new_audition]};
        case "DELETE_AUDITION":
            const state_post_delete = state.all_auditions.filter(audition => (audition.id !== action.deleted_audition_id))
            return {all_auditions: [...state_post_delete]}
        default:
            return state;
    }
};
