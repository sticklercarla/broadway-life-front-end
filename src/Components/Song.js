import React from 'react';
import YouTube from 'react-youtube';
import EditSong from './EditSong'
import { fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
    fadeIn: {
      animation: 'x 1s',
      animationName: Radium.keyframes(fadeIn, 'fadeIn')
    }
}

class Song extends React.Component {

    state = {
        cardFlipped: false,
        cardEdit: false
    }
    
   
    handleFlipClick = () => {
        this.setState({ cardFlipped: !this.state.cardFlipped })
    }

    handleEditClick = () => {
        this.setState({ cardEdit: !this.state.cardEdit })
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
            <StyleRoot style={styles.fadeIn}>
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
                    {this.state.cardEdit ? 

                        <EditSong song={this.props.song} handleEditClick={this.handleEditClick}/>
                    :
                        <div>
                            <h1>{this.props.song.title}</h1>
                            <p>Composer: {this.props.song.composer}</p>
                            <p>Lyricist: {this.props.song.lyricist}</p>
                            <p>Performed By: {this.props.song.performed_by}</p>
                            <p>Style: {this.props.song.style}</p>
                        </div>
                   
                    }
                   
                </div>      
                }
                <div className="song-button-div">
                    {this.state.cardFlipped ? null : <div className="card-flipper" name="cardEdit" onClick={this.handleEditClick}>{this.state.cardEdit ? "VIEW CARD" : "EDIT INFO"}</div> }
                    <div className="card-flipper" name="cardFlipped" onClick={this.handleFlipClick}>{this.state.cardFlipped ? "FLIP BACK" : "FLIP TO PLAY"}</div>
                </div>
            </div>
            </StyleRoot>
        )
    }
}

export default Song