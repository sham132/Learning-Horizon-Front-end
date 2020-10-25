import React from 'react';
import {NavLink} from 'react-router-dom';

import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import DEMO from "../../../store/constant";
import {  toast } from 'react-toastify';
class StudentSignup extends React.Component {

    
    constructor(props) {
        super(props);
        this.state = { value: '' }; 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
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
        const data = {name: this.state.name , phone: this.state.phone, email: this.state.email, password: this.state.password , address : this.state.address }
        console.log(data);
          let response = await fetch('http://localhost:3000/student/signup', { method: 'POST', body: JSON.stringify(data), headers: headers });
        console.log("response: "+ JSON.stringify(response))
        let json = await response.json();

       if(json)
       {
        toast.success(json.message)

        
        
    
//            this.props.history.push('/dashboard/default');
       }
        
     
            
        
        
        
    }
    render () {
        return(
            <Aux>
               
               <form onSubmit={this.handleSubmit}>
                <div className="auth-wrapper">
                    <div className="auth-content">
                       
                        <div className="card">
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    <i className="feather icon-user-plus auth-icon"/>
                                </div>
                                <h3 className="mb-4">Student Registration</h3>
                                <div className="input-group mb-3">
                                    <input type="text" name="name"  value={this.state.name || ''} onChange={this.handleChange} className="form-control" placeholder="Username"/>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="Number"  name="phone"  value={this.state.phone || ''} onChange={this.handleChange} className="form-control" placeholder="Phone"/>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="email"  name="email"  value={this.state.email || ''} onChange={this.handleChange} className="form-control" placeholder="Email"/>
                                </div>
                                <div className="input-group mb-4">
                                    <input type="password" name="password" value={this.state.password || ''} onChange={this.handleChange} className="form-control" placeholder="password"/>
                                </div>
                                <div className="input-group mb-4">
                                    <input type="text"  name="address" value={this.state.address || ''} onChange={this.handleChange} className="form-control" placeholder="address"/>
                                </div>
                                <button className="btn btn-primary shadow-2 mb-4">Sign up</button>
                                <p className="mb-0 text-muted">Already have an account? <NavLink to="/auth/login">Login</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
                </form>
            </Aux>
           
        );
    }
}

export default StudentSignup;