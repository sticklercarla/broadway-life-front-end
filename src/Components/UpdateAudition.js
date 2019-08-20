import React from 'react';
import auditionActions from '../Actions/auditionActions'
import { connect } from "react-redux"
import pageActions from "../Actions/pageActions"

class UpdateAudition extends React.Component {

    state = {
        callback: this.props.audition.callback,
        booked: this.props.audition.booked,
        notes: this.props.audition.notes,
        audition_id: this.props.audition.id
    }

    handleCheck = (e) => {
        this.setState({
            [e.target.name]: !this.state[e.target.name]
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.updateAudition(this.state)
        this.props.handleClick()
    }

    handleClick = () => {
        this.props.deleteAudition(this.state.audition_id)
    }

    render() {
        return (
            <div className="radio">
                <form onSubmit={this.handleSubmit}>
                    <div>
                    <label>
                        <input type="checkbox" name="callback" value={this.state.callback} defaultChecked={this.state.callback} onChange={this.handleCheck}/>
                        Received Callback
                    </label>
                    <label>
                        <input type="checkbox" name="booked" value={this.state.booked} defaultChecked={this.state.booked} onChange={this.handleCheck}/>
                        Booked It!
                    </label>
                    </div>
                    <label>Edit Notes: 
                        <input 
                            className="edit-audition-notes"
                            type="text-area" 
                            name="notes" 
                            value={this.state.notes} 
                            onChange={this.handleChange} 
                        />
                    </label>
                    <input className="add-song-button" type="submit" value="Submit Changes" />
                </form>
                <br/>
                <br/>
                <br/>
                <br/>
                <button className="delete_audition" onClick={this.handleClick}>Delete Audition</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({ 
    all_auditions: state.auditionReducer.all_auditions
})

const mapDispatchToProps = {
    updateAudition: auditionActions.updateAuditionToDB,
    updatePage: pageActions.updatePage,
    deleteAudition: auditionActions.deleteAuditionToDB
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateAudition)