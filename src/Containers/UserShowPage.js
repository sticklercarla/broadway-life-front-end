import React from "react";
import { connect } from "react-redux"

class UserShowPage extends React.Component {

    callBacks = () => {
        return this.props.auditions.filter(song => song.callback === true)
    }

    bookings = () =>{
        return this.props.auditions.filter(song => song.booked === true)
    }

    render(){
        return(
            <div>
                <h1>You have been on {this.props.auditions.length} {this.props.auditions.length === 1 ? "Audition" : "Auditions"}</h1>
                <h1>You have {this.props.songs.length} {this.props.songs.length === 1 ? "Song" : "Songs"} in your Audition Song Book</h1>
                <h1>You have been called back {this.callBacks().length} {this.callBacks().length === 1 ? "time" : "times"}</h1>
                <h1>You've booked {this.bookings().length} {this.bookings().length === 1 ? "audition" : "auditions"}</h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auditions: state.auditionReducer.all_auditions,
    songs: state.songBookReducer.song_book
})

export default connect(mapStateToProps, null)(UserShowPage)