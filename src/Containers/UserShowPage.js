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

    render(){
        const booked = this.bookings().length
        const notBooked = this.props.auditions.length - booked
        const calledBack = this.callBacks().length
        const notCalledBack = this.props.auditions.length - calledBack

        return(
            <div className="home-page">
                <div className="chart-info">
                    <h1>You have been on {this.props.auditions.length} {this.props.auditions.length === 1 ? "Audition" : "Auditions"}</h1>
                    <h1>You have {this.props.songs.length} {this.props.songs.length === 1 ? "Song" : "Songs"} in your Audition Song Book</h1>
                </div>
                <div className="chart-info">
                    <h1>You've had {this.callBacks().length} {this.callBacks().length === 1 ? "callback" : "callbacks"} </h1>
                    <div className="charts">
                        <VictoryPie 
                            labelRadius={90} 
                            padding={5}  
                            colorScale={["tomato", "orange"]} 
                            data={[ 
                            {x: "Called Back", y: calledBack},
                            {x: "Other", y: notCalledBack}
                            ]} 
                        />
                    </div>
                </div>
                <div className="chart-info">
                    <h1>You've booked {this.bookings().length} {this.bookings().length === 1 ? "audition" : "auditions"}</h1>
                    <div className="charts">
                        <VictoryPie 
                            labelRadius={90} 
                            padding={5} 
                            colorScale={["gold", "cyan"]} 
                            data={[ 
                            {x: "Booked", y: booked},
                            {x: "Other", y: notBooked}
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