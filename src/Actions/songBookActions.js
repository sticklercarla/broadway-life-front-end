
const getSongs = (songs) => {
    console.log(songs)
    return {
        type: "GET_SONGS",
        song_book: songs
    }
}

const addNewSong = (song) => {
    console.log(song)
    return {
        type: "ADD_SONG",
        song: song
    }
}

const createNewSongToDB = song => dispatch => {
    console.log(song)
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



export default {
    getSongs,
    createNewSongToDB
};