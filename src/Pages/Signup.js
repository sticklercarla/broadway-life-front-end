import React from 'react';
import { connect } from "react-redux";
import userActions from "../Actions/userActions";

class Signup extends React.Component {
    state = {
        name: "",
        username: "",
        password: "",
        password_confirmation: ""
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.password !== this.state.password_confirmation) {
            alert("Passwords don't match")
            this.props.history.push("/signup")
        } else {
            const { createNewUserToDB } = this.props;
            createNewUserToDB(this.state)
            alert("Thanks for creating an account. Please log in!")
            this.props.history.push("/login")
        }
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <h2>Create New Account</h2>
                    <input
                        type="text"
                        onChange={this.handleChange}
                        name="name"
                        value={this.state.name}
                        placeholder="first name"
                    />
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
                    <input 
                        type="password"
                        onChange={this.handleChange}
                        name="password_confirmation"
                        value={this.state.password_confirmation}
                        placeholder="confirm password"
                    />
                    <input type="submit" />
                </form>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = {
    createNewUserToDB: userActions.createNewUserToDB
};

const mapStateToProps = state => ({ user: state });

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(Signup);
