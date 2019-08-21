const defaultState = { song_book: [] }

export default (state = defaultState, action) => {
    switch (action.type) {
        case "GET_SONGS":
            return {...state, song_book: action.song_book};
        case "ADD_SONG":
            return {song_book: [...state.song_book, action.song]};
        case "UPDATE_SONG":
            const new_state = state.song_book.filter(song => (song.id !== action.new_song.id))
            return {song_book: [...new_state, action.new_song]};
        case "CLEAR_SONGS":
            return defaultState;
        default:
            return state;
    }
};
