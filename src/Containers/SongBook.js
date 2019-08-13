import React from "react";
import Song from "../Components/Song"
import SongForm from  "../Components/SongForm"
import { connect } from "react-redux"

class SongBook extends React.Component {

    songs = () => {
        return this.props.song_book.map( songObj => <Song key={songObj.id} song={songObj} />)
    }

    render(){
        return(
            <div>
                <div>
                    <h2>Add Song To Your Book</h2>
                    <SongForm />
                </div>
                <div className="Song-Container">
                    {this.songs()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ song_book: state.songBookReducer.song_book})


export default connect(
    mapStateToProps,
    null
  )(SongBook);