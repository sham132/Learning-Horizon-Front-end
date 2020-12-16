import React, { Component } from 'react';
import { Row, Col, Card, Table ,Pagination} from 'react-bootstrap';
import {  toast } from 'react-toastify';
import DatePicker from "react-datepicker";
import Picker from 'react-month-picker'

import "react-datepicker/dist/react-datepicker.css";
   // The gray background
   
 

   const data_ = [];
   
   const options = {
    selectableRows:false,
    // filterType: 'checkbox',
   }

class SchedualCall extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = { isOpen: false, data: [] , data1 : [] ,  singleValue: {year: 2014, month: 11}};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    

    }


    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }




    async componentDidMount() {


        let header =
        {
          "Content-Type": "application/json",
          "token": localStorage.getItem('token')
        }
        let getTutordata_ = await fetch(`http://localhost:3000/tutor/PassTutors?email=${localStorage.getItem('email')}`, { method: 'GET', headers: header });
       let getTutordata = await getTutordata_.json();
    
       console.log("getTutordata : "+ getTutordata[0].statusActive)
        this.setState({
          tutorStatus: getTutordata[0].statusActive
        });
    
       
    
    
      }
 
      handleSubmit = async event => {
        event.preventDefault();
        console.log("email   : " +  this.state.email)
     
        console.log("link   : " +  this.state.link)
        
       
        let headers =
        {
            "Content-Type": "application/json",
           
        }
      
        
        const data = { email: this.state.email ,link: this.state.link  }

          let response = await fetch('http://localhost:3000/Questions/sendMail', { method: 'POST', body: JSON.stringify(data), headers: headers });
        
       

      
            
        toast.success("Link has been sent successfully to the email !!")

        this.setState({
            link:'',
            email:''
        })
    
        
    }
   


    render() {



        return (
            
         
            <form onSubmit={this.handleSubmit}>
          
          {this.state.tutorStatus == true ?
                <div>   
                      <h2>Video and Chat with Students</h2>
                          
                      <div className="card-body">
                                 
                      <h3>Initiate Call and Share the Link with the Student !!</h3>
      
             
                                <br></br>
                                 
                          <a class="btn btn-danger" target="blank_" href="http://localhost:4000">Initiate Call</a>
                                         
                                     </div>
      
                      </div>
                  : <h2> No Access Available, You need to clear the Test First !!</h2>
                  }

{this.state.tutorStatus == true ?
<div>
                               <div className="input-group mb-3">
                     <input type="email"  name="email"  value={this.state.email} onChange={this.handleChange} className="form-control" placeholder="Please enter the Email"/>
                                </div>
                                <div className="input-group mb-3">
                     <input type="text"  name="link"  value={this.state.link} onChange={this.handleChange} className="form-control" placeholder="Please Paste the Link"/>
                                </div>

                                <button className="btn btn-primary shadow-2 mb-4">Send Link to Student Via Email</button>

                                </div>  : null
                  }
            </form>
        );
    }
}

export default SchedualCall;