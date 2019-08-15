import React from 'react';
import UpdateAudition from './UpdateAudition'
import Moment from 'react-moment';
import 'moment-timezone';
import { connect } from "react-redux"

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
        return <Moment format="LL">{dateToFormat}</Moment>
    }

    handleTime = () => {
        const time = this.props.audition.time.split("T")
        const date = this.props.audition.date
        const date_time = (date + "T" + time[1])
        const new_date = new Date(date_time);
        return <span>{new_date.getUTCHours() < 12 ? new_date.getUTCHours() : new_date.getUTCHours() - 12 }:{new_date.getUTCMinutes()} {(parseInt(time[1].split(":")[0])) > 12 ? "PM" : "AM"}</span>
    }

    song = () => {
        const songObj = this.props.songs.find(song => song.id === this.props.audition.song_id)
        if (songObj) {
            return songObj.title
        }
    }

    auditionLocation = () => {
        const locationObj = this.props.audition_locations.find(location => location.id === this.props.audition.audition_location_id)
        if (locationObj) {
            return locationObj.name
        }
    }

    castingOffice = () => {
        const officeObj = this.props.casting_offices.find(office => office.id === this.props.audition.casting_office_id)
        if (officeObj) {
            return officeObj.name
        }
    }

    render() {
        let className = (this.props.audition.booked === true ? "booked-it" : "card-info")
        return (
            <div className="audition-card" >
                {this.state.cardFlipped ?
                (<div>
                    <UpdateAudition handleClick={this.handleClick} audition={this.props.audition}/>
                </div>)
                :
                (<div className={className}>
                    <h1>{this.props.audition.musical_title}</h1>
                    <span>{this.props.audition.appointment ? "Appointment" : "Open-Call"}</span><br/>
                    <span>Style: {this.props.audition.style}</span>
                    <div>
                        <span>{this.handleDate()} </span>
                        <span>@ {this.handleTime()}</span>
                    </div>
                    <span>Song: {this.song()} </span><br/>
                    <span>Song Length: {this.props.audition.song_length}</span><br />
                    <span>Casting Office: {this.castingOffice()}</span><br/>
                    <span>Location: {this.auditionLocation()}</span><br/>
                    <span>{this.props.audition.sides ? "Sides Given" : "No Sides"}</span><br/>
                    {this.props.audition.sides === true ? (this.props.audition.sides_performed === true ? <span>Sides Performed</span> : <span>Sides Not Performed</span> ) : null }
                    
                </div>)
                }
                <div className="card-flipper" onClick={this.handleClick}>{this.state.cardFlipped ? "VIEW CARD" : "UPDATE ME"}</div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ 
    songs: state.songBookReducer.song_book,
    audition_locations: state.auditionLocationReducer.all_audition_locations,
    casting_offices: state.castingOfficeReducer.all_casting_offices
})

export default connect(
    mapStateToProps,
    null
  )(Audition);