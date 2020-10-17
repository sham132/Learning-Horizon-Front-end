import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import Quiz from 'react-quiz-component';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { quiz } from './quiz';
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
            
            <Quiz quiz={quiz} showDefaultResult={false}/>
  
        
        </React.Fragment>
      );
    }
  }
  
  

  

  export default TutorValidation;