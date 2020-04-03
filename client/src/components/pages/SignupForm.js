import React, { Component } from 'react'
// import { register } from './UserFunctions'
import axios from "axios"

class SignupForm extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            phone_number: '',
            street_address: '',
            zip_code: '',
            city: '',
            password: '',
            errors: {}
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
        // console.log(event.target.value);
    }
    handleSubmit(event) {
        event.preventDefault()
        // console.log(this.target.value);

        axios.post ("/api/signup",  {
            FirstName: this.state.first_name,
            LastName: this.state.last_name,
            email: this.state.email,
            PhoneNumber: this.state.phone_number,
            StreetAddress: this.state.street_address,
            ZipCode: this.state.zip_code,
            City: this.state.city,
            password: this.state.password
        })

            .then(response => {
                console.log(response)
                if (!response.data.errmsg) {
                    console.log("successful signup")
                   window.location.replace("/LoginForm")
                } else {
                    console.log("username already taken")
                }
            }).catch(error => {
                console.log("signup error: ")
                console.log(error)

            })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Register</h1>
                            <div className="form-group">
                                <label htmlFor="name">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="first_name"
                                    placeholder="Enter your first name"
                                    value={this.state.first_name}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="last_name"
                                    placeholder="Enter your last name"
                                    value={this.state.last_name}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone_number">Phone Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="phone_number"
                                    placeholder="Enter your phone number"
                                    value={this.state.phone_number}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="street_address">Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="street_address"
                                    placeholder="Enter your address"
                                    value={this.state.street_address}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="zip_code">Zipcode</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="zip_code"
                                    placeholder="Enter your zipcode"
                                    value={this.state.zip_code}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="City">City</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="city"
                                    placeholder="Enter your city"
                                    value={this.state.city}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Enter your password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-lg btn-primary btn-block"
                                onClick={this.handleSubmit} >
                                Register!
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignupForm
