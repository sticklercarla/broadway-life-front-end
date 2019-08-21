import React from "react";
import { connect } from "react-redux"
import auditionActions from '../Actions/auditionActions'
import pageActions from '../Actions/pageActions'
import { fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
    fadeIn: {
      animation: 'x 1s',
      animationName: Radium.keyframes(fadeIn, 'fadeIn')
    }
}


class AuditionForm extends React.Component {

    state = {
        user_id: this.props.user.id,
        musical_title: "",
        style: "Contemporary",
        time: "",
        date: "",
        song_id: "",
        song_length: "none",
        casting_office_id: 1,
        audition_location_id: 1,
        appointment: false,
        sides: false,
        sides_performed: false,
        callback: false,
        booked: false,
        notes: "",
        outfit_img: ""
    }

    componentDidMount = () => {
        if (this.props.songs.length) {
            this.setState({
            song_id: this.props.songs[0].id
            })
        }
    }


    handleSubmit = (e) => {
        e.preventDefault()
        if (!this.state.time || !this.state.date) {
            alert("Must include a Time and Date with your Audition")
        } else {
            this.props.createNewAuditionToDB(this.state)
            this.props.updatePage("view_edit_audition")
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleCheck = (e) => {
        this.setState({
            [e.target.name]: !this.state[e.target.name]
        })
    }

    handleClick = () => {
        this.props.updatePage("song_book")
    }

    songs = () => {
        return this.props.songs.map(song => {
            return <option name="song_id" value={song.id}>{song.title}</option>
        })
    }

    casting_offices = () => {
        return this.props.casting_offices.map(office => {
            return <option name="casting_office_id" key={office.id} value={office.id}>{office.name}</option>
        })
    }

    audition_locations = () => {
        return this.props.audition_locations.map(location => {
            return <option name="audition_location_id" key={location.id} value={location.id}>{location.name}</option>
        })
    }

    render(){
        
        return(
            <StyleRoot style={styles.fadeIn}>
            <div>
                {this.songs().length ? 
                <div>
                <h2>Log A New Audition</h2>
                <h4>If You Need To Add A Song To Your Book, Please Do So Before Logging An Audition</h4>
             
                <form className="audition-form"  onSubmit={this.handleSubmit}>
                    <label className="audition-input">Title of Show:  
                        <input 
                            type="text" 
                            name="musical_title" 
                            value={this.state.musical_title} 
                            onChange={this.onChange} 
                            placeholder="title of show"
                            required
                        />
                    </label>
                    <label className="audition-input">Style of Show:  
                        <select  name="style" value={this.state.style} onChange={this.onChange}>
                            <option name="style" value="Contemporary">Contemporary</option>
                            <option name="style" value="Classical MT">Classical MT</option>
                            <option name="style" value="Disney">Disney</option>
                            <option name="style" value="Doo Wop">Doo Wop</option>
                            <option name="style" value="Golden Age">Golden Age</option>
                            <option name="style" value="Jazz Standard">Jazz Standard(American SongBook)</option>
                            <option name="style" value="Jukebox">Jukebox</option>
                            <option name="style" value="MT Pop/Rock">MT Pop/Rock</option>
                            <option name="style" value="Operetta">Operetta</option>
                            <option name="style" value="Pop">Pop</option>
                            <option name="style" value="Rock">Rock</option>
                            <option name="style" value="Sondheim">Sondheim</option>
                        </select>
                    </label>
                    <label className="audition-input">Time of Audition:  
                        <input 
                            required
                            type="time" 
                            name="time" 
                            value={this.state.time} 
                            onChange={this.onChange} 
                        />
                    </label>
                    <label className="audition-input">Date of Audition:  
                        <input 
                            required
                            type="date" 
                            name="date" 
                            value={this.state.date} 
                            onChange={this.onChange} 
                        />
                    </label>
                    <label className="audition-input" >Song Performed from Song Book: 
                        <select name="song_id" value={this.state.song_id} onChange={this.onChange}>
                            { this.songs() }
                        </select>
                    </label>
                    <label className="audition-input">If you sang from your book, what was the cut length you performed? 
                        <select  name="song_length" value={this.state.song_length} onChange={this.onChange}>
                            <option name="song_length" value="none">none</option>
                            <option name="song_length" value="8 Bars">8 Bars</option>
                            <option name="song_length" value="16 Bars">16 Bars</option>
                            <option name="song_length" value="32 Bars">32 Bars</option>
                            <option name="song_length" value="Full Song">Full Song</option>
                        </select>
                    </label>
                    <label className="audition-input">Casting Office:  
                        <select  name="casting_office_id" value={this.state.casting_office_id} onChange={this.onChange}>
                            {this.casting_offices()}
                        </select>
                    </label>
                    <label className="audition-input" >Audition Location: 
                        <select name="audition_location_id" value={this.state.audition_location_id} onChange={this.onChange}>
                            {this.audition_locations()}
                        </select>
                    </label>
                    <label className="checkbox">
                        <input 
                            type="checkbox" 
                            name="appointment" 
                            value={this.state.appointment} 
                            defaultChecked={this.state.appointment} 
                            onChange={this.handleCheck} 
                        />
                        Was this an Appointment?
                    </label>
                    <label className="checkbox">
                        <input 
                            type="checkbox" 
                            name="sides" 
                            value={this.state.sides} 
                            defaultChecked={this.state.sides} 
                            onChange={this.handleCheck} 
                        />
                        Were you given sides? 
                    </label>
                    <label className="checkbox"> 
                        <input 
                            
                            type="checkbox" 
                            name="sides_performed" 
                            value={this.state.sides_performed} 
                            defaultChecked={this.state.sides_performed} 
                            onChange={this.handleCheck} 
                        />
                        Did you perform those sides?
                    </label>
                    <label  className="checkbox"  >
                        <input 
                           
                            type="checkbox" 
                            name="callback" 
                            value={this.state.callback} 
                            defaultChecked={this.state.callback} 
                            onChange={this.handleCheck} 
                        />
                        Did you get a callback? 
                    </label>
                    <label  className="checkbox">
                        <input 
                           
                            type="checkbox" 
                            name="booked" 
                            value={this.state.booked} 
                            defaultChecked={this.state.booked} 
                            onChange={this.handleCheck} 
                        />
                        Did you book it? 
                    </label>
                    <label className="audition-input">Notes: 
                        <input 
                            
                            type="text-area" 
                            name="notes" 
                            value={this.state.notes} 
                            onChange={this.onChange} 
                        />
                    </label>
                    <input 
                        id="audition-button"
                        type="submit" 
                        value="Submit" 
                    />
                </form>
                </div>
                :
                <div className="default-border">
                    <h1 className="rss-title">You Cannot Create An Audition Until You Add Songs Into Your Song Book</h1>
                    <h2>Once a song has been added to your book it will show up as an option to add when you log a new audition</h2>
                    <button className="add-song-button" onClick={this.handleClick}>Add Song</button>
                </div>
                }
                

            </div>
            </StyleRoot>
        )
    }
}

const mapStateToProps = state => ({
    songs: state.songBookReducer.song_book,
    casting_offices: state.castingOfficeReducer.all_casting_offices,
    audition_locations: state.auditionLocationReducer.all_audition_locations,
    user: state.userReducer
})

const mapDispatchToProps = {
    createNewAuditionToDB: auditionActions.createNewAuditionToDB,
    updatePage: pageActions.updatePage
};

export default connect(mapStateToProps, mapDispatchToProps)(AuditionForm)