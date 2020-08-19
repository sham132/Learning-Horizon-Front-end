import React from 'react';
import {NavLink} from 'react-router-dom';

import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import DEMO from "../../../store/constant";

class SignupPage extends React.Component {
    render () {
        return(
            <Aux>
               
                <div className="auth-wrapper">
                    <div className="auth-content">
                       
                        <div className="card">
                            <div className="card-body text-center">
                                <div className="mb-6">
                                    <i className="feather icon-user-plus auth-icon"/>
                                </div>
                                <h3 className="mb-4">Sign up Menu</h3>
                                
                                <NavLink to="/auth/StudentSignup"><button type="submit" variant="outline-success" className="btn btn-primary btn-lg shadow-8 mb-8 ">Student SignUp</button></NavLink> 
                                      
                                <NavLink to="/auth/TutorSignup">  <button type="submit" variant="outline-success" className="btn btn-primary btn-lg shadow-8 mb-8 ">Tutor SignUp</button></NavLink> 
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default SignupPage;