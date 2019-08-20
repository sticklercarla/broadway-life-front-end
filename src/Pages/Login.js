import React, { Component } from "react";
import { connect } from "react-redux";
import userActions from "../Actions/userActions";
import pageActions from "../Actions/pageActions";
import { slideInUp, slideInLeft, slideInRight } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
  slideInUp: {
    animation: 'x 1s',
    animationName: Radium.keyframes(slideInUp, 'slideInUp')
  },
  slideInLeft: {
    animation: 'x 1.3s',
    animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
  },
  slideInRight: {
    animation: 'x 1.6s',
    animationName: Radium.keyframes(slideInRight, 'slideInRight')
  }
}

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    const { loginUser } = this.props;
    loginUser(this.state).then(()=> {
      if (localStorage.token) {
        this.props.history.push("/profile")
        this.props.updatePage("profile")
      }
    })
  };

  render() {
    return (
      <React.Fragment>
        <StyleRoot style={styles.slideInLeft}>
        <form onSubmit={this.handleSubmit} className="login-form">
          <h2>Login</h2>
          <input
            className="login-input"
            type="text"
            onChange={this.handleChange}
            name="username"
            value={this.state.username}
            placeholder="username"
          />
          <input
            className="login-input"
            type="password"
            onChange={this.handleChange}
            name="password"
            value={this.state.password}
            placeholder="password"
          />
          <input 
            className="login-button"
            type="submit" 
          />
        </form>
        </StyleRoot>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = {
  loginUser: userActions.loginUserToDB,
  updatePage: pageActions.updatePage
};

const mapStateToProps = state => ({ user: state });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);