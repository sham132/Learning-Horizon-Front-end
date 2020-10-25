import React , { useState }  from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import Quiz from 'react-quiz-component';
import MyApp from "./timer";
import Aux from "../../hoc/_Aux";
import {NavLink} from 'react-router-dom';
import DateTimePicker from 'react-datetime-picker';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import { toast } from 'react-toastify';
class TutorValidation extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      value:'',value2:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeDate_ = this.handleChangeDate_.bind(this);

    
  }


  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
}


handleChangeDate(date) {
  this.setState({ startDate: date })
}

handleChangeDate_(date) {
  this.setState({ endDate: date })
}
handleSubmit = async event => {
    event.preventDefault();

    let headers =
    {
        "Content-Type": "application/json",
         "token"  : localStorage.getItem('token')
    }
    const data = { text: this.state.eventName, start: this.state.startDate.toString(), end: this.state.endDate.toString(), email: localStorage.getItem('email') }
    console.log(data);

   
    let response = await fetch('http://localhost:3000/Events/AddEvents', { method: 'POST', body: JSON.stringify(data), headers: headers });
    console.log("response: "+ JSON.stringify(response))
    let json = await response.json();
    console.log("token : " + json.access);
    if(json.error)
    {
      toast.error("Event Already Added!!")
    }
    else
    {
      toast.success("Event Schedule Successfully!!")
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
    console.log("events : ")
    var {...config} = this.state;
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

<Aux>
               
                   
<form onSubmit={this.handleSubmit}>



  
  


        <div className="auth-content">  
            
        
            <div className="card">
           
                <div className="card-body text-center">
                <h2>Schedualing</h2>
                 <br></br>
                 <div className="input-group mb-4">
                                        <input required  type="text" name="eventName" value={this.state.eventName || ''} onChange={this.handleChange} className="form-control" placeholder="Event Name" />
                                    </div>
                    <div className="input-group mb-4">
                       Start Date and Time :&nbsp;<Datetime  
          onChange={this.handleChangeDate}
          timeFormat={true}
          inputProps={{ placeholder: "Start Date & Time" }}
        />
                    </div>
                    

                    <div className="input-group mb-4">
                    &nbsp;   End Date and Time :&nbsp; <Datetime  dateFormat="YYYY-MM-DD" timeFormat={true}
         
          onChange={this.handleChangeDate_}
          timeFormat={true}
          inputProps={{ placeholder: "End Date & Time" }}
        />
                    </div>
                    
                    <button type="submit" variant="outline-success" className="btn btn-primary btn-lg shadow-8 mb-8 ">Save Event</button>
               
                    Select date:{" "}
        {this.state.startDate ? this.state.startDate.toString() : "no selected date"}
                </div>
            </div>
        </div>
  
</form>
</Aux>
}

      </React.Fragment>
    );
  }
}





export default TutorValidation;