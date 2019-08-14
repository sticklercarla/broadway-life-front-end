import React from "react";
import userActions from "../Actions/userActions";
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
        this.props.updateUser(this.state)
    }

    render(){
        return(
            <div>
                <p>Change Your Profile Pic</p>
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="profile_pic" value={this.state.profile_pic} placeholder="image url" onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({ user: state.userReducer });

const mapDispatchToProps = {
  updateUser: userActions.updateUserToDB
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditUser);