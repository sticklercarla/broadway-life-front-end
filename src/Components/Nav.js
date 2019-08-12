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
            <div>{localStorage.token ? <Link to="/" className="link">Home</Link> : <Link to="/signup" className="link">Signup</Link>}</div>
            <div>{localStorage.token ? <Link to="/login" onClick={handleLogout} className="link">Logout</Link> : <Link to="/login" className="link">Login</Link>}</div>
        </div>
        <p className="nav-p">Welcome {props.user ? props.user.name : null }</p>
        <div className="profile-nav">
            {localStorage.token ? (<button name="log_audition" onClick={handlePage}>Log New Audition</button  > ) : null }
            {localStorage.token ? (<button name="view_edit_audition" onClick={handlePage}>View/Edit Auditions</button  > ) : null }
            {localStorage.token ? (<button name="audition_stats" onClick={handlePage}>View Audition Stats</button  > ) : null }
            {localStorage.token ? (<button name="song_book" onClick={handlePage}>Audition Song Book</button  > ) : null }
        </div>
    </nav>
  );
};

const mapStateToProps = state => ({ user: state });

const mapDispatchToProps = {
  logoutUserFromStore: userActions.logoutUserFromStore,
  updatePage: pageActions.updatePage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);