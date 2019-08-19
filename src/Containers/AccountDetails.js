import React from "react";
import EditUser from '../Components/EditUser'
import userActions from "../Actions/userActions"
import pageActions from "../Actions/pageActions"
import { connect } from "react-redux"


class AccountDetails extends React.Component {

    handleClick = (e) => {
        this.props.deleteUser(this.props.user.id)
        this.props.updatePage("login")
    }

    render(){
        return(
            <div className="update-user-info">
                <EditUser />
                <br></br>
                <p>Delete Account and All Corresponding Data?</p>
                <button onClick={this.handleClick} className="delete-user-button">Yes, I want to delete my account forever!</button>
            </div>
        )
    }
}


const mapStateToProps = state => ({ user: state.userReducer });

const mapDispatchToProps = {
  logoutUserFromStore: userActions.logoutUserFromStore,
  deleteUser: userActions.deleteUserFromDB,
  updatePage: pageActions.updatePage
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AccountDetails);