import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import Quiz from 'react-quiz-component';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';


class TutorValidation extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        currentStep: 1
       
      }
    }
  
    

    async componentDidMount() {



      let getdata;


     
          let headers =
          {
              "Content-Type": "application/json",
              "token": localStorage.getItem('token')
          }
          let getdata_= await fetch(`http://localhost:3000/Questions/getAllQuestion?subject=${localStorage.getItem('expertise')}`, { method: 'GET', headers: headers });
          getdata = await getdata_.json();

          console.log(JSON.stringify("han g"+ JSON.stringify(getdata)))



      
      this.setState({
          quiz: getdata
      });


   

    }

    
    render() {  
      let quiz = this.state.quiz  
      return (
        <React.Fragment>
            
            {this.state.quiz   ? 
             <Quiz quiz={quiz} showDefaultResult={false}/> 
             : <h3>Learning Horizon is not dealing with that subject !!!</h3>

            }
  
        
        </React.Fragment>
      );
    }
  }
  
  

  

  export default TutorValidation;