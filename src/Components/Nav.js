import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import userActions from "../Actions/userActions";
import pageActions from "../Actions/pageActions";

const Nav = props => {

  const handleLogout = () => {
    const { logoutUserFromStore } = props;
    logoutUserFromStore();
  };

  const handlePage = (e) => {
    props.updatePage(e.target.name)
  }

  return (
    <nav className="nav">
        
        <div className="nav-components">
            <div>{localStorage.token ? <button name="profile" onClick={handlePage} className="link">Home</button> : <Link to="/signup" className="link">Signup</Link>}</div>
            <div>{localStorage.token ? <Link to="/login" onClick={handleLogout} className="link">Logout</Link> : <Link to="/login" className="link">Login</Link>}</div>
        </div>
        <h5 className="title">livin' that</h5>
        <h1 className="title">BROADWAY AUDITION LIFE</h1>
        <p className="nav-p">Welcome {props.user ? props.user.name : null }</p>
        <div className="profile-nav">
            {localStorage.token ? (<button className="nav-button" name="log_audition" onClick={handlePage}>Log New Audition</button  > ) : null }
            {localStorage.token ? (<button className="nav-button" name="view_edit_audition" onClick={handlePage}>View/Edit Auditions</button  > ) : null }
            {localStorage.token ? (<button className="nav-button" name="audition_stats" onClick={handlePage}>View Audition Stats</button  > ) : null }
            {localStorage.token ? (<button className="nav-button" name="song_book" onClick={handlePage}>Audition Song Book</button  > ) : null }
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