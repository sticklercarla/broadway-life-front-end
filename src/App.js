import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import userActions from "./Redux/actions";
import Routes from "./Routes";
import Nav from "./Components/Nav";
import './App.css';

class App extends React.Component {

  componentDidMount() {
    if (localStorage.token) {
      const { userProfileFromDB } = this.props;
      userProfileFromDB();
    }
  }

  render(){
    return (
      <Router>
        <div className="body">
          <header className="header">
            <Nav />
          </header>
          <div className="main">
            <Routes />
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({ user: state });

const mapDispatchToProps = {
  userProfileFromDB: userActions.profileUserFromDB
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
