"use strict"
import React from 'react';
import { Base64 } from 'js-base64';
import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tilt from 'react-tilt'

import { NavLink } from 'react-router-dom';
const AppId = 3;
const AllowAllApp = 111;

class AdminLogin extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: '' };
        localStorage.setItem('appID', AppId);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }


    handleSubmit = async event => {
        event.preventDefault();

        let headers =
        {
            "Content-Type": "application/json"
        }
        const data = { email: this.state.email, password: this.state.password }
        console.log(data);
        let response = await fetch('http://localhost:3000/Admin/login', { method: 'POST', body: JSON.stringify(data), headers: headers });
        console.log("response: " + response)
        let json = await response.json();
        console.log("token : " + json.access_token)
        console.log("email : " + json.email)
        if (json.accountType =="Admin") {
            toast.success("Wellcome to the Tutor Managment System!!")

            localStorage.setItem('token', json.token);
            localStorage.setItem('email', json.email);
            localStorage.setItem('name', json.name);
            localStorage.setItem('accountType', json.accountType);
            



            this.props.history.push('/LH/AddQuestions');
        }

        else {
            toast.error("Invalid Email or Password. Please try Again!!")
        }
    }
    render() {
        return (
            <Aux>
                <form onSubmit={this.handleSubmit}>
                    <div className="auth-wrapper" style={{ height: 80 }} >
                        <div className="auth-content">
                        <Breadcrumb />
                    
                    <div className="auth-bg">
                        <span className="r" />
                        <span className="r s" />
                        <span className="r s" />
                        <span className="r" />
                    </div>
                            <div className="card">
                                <div className="card-body text-center">
                                    <div className="mb-4">
                                        <i className="feather icon-unlock auth-icon" />
                                    </div>
                                    <h3 className="mb-4">Admin Login</h3>
                                    <div className="input-group mb-3">
                                        <input required type="email" name="email" value={this.state.email || ''} onChange={this.handleChange} className="form-control" placeholder="Email" />
                                    </div>
                                    <div className="input-group mb-4">
                                        <input required type="password" name="password" value={this.state.password || ''} onChange={this.handleChange} className="form-control" placeholder="password" />
                                    </div>
                                    <div className="form-group text-left">
                                        <div className="checkbox checkbox-fill d-inline">
                                            <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-a1" />
                                            <label htmlFor="checkbox-fill-a1" className="cr"> Save credentials</label>
                                        </div>
                                    </div>
                                    <button type="submit" variant="outline-success" className="btn btn-primary btn-lg shadow-8 mb-8 ">Login</button>

                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </Aux>
        );
    }
}

export default AdminLogin;