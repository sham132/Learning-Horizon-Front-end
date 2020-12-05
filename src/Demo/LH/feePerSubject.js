import React, { Component } from 'react';
import { Row, Col, Card, Table ,Pagination} from 'react-bootstrap';
import {  toast } from 'react-toastify';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
   // The gray background
   
 

   const data_ = [];
   
   const options = {
    selectableRows:false,
    // filterType: 'checkbox',
   }

class generateFee extends Component {
    constructor(props) {
        super(props);

        this.state = { isOpen: false, data: [] };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }



    async componentDidMount() {
        let getAllSubjects;
        let headers =
        {
            "Content-Type": "application/json",
       
        }
        let getAllSubjects_ = await fetch(`http://localhost:3000/tutor/exploreTutor`, { method: 'GET', headers: headers });
        getAllSubjects = await getAllSubjects_.json();
        this.setState({
            data: getAllSubjects
        });
    }
 
    
    handleSubmit = async event => {
        event.preventDefault();
        console.log("date   : " )
        let headers =
        {
            "Content-Type": "application/json",
           
        }
      
        
        const data = { subject: this.state.subject ,fee: this.state.fee }
          let response = await fetch('http://localhost:3000/Questions/addSubjectFee', { method: 'POST', body: JSON.stringify(data), headers: headers });
        console.log("response: "+ JSON.stringify(response))
        let json = await response.json();

        console.log("response: "+ JSON.stringify(json))
       if(json.error)
       {
        toast.error(json.error)

        
        
    
//            this.props.history.push('/dashboard/default');
       }
       else
       {
        toast.success("Subject Fee Added Successfully!!!")

        this.setState({
       fee:'',
       subject:'',
      
            

             
        })
     
            
        
    }
        
    }


    render() {
        console.log( this.state.data)
        const campaings = this.state.data

       
        let options;
    
        options = campaings.map((data) =>
        
            <option
                key={data.expertise}
                value={data.expertise}
            >
                {data.expertise}
            </option>
        );
       


        return (

            
            <form onSubmit={this.handleSubmit}>
          
                
                   
               
                        <div className="card-body">
                           
                            <h3 className="mb-">Subjects Fee</h3><br></br>

                            <div className="input-group mb-3">
                            <select   required name="subject"   onChange={this.handleChange}  className="form-control"  required>
                        <option>Please Select Subject</option>
                        {options}
                    </select> </div>
            
                            <div className="input-group mb-3">
                                <input type="text" name="fee"  value={this.state.fee || ''} onChange={this.handleChange} className="form-control" placeholder="Enter the Fee" required/>
                            </div>

                            
                            <button className="btn btn-primary shadow-2 mb-4">Add Subject Fee</button>
                            
                        </div>
                    
               
            
            </form>
        );
    }
}

export default generateFee;