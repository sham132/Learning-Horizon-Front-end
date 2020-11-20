import React, { Component } from 'react';
import { Row, Col, Card, Table ,Pagination} from 'react-bootstrap';
import {  toast } from 'react-toastify';

   // The gray background
   
 

   const data_ = [];
   
   const options = {
    selectableRows:false,
    // filterType: 'checkbox',
   }

class addQuestions extends Component {
    constructor(props) {
        super(props);

        this.state = { isOpen: false, data: '' };
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
            "Content-Type": "application/json",
            "token": localStorage.getItem('token')
        }

        var answers = this.state.answers.split(',');
        const data = {question: this.state.question , questionType: 'text', subject: this.state.subject , answerSelectionType :'single' , answers : answers , correctAnswer : this.state.correctAnswer , messageForCorrectAnswer : this.state.messageForCorrectAnswer ,  messageForIncorrectAnswer : this.state.messageForIncorrectAnswer, explanation : this.state.explanation , point: this.state.point }
        console.log(data);
          let response = await fetch('http://localhost:3000/Questions/addQuestionAnswer', { method: 'POST', body: JSON.stringify(data), headers: headers });
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
        toast.success("Questions Added Successfully!!!")

        this.setState({
       question:'',
       subject:'',
       answers:'',correctAnswer:'',messageForCorrectAnswer:'',messageForIncorrectAnswer:'',explanation:'',point:''

            

             
        })

       }
        
     
            
        
        
        
    }


    render() {

       


        return (

            
            <form onSubmit={this.handleSubmit}>
          
                
                   
               
                        <div className="card-body">
                           
                            <h3 className="mb-4">Add Questions</h3>
                            <div className="input-group mb-3">
                                <input type="text" name="question"  value={this.state.question || ''} onChange={this.handleChange} className="form-control" placeholder="Enter the Question"/>
                            </div>
                            <div className="input-group mb-3">
                                <input type="text"  name="subject"  value={this.state.subject || ''} onChange={this.handleChange} className="form-control" placeholder="Enter the Subject"/>
                            </div>
                            <div className="input-group mb-3">
                                <input type="text"  name="answers"  value={this.state.answers || ''} onChange={this.handleChange} className="form-control" placeholder="Enter the options e.g. 1,2,3,4"/>
                            </div>
                            <div className="input-group mb-4">
                                <input type="text" name="correctAnswer" value={this.state.correctAnswer || ''} onChange={this.handleChange} className="form-control" placeholder="Enter the correct answer point"/>
                            </div>
                            <div className="input-group mb-4">
                                <input type="text"  name="messageForCorrectAnswer" value={this.state.messageForCorrectAnswer || ''} onChange={this.handleChange} className="form-control" placeholder="Enter the message For Correct Answer"/>
                            </div>
                            <div className="input-group mb-4">
                                <input type="text"  name="messageForIncorrectAnswer" value={this.state.messageForIncorrectAnswer || ''} onChange={this.handleChange} className="form-control" placeholder="Enter the message For Wrong Answer"/>
                            </div>
                            <div className="input-group mb-4">
                                <input type="text"  name="explanation" value={this.state.explanation || ''} onChange={this.handleChange} className="form-control" placeholder="Enter the explanation"/>
                            </div>
                            <div className="input-group mb-4">
                                <input type="text"  name="point" value={this.state.point || ''} onChange={this.handleChange} className="form-control" placeholder="Enter the points of Questions"/>
                            </div>
                            <button className="btn btn-primary shadow-2 mb-4">Add Questions</button>
                            
                        </div>
                    
               
            
            </form>
        );
    }
}

export default addQuestions;