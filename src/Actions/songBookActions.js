
const getSongs = (songs) => ({
        type: "GET_SONGS",
        song_book: songs
})

const addNewSong = (song) => ({
        type: "ADD_SONG",
        song: song
})

const updateSong = song => {
    console.log(song)
    return {
        type: "UPDATE_SONG",
        new_song: song
    }
}

const createNewSongToDB = song => dispatch => {
    fetch('http://localhost:3000/songs', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(song)
    }).then(res => res.json())
    .then(data => {
        dispatch(addNewSong(data))
    })
}

const updateSongToDB = song => dispatch => {
    const id = song.song_id
    console.log(song)
    fetch(`http://localhost:3000/songs/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(song)
    }).then(res => res.json())
    .then(data => {
        dispatch(updateSong(data))
    })
}


export default {
    getSongs,
    createNewSongToDB,
    updateSongToDB
};