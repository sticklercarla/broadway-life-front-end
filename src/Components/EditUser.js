import React from "react";
import userActions from "../Actions/userActions";
import pageActions from "../Actions/pageActions"
import { connect } from "react-redux"

class EditUser extends React.Component {

    state = {
        profile_pic: "",
        user_id: this.props.user.id
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        if (this.state.profile_pic) {
            this.props.updateUser(this.state)
            this.props.updatePage("profile")
        } else {
            alert("Must Submit An Image URL")
        }
    }

    render(){
        return(
            <div>
                <h3>Change Your Profile Pic</h3>
                <form onSubmit={this.onSubmit} className="update-user-form">
                    <input 
                        className="user-input"
                        type="text" 
                        name="profile_pic" 
                        value={this.state.profile_pic} 
                        placeholder="image url" 
                        onChange={this.handleChange} />
                    <input 
                        id="update-user-button"
                        type="submit" 
                        value="Submit" 
                    />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({ user: state.userReducer });

const mapDispatchToProps = {
  updateUser: userActions.updateUserToDB,
  updatePage: pageActions.updatePage
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditUser);