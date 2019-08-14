import React, { Component } from "react";
import { connect } from "react-redux";
import userActions from "../Actions/userActions";
import pageActions from "../Actions/pageActions";

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
        <form onSubmit={this.handleSubmit}>
          <h2>Login</h2>
          <input
            type="text"
            onChange={this.handleChange}
            name="username"
            value={this.state.username}
            placeholder="username"
          />
          <input
            type="password"
            onChange={this.handleChange}
            name="password"
            value={this.state.password}
            placeholder="password"
          />
          <input type="submit" />
        </form>
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