import React from 'react';
import auditionActions from '../Actions/auditionActions'
import { connect } from "react-redux"
import pageActions from "../Actions/pageActions"

class UpdateAudition extends React.Component {

    state = {
        callback: this.props.audition.callback,
        booked: this.props.audition.booked,
        audition_id: this.props.audition.id
    }

    handleCheck = (e) => {
        this.setState({
            [e.target.name]: !this.state[e.target.name]
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
                    <label>
                        <input type="checkbox" name="callback" value={this.state.callback} defaultChecked={this.state.callback} onChange={this.handleCheck}/>
                        Received Callback
                    </label>
                    <label>
                        <input type="checkbox" name="booked" value={this.state.booked} defaultChecked={this.state.booked} onChange={this.handleCheck}/>
                        Booked It!
                    </label>
                    <input type="submit" value="Submit Changes" />
                </form>
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