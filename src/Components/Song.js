import React from 'react';
import YouTube from 'react-youtube';


class Song extends React.Component {

    state = {
        cardFlipped: false
    }
    
    handleClick = () => {
        this.setState({ cardFlipped: !this.state.cardFlipped })
    }

    onClick = (e) => {
        console.log(e.target)
    }

    _onReady(event) {
        event.target.pauseVideo();
    }

    render() {
        const opts = {
            height: '250',
            width: '300',
            playerVars: { 
              autoplay: 1
            }
        }
        return (
            
            <div className="song-card" >
                {this.state.cardFlipped ? 
                (<div>
                    <YouTube
                        videoId={this.props.song.video_key}
                        opts={opts}
                        onReady={this._onReady}
                    />
                </div>)
                : 
                <div>
                    <h1>{this.props.song.title}</h1>
                    <p>Composer: {this.props.song.composer}</p>
                    <p>Lyricist: {this.props.song.lyricist}</p>
                    <p>Performed By: {this.props.song.performed_by}</p>
                    <p>Style: {this.props.song.style}</p>

                </div>      
                }
                <div className="card-flipper" onClick={this.handleClick}>{this.state.cardFlipped ? "FLIP BACK" : "FLIP TO PLAY"}</div>
            </div>
        )
    }
}

export default Song