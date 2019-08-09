import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import userActions from "../Redux/actions";

const Nav = props => {
  const handleLogout = () => {
    const { logoutUserFromStore } = props;
    logoutUserFromStore();
  };
  return (
    <nav className="nav">
        
        <div className="nav-components">
            <div>{localStorage.token ? <Link to="/" className="link">Home</Link> : <Link to="/signup" className="link">Signup</Link>}</div>
            <div>{localStorage.token ? <Link to="/login" onClick={handleLogout} className="link">Logout</Link> : <Link to="/login" className="link">Login</Link>}</div>
        </div>
        <p className="nav-p">Welcome {props.user ? props.user.name : null }</p>
        <div className="profile-nav">
            {localStorage.token ? (<div>Log New Audition</div> ) : null }
            {localStorage.token ? (<div>View/Edit Auditions</div> ) : null }
            {localStorage.token ? (<div>View Audition Stats</div> ) : null }
            {localStorage.token ? (<div>Audition Song Book</div> ) : null }
        </div>
    </nav>
  );
};

const mapStateToProps = state => ({ user: state });
const mapDispatchToProps = {
  logoutUserFromStore: userActions.logoutUserFromStore
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);