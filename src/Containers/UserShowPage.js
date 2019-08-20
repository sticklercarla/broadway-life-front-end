import React from "react";
import { connect } from "react-redux"
import { VictoryPie } from 'victory';
import pageActions from '../Actions/pageActions'

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
        const stylesArray = ["Contemporary", "Disney", "Doo Wop", "Golden Age", "Jazz Standard", "Jukebox", "Musical Theatre Pop/Rock", "Operetta", "Pop", "Rock", "Sondheim"]
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
                <div className="chart-info">
                    <h1>{songData.length} {songData.length === 1 ? "style" : "styles"} in your Song Book</h1>
                    
                    <div className="charts">
                        {this.props.songs.length ? 
                        <VictoryPie 
                            labelRadius={90} 
                            padding={5}  
                            colorScale={["pink", "orange", "cyan", "green", "tomato", "grey"]} 
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
                <div className="chart-info">
               
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
                                colorScale={["lightblue", "tomato"]} 
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
                <div className="chart-info">
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