import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import userActions from "../Actions/userActions";
import pageActions from "../Actions/pageActions";

const Nav = props => {

  const handleLogout = () => {
    const { logoutUserFromStore } = props;
    logoutUserFromStore();
    props.updatePage("login")
  };

  const handlePage = (e) => {
    props.updatePage(e.target.name)
  }

  return (
    <nav className="nav">
        
        <div className="nav-components">
            <div>{localStorage.token ? <button name="profile" onClick={handlePage} className="link">Home</button> : <Link to="/signup" className="link">Signup</Link>}</div>
            <div className="title-div">
              <span className="title-header">livin' that</span>
              <h1 className="title">BROADWAY AUDITION LIFE</h1>
              <p className="nav-p">{localStorage.token ? (<div className="Welcome-div"><img className="image" alt="default profile pic" src={props.user.profile_pic}/> <h4 className="user-dsp-info">Welcome {props.user.name} </h4></div>) : <br/> }</p>
            </div>
            <div>{localStorage.token ? <Link to="/login" onClick={handleLogout} className="link">Logout</Link> : <Link to="/login" className="link">Login</Link>}</div>
        </div>
        <div className="profile-nav">
            {localStorage.token ? (<button className="nav-button" name="log_audition" onClick={handlePage}>Log New Audition</button> ) : null }
            {localStorage.token ? (<button className="nav-button" name="view_edit_audition" onClick={handlePage}>View Auditions</button> ) : null }
            {localStorage.token ? (<button className="nav-button" name="song_book" onClick={handlePage}>Audition Song Book</button> ) : null }
            {localStorage.token ? (<button className="nav-button" name="audition_stats" onClick={handlePage}>Backstage.com</button> ) : null }
            {localStorage.token ? (<button className="nav-button" name="edit_user" onClick={handlePage}>Account Details</button> ) : null }
        </div>
    </nav>
  );
};

const mapStateToProps = state => ({ user: state.userReducer });

const mapDispatchToProps = {
  logoutUserFromStore: userActions.logoutUserFromStore,
  updatePage: pageActions.updatePage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);