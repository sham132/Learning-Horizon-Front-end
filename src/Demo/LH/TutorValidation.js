import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

import { Row, Col, Card, Form, Button } from 'react-bootstrap';
class TutorValidation extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        currentStep: 1,
        email:  '',
        username: '',
        password: '', 
      }
    }
  
    handleChange = event => {
      const {name, value} = event.target
      this.setState({
        [name]: value
      })    
    }
     
    handleSubmit = event => {
      event.preventDefault()
      const { email, username, password } = this.state
      alert(`Your Test is recieved, Please wait for the result!! `)
      this.props.history.push('/TutorLogin');

    }
    
    _next = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep >= 2? 3: currentStep + 1
      this.setState({
        currentStep: currentStep
      })
    }

    _next = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 3? 4: currentStep + 1
        this.setState({
          currentStep: currentStep
        })
      }
      
      _next = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 4? 5: currentStep + 1
        this.setState({
          currentStep: currentStep
        })
      }
    _prev = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep <= 1? 1: currentStep - 1
      this.setState({
        currentStep: currentStep
      })
    }
  
  /*
  * the functions for our button
  */
  previousButton() {
    let currentStep = this.state.currentStep;
    if(currentStep !==1){
     
    }
    return null;
  }
  
  nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep <5){
      return (
        <button 
          className="btn btn-primary" 
          type="button" onClick={this._next}>
        Next
        </button>        
      )
    }
    return null;
  }
    
    render() {    
      return (
        <React.Fragment>
            
        <h1>Quiz 🧙‍♂️</h1>
        <p>Question{this.state.currentStep} </p> 
  
        <Form onSubmit={this.handleSubmit}>
        
          <Step1 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            email={this.state.email}
          />
          <Step2 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            username={this.state.username}
          />
          <Step3
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            username={this.state.username}
          />
          <Step4
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            username={this.state.username}
          />
          <Step5 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            password={this.state.password}
          />
          {this.previousButton()}
          {this.nextButton()}
  
        </ Form>
        </React.Fragment>
      );
    }
  }
  
  function Step1(props) {
    if (props.currentStep !== 1) {
      return null
    } 
    return(
      <div className="form-group">
       
        <h3>zero is a__________ number?</h3>
        
        <br></br> 
        <input
          id="email"
          name="Q1"
          type="radio"
          placeholder="Enter email"
          value={props.email}
          onChange={props.handleChange}
          /> &nbsp;
        Odd Number 
       
        <br></br> 
        <input
          id="email"
          name="Q1"
          type="radio"
          placeholder="Enter email"
          value={props.email}
          onChange={props.handleChange}
          /> &nbsp;
        Even Number
        <br></br> 
        <input
          id="email"
          name="Q1"
          type="radio"
          placeholder="Enter email"
          value={props.email}
          onChange={props.handleChange}
          /> &nbsp;
        Whole Number
        <br></br> 
        <input
          id="email"
          name="Q1"
          type="radio"
          placeholder="Enter email"
          value={props.email}
          onChange={props.handleChange}
          /> &nbsp;
        None of these

      </div>
    );
  }
  
  function Step2(props) {
    if (props.currentStep !== 2) {
      return null
    } 
    return(
        <div className="form-group">
       
        <h3>Quadrillion has _________ zeros?</h3>
        
        <br></br> 
        <input
          id="email"
          name="Q1"
          type="radio"
          placeholder="Enter email"
          value={props.email}
          onChange={props.handleChange}
          /> &nbsp;
             15 zeros 
       
        <br></br> 
        <input
          id="email"
          name="Q1"
          type="radio"
          placeholder="Enter email"
          value={props.email}
          onChange={props.handleChange}
          /> &nbsp;
         18 zeros
        <br></br> 
        <input
          id="email"
          name="Q1"
          type="radio"
          placeholder="Enter email"
          value={props.email}
          onChange={props.handleChange}
          /> &nbsp;
        21 zeros
        <br></br> 
        <input
          id="email"
          name="Q1"
          type="radio"
          placeholder="Enter email"
          value={props.email}
          onChange={props.handleChange}
          /> &nbsp;
        None of these

      </div>
    );
  }
  
  function Step3(props) {
    if (props.currentStep !== 3) {
      return null
    } 
    return(
        <div className="form-group">
       
    <h3>{"If a > b and b > a. Then ?"}</h3>
        
        <br></br> 
        <input
          id="email"
          name="Q1"
          type="radio"
          placeholder="Enter email"
          value={props.email}
          onChange={props.handleChange}
          /> &nbsp;
        a = b
       
        <br></br> 
        <input
          id="email"
          name="Q1"
          type="radio"
          placeholder="Enter email"
          value={props.email}
          onChange={props.handleChange}
          /> &nbsp;
         a ≠ b
        <br></br> 
        <input
          id="email"
          name="Q1"
          type="radio"
          placeholder="Enter email"
          value={props.email}
          onChange={props.handleChange}
          /> &nbsp;
         a ≠ b
        <br></br> 
        <input
          id="email"
          name="Q1"
          type="radio"
          placeholder="Enter email"
          value={props.email}
          onChange={props.handleChange}
          /> &nbsp;
        None of these

      </div>
    );
  }

  function Step4(props) {
    if (props.currentStep !== 4) {
      return null
    } 
    return(
        <div className="form-group">
       
    <h3>18 men can eat 20 kg of rice in 3 days. How long will 6 men take to eat 40 kg of rice?</h3>
        
        <br></br> 
        <input
          id="email"
          name="Q1"
          type="radio"
          placeholder="Enter email"
          value={props.email}
          onChange={props.handleChange}
          /> &nbsp;
        20
       
        <br></br> 
        <input
          id="email"
          name="Q1"
          type="radio"
          placeholder="Enter email"
          value={props.email}
          onChange={props.handleChange}
          /> &nbsp;
         18
        <br></br> 
        <input
          id="email"
          name="Q1"
          type="radio"
          placeholder="Enter email"
          value={props.email}
          onChange={props.handleChange}
          /> &nbsp;
         32
        <br></br> 
        <input
          id="email"
          name="Q1"
          type="radio"
          placeholder="Enter email"
          value={props.email}
          onChange={props.handleChange}
          /> &nbsp;
        None of these

      </div>
    );
  }

  function Step5(props) {
    if (props.currentStep !== 5) {
      return null
    } 
    return(
      <React.Fragment>
      <div className="form-group">
       
       <h3>If 25 men can eat 150 kg of wheat in 30 days then 45 men can eat 450 kg of wheat in how many days?</h3>
           
           <br></br> 
           <input
             id="email"
             name="Q1"
             type="radio"
             placeholder="13 days"
             value={props.email}
             onChange={props.handleChange}
             /> &nbsp;
           13 days
          
           <br></br> 
           <input
             id="email"
             name="Q1"
             type="radio"
             placeholder="Enter email"
             value={props.email}
             onChange="50 days"
             /> &nbsp;
             50 days
           <br></br> 
           <input
             id="email"
             name="Q1"
             type="radio"
             placeholder="Enter email"
             value="15 days"
             onChange={props.handleChange}
             /> &nbsp;
            15 days
           <br></br> 
           <input
             id="email"
             name="Q1"
             type="radio"
             placeholder="Enter email"
             value="None Of These"
             onChange={props.handleChange}
             /> &nbsp;
           None of these
   
         </div>
      <button className="btn btn-success">Finish</button>
      </React.Fragment>
    );
  }
  

  

  export default TutorValidation;