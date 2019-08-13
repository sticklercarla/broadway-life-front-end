import React from 'react';

class Song extends React.Component {

    onClick = (e) => {
        console.log(e.target)
    }

    render() {
        return (
            
            <div className="song-card" onClick={this.onClick} >
                <h1>{this.props.song.title}</h1>
                <p>Composer: {this.props.song.composer}</p>
                <p>Lyricist: {this.props.song.lyricist}</p>
                <p>Performed By: {this.props.song.performed_by}</p>
                <p>Style: {this.props.song.style}</p>
            </div>
        )
    }
}

export default Song