import React from "react";
import { connect } from "react-redux"
import { VictoryPie } from 'victory';
import pageActions from '../Actions/pageActions'
import { slideInUp, slideInLeft, slideInRight } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
 
const styles = {
  slideInUp: {
    animationDelay: 'x 1s',
    animation: 'x 1s',
    animationName: Radium.keyframes(slideInUp, 'slideInUp')
  },
  slideInLeft: {
    animation: 'x 1.3s',
    animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
  },
  slideInRight: {
    animation: 'x 1.6s',
    animationName: Radium.keyframes(slideInRight, 'slideInRight')
  }
}


class UserShowPage extends React.Component {

    

    callBacks = () => {
        return this.props.auditions.filter(song => song.callback === true)
    }

    bookings = () =>{
        return this.props.auditions.filter(song => song.booked === true)
    }

    
    styles = style => {
        let songs = this.props.songs.filter(song => song.style === style)
        let count = songs.length
        let title = songs.map(song => song.style)
        let obj = {x: title[0], y: count}
        if (obj.x !== undefined) {
            return obj
        }
    }

    array = (stylesArray) => {
        return stylesArray.map(style => this.styles(style))
    }

    songDataObjects = () => {
        const stylesArray = ["Contemporary", "Classical MT", "Disney", "Doo Wop", "Golden Age", "Jazz Standard", "Jukebox", "MT Pop/Rock", "Operetta", "Pop", "Rock", "Sondheim"]
        const objArray = this.array(stylesArray)
        const newObjArray = objArray.filter(obj => obj !== undefined)
        return newObjArray
    }

    handleClick = () => {
        this.props.updatePage("song_book")
    }

    render(){
        const booked = this.bookings().length
        const notBooked = this.props.auditions.length - booked
        const calledBack = this.callBacks().length
        const notCalledBack = this.props.auditions.length - calledBack
        const songData = this.songDataObjects()
        console.log(songData.length)
        return(
            <div className="home-page">
                <StyleRoot>
                <div className="chart-info" style={styles.slideInLeft}>
                    <h1>{songData.length} {songData.length === 1 ? "style" : "styles"} in your Song Book</h1>
                    
                    <div className="charts">
                        {this.props.songs.length ? 
                    
                        <VictoryPie 
                            labelRadius={90} 
                            padding={5}  
                            colorScale={["tomato", "lightblue", "cyan", "lightgreen", "pink", "gold", "orange", "lightyellow", "lightgrey", "blue", "purple", "grey"]} 
                            data={songData} 
                        />
                     
                        :
                        <div>
                            <h3>You have no songs in your song book, you should add some!</h3>
                            <button className="add-song-button" onClick={this.handleClick}>Add Songs</button>
                        </div>
                    }
                        
                    </div>
                </div>
                </StyleRoot>
                <StyleRoot>
                <div className="chart-info" style={styles.slideInUp}>
               
                    <h1>You've had {this.callBacks().length} {this.callBacks().length === 1 ? "callback" : "callbacks"} </h1>
                    <div className="charts">
                        {this.callBacks().length ? (
                            this.callBacks().length === this.props.auditions.length ?
                            <VictoryPie 
                                labelRadius={90} 
                                padding={5}  
                                colorScale={["lightgreen", "orange"]} 
                                data={[ 
                                {x: "Called Back", y: calledBack}
                              
                                ]} 
                            />
                            :
                            <VictoryPie 
                                labelRadius={90} 
                                padding={5}  
                                colorScale={["lightgreen", "orange"]} 
                                data={[ 
                                {x: "Called Back", y: calledBack},
                                {x: "Other Auditions", y: notCalledBack}
                                ]} 
                            />
                        )
                        :
                        <h3>That's ok, you'll get there soon!</h3>
                    }
                    </div>
                </div>
                </StyleRoot>
                <StyleRoot>
                <div className="chart-info" style={styles.slideInRight}>
                    <h1>You've booked {this.bookings().length} {this.bookings().length === 1 ? "audition" : "auditions"}</h1>
                    <div className="charts">
                        {this.bookings().length ? (
                            this.bookings().length === this.props.auditions.length ?
                            <VictoryPie 
                                labelRadius={90} 
                                padding={5} 
                                colorScale={["gold", "cyan"]} 
                                data={[ 
                                {x: "Booked", y: booked}
                                ]} 
                            /> 
                            :
                            <VictoryPie 
                                labelRadius={90} 
                                padding={5} 
                                colorScale={["gold", "cyan"]} 
                                data={[ 
                                {x: "Booked", y: booked},
                                {x: "Other Auditions", y: notBooked}
                                ]} 
                            />    
                        )
                        :
                        <h3>They say for every 100 auditions, you might book one, so keep it up!</h3>
                    }
                    </div>
                </div>
                </StyleRoot>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auditions: state.auditionReducer.all_auditions,
    songs: state.songBookReducer.song_book
})

const mapDispatchToProps = {
    updatePage: pageActions.updatePage,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserShowPage)