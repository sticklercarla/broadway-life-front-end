import React from 'react';
import UpdateAudition from './UpdateAudition'

class Audition extends React.Component {

    state = {
        cardFlipped: false
    }
    
    handleClick = () => {
        this.setState({ cardFlipped: !this.state.cardFlipped })
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