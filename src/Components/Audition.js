import React from 'react';
import UpdateAudition from './UpdateAudition'
import Moment from 'react-moment';

class Audition extends React.Component {

    state = {
        cardFlipped: false
    }
    
    handleClick = () => {
        this.setState({ cardFlipped: !this.state.cardFlipped })
    }

    handleDate = () => {
        const time = this.props.audition.time.split("T")
        const date = this.props.audition.date
        const date_time = (date + "T" + time[1])
        const dateToFormat = date_time
        return <Moment format="MM/DD/YYYY">{dateToFormat}</Moment>
    }

    handleTime = () => {
        const time = this.props.audition.time.split("T")
        const date = this.props.audition.date
        const date_time = (date + "T" + time[1])
        const new_date = new Date(date_time);
        return <span>{new_date.getUTCHours()}:{new_date.getUTCMinutes()} {(parseInt(time[1].split(":")[0])) > 12 ? "PM" : "AM"}</span>
    }

    render() {
        return (
            <div className="audition-card" >
                {this.state.cardFlipped ?
                (<div>
                    <UpdateAudition handleClick={this.handleClick} audition={this.props.audition}/>
                </div>)
                :
                (<div className="card-info">
                    <h1>{this.props.audition.musical_title}</h1>
                    <div>
                        <span>Date: {this.handleDate()} </span>
                        <span>Time: {this.handleTime()}</span>
                    </div>
                    <p>Style: {this.props.audition.style}</p>
                    <p>Song Length: {this.props.audition.song_length}</p>
                    <p>{this.props.audition.appointment ? "Appointment" : "Open-Call"}</p>
                    <p>{this.props.audition.sides ? "Sides Given" : "No Sides"}</p>
                </div>)
                }
                <div className="card-flipper" onClick={this.handleClick}>{this.state.cardFlipped ? "VIEW CARD" : "UPDATE ME"}</div>
            </div>
        )
    }
}

export default Audition