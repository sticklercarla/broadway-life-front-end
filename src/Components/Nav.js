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
        <p className="nav-p">Welcome {props.user ? props.user.name : null }</p>
        <div className="nav-components">
            {localStorage.token ? <Link to="/" className="link">Home</Link> : null}
            {localStorage.token ? null : <Link to="/signup" className="link">Signup</Link>}
            {localStorage.token ? null : <Link to="/login" className="link">Login</Link>}
            {localStorage.token ? <Link to="/login" onClick={handleLogout} className="link">Logout</Link> : null}
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