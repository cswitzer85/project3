import React, { Component } from "react"
import { Redirect, Link } from "react-router-dom"
import axios from "axios"

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            errors: {}
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChnage = this.handleChange.bind(this)
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleSubmit(event) {
        event.preventDefault()
        console.log("handleSubmit")

        axios.post ("/api/login", {
            email: this.state.email,
            password: this.state.password
        })
            .then(response => {
                console.log("login response: ")
                console.log(response)
                if (response.status === 200) {
                    this.setState({
                        redirectTo: "/"
                    })
                }
            }).catch(error => {
                console.log("login error: ")
                console.log(error);

            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form>
                            <h1 className="h3 mb-3 font-weight-normal">Please Sign In</h1>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-lg btn-primary btn-block" 
                                onClick={this.handleSubmit} >
                            Sign In
                            </button>
                        </form>
                    </div>
                </div>
                <div className="row justify-content-center mt-2">
                    <p className="text-center">Don't have an account? <Link to="/SignupForm">Sign up here!</Link></p>
                </div>
            </div>
        )
    }
  }
}

export default LoginForm