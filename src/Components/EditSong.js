import React from 'react';
import { connect } from "react-redux";
import songBookActions from "../Actions/songBookActions";

class EditSong extends React.Component {

    state = {
        title: this.props.song.title,
        composer: this.props.song.composer,
        lyricist: this.props.song.lyricist,
        performed_by: this.props.song.performed_by,
        video_key: this.props.song.video_key,
        style: this.props.song.style,
        user_id: this.props.song.user_id,
        song_id: this.props.song.id
    }
    
    onChange = (e) => {
        if (e.target.name === "video_key"){
            const link =  e.target.value
            const key = link.split("=")[1]
            const keyID = key ? key : link.split(".be/")[1]
            console.log(keyID)
            this.setState({
                [e.target.name]: keyID
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.title) {
            alert("Songs must have a title")
        } else {
            this.props.updateSongToDB(this.state)
            this.props.handleEditClick()
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}> 
                <input type="text" name="title" value={this.state.title} onChange={this.onChange} placeholder="title"/>
                <input type="text" name="composer" value={this.state.composer} onChange={this.onChange} placeholder="composer"/>
                <input type="text" name="lyricist" value={this.state.lyricist} onChange={this.onChange} placeholder="lyricist"/>
                <input type="text" name="performed_by" value={this.state.performed_by} onChange={this.onChange} placeholder="performed by"/>
                <input type="text" name="video_key" value={this.state.video_key} onChange={this.onChange} placeholder="Youtube Link" />
                <select name="style" value={this.state.style} onChange={this.onChange}>
                    <option name="style" value="Contemporary">Contemporary</option>
                    <option name="style" value="Disney">Disney</option>
                    <option name="style" value="Doo Wop">Doo Wop</option>
                    <option name="style" value="Golden Age">Golden Age</option>
                    <option name="style" value="Jazz Standard">Jazz Standard(American SongBook)</option>
                    <option name="style" value="Jukebox">Jukebox</option>
                    <option name="style" value="Musical Theatre Pop/Rock">Musical Theatre Pop/Rock</option>
                    <option name="style" value="Operetta">Operetta</option>
                    <option name="style" value="Pop">Pop</option>
                    <option name="style" value="Rock">Rock</option>
                    <option name="style" value="Sondheim">Sondheim</option>
                </select>
                <input  
                    className="add-song-button"
                    type="submit" 
                    value="Submit" />
            </form>
        )
    }
}

const mapStateToProps = state => ({ user: state.userReducer })

const mapDispatchToProps = {
    updateSongToDB: songBookActions.updateSongToDB,
};


export default connect (
    mapStateToProps,
    mapDispatchToProps
)(EditSong);