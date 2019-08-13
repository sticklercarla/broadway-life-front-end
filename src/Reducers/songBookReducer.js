const defaultState = { song_book: [] }

export default (state = defaultState, action) => {
    switch (action.type) {
        case "GET_SONGS":
            return {...state, song_book: action.song_book};
        case "ADD_SONG":
            return {song_book: [...state.song_book, action.song]};
        default:
            return state;
    }
};
