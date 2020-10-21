import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import Quiz from 'react-quiz-component';
class TutorValidation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,tutorStatus:''

    }
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

    let getdata;



    let headers =
    {
      "Content-Type": "application/json",
      "token": localStorage.getItem('token')
    }
    let getdata_ = await fetch(`http://localhost:3000/Questions/getAllQuestion?subject=${localStorage.getItem('expertise')}`, { method: 'GET', headers: headers });
    getdata = await getdata_.json();

    console.log(JSON.stringify("han g" + JSON.stringify(getdata)))
    this.setState({
      quiz: getdata
    });


  }
  render() {
    let quiz = this.state.quiz
    console.log("showDefaultResult :")
    const  onCompleteAction  = (obj) => {
      console.log(obj.totalPoints);
      console.log(obj.correctPoints);

      let totalPoints = obj.totalPoints;
      let correctPoints= obj.correctPoints;
      let result =  (correctPoints / totalPoints) * 100;

   console.log(result);
      if(result >= 80)
      {
        let headers =
        {
            "Content-Type": "application/json",
             "token"  : localStorage.getItem('token')
        }

        var requestOptions = {
          method: 'POST',
          headers: headers,
          redirect: 'follow'
        };
        
        fetch(`http://localhost:3000/tutor/updateTutorStatus?email=${localStorage.getItem('email')}&status=true`, requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
      }
      else
      {

      }


    }
  
    return (
      <React.Fragment>
        {this.state.tutorStatus !=true ?  
        <div>
        {this.state.quiz ?
          <Quiz quiz={quiz} showDefaultResult={true} onComplete={onCompleteAction} showInstantFeedback={true} />
          : <h2>Learning Horizon is not dealing with that subject!!!</h2>

        }
        </div>
:  
<div>
<h2>Scheduling</h2>
</div>

}

      </React.Fragment>
    );
  }
}





export default TutorValidation;