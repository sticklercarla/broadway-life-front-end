import React from "react";
import { connect } from "react-redux"
import { VictoryPie, VictoryAnimation, VictoryLabel} from 'victory';

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

    render(){
        const booked = this.bookings().length
        const notBooked = this.props.auditions.length - booked
        const calledBack = this.callBacks().length
        const notCalledBack = this.props.auditions.length - calledBack
        const songData = this.songDataObjects()

        return(
            <div className="home-page">
                {/* <div className="chart-info">
                    <h1>You have been on {this.props.auditions.length} {this.props.auditions.length === 1 ? "Audition" : "Auditions"}</h1>
                    <h3>You have {this.props.songs.length} {this.props.songs.length === 1 ? "Song" : "Songs"} in your Audition Song Book</h3>
                </div> */}
                <div className="chart-info">
                    <h1>Styles in your Song Book</h1>
                    
                    <div className="charts">
                        <VictoryPie 
                            labelRadius={90} 
                            padding={5}  
                            colorScale={["tomato", "orange", "cyan", "green", "pink", "grey"]} 
                            data={songData} 
                        />
                    </div>
                </div>
                <div className="chart-info">
               
                    <h1>You've had {this.callBacks().length} {this.callBacks().length === 1 ? "callback" : "callbacks"} </h1>
                    <div className="charts">
                        <VictoryPie 
                            labelRadius={70} 
                            padding={5}  
                            colorScale={["tomato", "orange"]} 
                            data={[ 
                            {x: "Called Back", y: calledBack},
                            {x: "Other Auditions", y: notCalledBack}
                            ]} 
                        />
                    </div>
                </div>
                <div className="chart-info">
                    <h1>You've booked {this.bookings().length} {this.bookings().length === 1 ? "audition" : "auditions"}</h1>
                    <div className="charts">
                        <VictoryPie 
                            labelRadius={70} 
                            padding={5} 
                            colorScale={["gold", "cyan"]} 
                            data={[ 
                            {x: "Booked", y: booked},
                            {x: "Other Auditions", y: notBooked}
                            ]} 
                        />    
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

export default connect(mapStateToProps, null)(UserShowPage)