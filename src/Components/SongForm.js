import React from 'react';

import { connect } from "react-redux";
import songBookActions from "../Actions/songBookActions";

class SongForm extends React.Component {

    state = {
        title: "",
        composer: "",
        lyricist: "",
        performed_by: "",
        video_key: "",
        style: "Contemporary",
        user_id: this.props.user.id
    }
    
    onChange = (e) => {
        if (e.target.name === "video_key"){
            const link =  e.target.value
            const key = link.split("=")[1]
            this.setState({
                [e.target.name]: key
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createNewSongToDB(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="song-form"> 
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
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

const mapStateToProps = state => ({ user: state.userReducer })

const mapDispatchToProps = {
    createNewSongToDB: songBookActions.createNewSongToDB,
};


export default connect (
    mapStateToProps,
    mapDispatchToProps
)(SongForm);