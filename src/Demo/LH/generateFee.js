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

class generateFee extends Component {
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
        let getAllSubjects;
        let getAllStudents;
        let headers =
        {
            "Content-Type": "application/json",
       
        }
        let getAllSubjects_ = await fetch(`http://localhost:3000/tutor/exploreTutor`, { method: 'GET', headers: headers });
        getAllSubjects = await getAllSubjects_.json();
        this.setState({
            data: getAllSubjects
        });



        let getAll = await fetch(`http://localhost:3000/student/list`, { method: 'GET', headers: headers });
        getAllStudents = await getAll.json();
        this.setState({
            data1: getAllStudents
        });
    }
 
    
    handleSubmit = async event => {
        event.preventDefault();
        console.log("date   : " )
        let headers =
        {
            "Content-Type": "application/json",
           
        }
      
        
        const data = { subject: this.state.subject ,student: this.state.student , date : new Date().toISOString().slice(0,10) }
          let response = await fetch('http://localhost:3000/Questions/generateFee', { method: 'POST', body: JSON.stringify(data), headers: headers });
        console.log("response: "+ JSON.stringify(response))
        let json = await response.json();

        console.log("response: "+ JSON.stringify(json))
       if(json.error)
       {
        toast.error(json)

        
        
    
//            this.props.history.push('/dashboard/default');
       }
       else
       {
        toast.success("Fee Generated Successfully!!!")

        this.setState({
       
      
            

             
        })
     
            
        
    }
        
    }


    render() {
       
        console.log( this.state.data)
        const campaings = this.state.data
        const campaing2 = this.state.data1
       
        let options;
    
        options = campaings.map((data) =>
        
            <option
                key={data.expertise}
                value={data.expertise}
            >
                {data.expertise}
            </option>
        );
       

        let optionss;
    
        optionss = campaing2.map((data) =>
        
            <option
                key={data.name}
                value={data.name}
            >
                {data.name}
            </option>
        );


        return (

            
            <form onSubmit={this.handleSubmit}>
          
                
                   
               
                        <div className="card-body">
                           
                            <h3 className="mb-">Generate Student Vou</h3><br></br>

                            <div className="input-group mb-3">
                            <select   required name="subject"   onChange={this.handleChange}  className="form-control"  required>
                        <option>Please Select Subject</option>
                        {options}
                    </select> </div>
            
                    <div className="input-group mb-3">
                            <select   required name="student"   onChange={this.handleChange}  className="form-control"  required>
                        <option>Please Seleect Student</option>
                        {optionss}
                    </select> </div>

                    <div className="input-group mb-3">
                                    <input type="text"  name="phone"  value={"Current Date : " +new Date().toISOString().slice(0,10)} onChange={this.handleChange} className="form-control" placeholder="Phone"/>
                                </div>

                   <br></br>
                    
                            
                            <button className="btn btn-primary shadow-2 mb-4">Generate Student Fee</button>
                            
                        </div>
                    
               
            
            </form>
        );
    }
}

export default generateFee;