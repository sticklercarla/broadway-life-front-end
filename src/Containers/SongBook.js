import React from "react";
import Song from "../Components/Song"
import SongForm from  "../Components/SongForm"
import { connect } from "react-redux"

class SongBook extends React.Component {

    state = {
        filterTerm: "All"
    }

    sort_songs = () => {
        return this.props.song_book.sort( (a, b) => {
            return a.title[0].toUpperCase().localeCompare(b.title[0].toUpperCase());
        })
    }

    songs = () => {
        return this.filter_songs().map( songObj => <Song key={songObj.id} song={songObj} />)
    }

    filter_songs = () => {
        if (this.state.filterTerm !== "All"){
            return this.sort_songs().filter(song => song.style === this.state.filterTerm)
        }
        return this.sort_songs()
    }

    handleChange = (e) => {
        this.setState({
            filterTerm: e.target.value
        })
    }

    render(){
        return(
            <div>
                <div>
                    <h2>Add Song To Your Book</h2>
                    <SongForm />
                </div>
                <div>
                    <h2>Filter Songs By Category</h2>
                    <form>  
                        <select name="filterTerm" value={this.state.filterTerm} onChange={this.handleChange}>
                            <option name="filterTerm" value="All">All Songs</option>
                            <option name="filterTerm" value="Contemporary">Contemporary</option>
                            <option name="filterTerm" value="Disney">Disney</option>
                            <option name="filterTerm" value="Doo Wop">Doo Wop</option>
                            <option name="filterTerm" value="Golden Age">Golden Age</option>
                            <option name="filterTerm" value="Jazz Standard">Jazz Standard(American SongBook)</option>
                            <option name="filterTerm" value="Jukebox">Jukebox</option>
                            <option name="filterTerm" value="Musical Theatre Pop/Rock">Musical Theatre Pop/Rock</option>
                            <option name="filterTerm" value="Operetta">Operetta</option>
                            <option name="filterTerm" value="Pop">Pop</option>
                            <option name="filterTerm" value="Rock">Rock</option>
                            <option name="filterTerm" value="Sondheim">Sondheim</option>
                        </select>
                    </form>
                </div >
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