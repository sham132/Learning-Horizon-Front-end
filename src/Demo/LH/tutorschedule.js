import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import Quiz from 'react-quiz-component';

import {DayPilot, DayPilotCalendar} from "daypilot-pro-react";
import { DateLocalizer } from 'react-big-calendar';


function  convertFormat(dat) {
      
    var event = new Date(dat);

let date = JSON.stringify(event)
date = date.slice(1,20)

return date;

  }
class tutorschedule extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      startDate: "2020-02-02",
      viewType: "Week",
      cellHeight: 30,
      timeRangeSelectedHandling: "Enabled",
      onTimeRangeSelected: function (args) {
        DayPilot.Modal.prompt("Create a new event:", "Event 1").then(function(modal) {
          var dp = args.control;
          console.log(dp)
          dp.clearSelection();
          if (!modal.result) { return; }
          dp.events.add(new DayPilot.Event({
            start: args.start,
            end: args.end,
            id: DayPilot.guid(),
            text: modal.result
          }));
        });
      },
      onBeforeEventRender: args => {
        args.data.backColor = "#93c47d";
        args.data.barHidden = true;
        args.data.fontColor = "white";
        args.data.borderColor = "darker";

        args.data.areas = [
          {right: 6, top: 6, width: 17, height: 17, image: "info-17-inverted-rounded-semi.svg", onClick: args=> this.showDetails(args.source)},
          ];
      },
      onBeforeEventDomAdd: args => {
        args.element = <div>
          {args.e.data.text}
          <div style={{position: "absolute", right: "25px", top: "5px", height: "17px", width: "17px"}}
               onClick={()=>this.showDetails(args.e)}>
            <img src={"info-17-semi.svg"} alt={"Info icon"}/>
          </div>
        </div>;
      }
    };
  }

  showDetails(e) {
   DayPilot.Modal.alert(e.data.text);
  }


  async componentDidMount() {



    console.log("this.props.location.state" + this.props.location.state);
    let header =
    {
      "Content-Type": "application/json",
      "token": localStorage.getItem('token')
    }
    let getTutordata_ = await fetch(`http://localhost:3000/Events/getEvents?email=${this.props.location.state}`, { method: 'GET', headers: header });
   let getTutordata = await getTutordata_.json();

  let objj;

   getTutordata.forEach((e)=>
   {
   
    objj={
        text:e.text,
        start:convertFormat(e.start),
        end:convertFormat(e.end)
    }

   })



   console.log("objj: "+ JSON.stringify(objj))
        let obj = [
            {
              text : getTutordata._id,
              start: convertFormat(getTutordata.start),
              end: convertFormat(getTutordata.end )
            }
        ]

        console.log("obj: "+ JSON.stringify(obj))
    this.setState({
      
      events: objj
    });
  }
  render() {
    var {...config} = this.state;




    
  
    return (
      <React.Fragment>
         
<div>
<h2>Scheduling</h2>
<div>
        <DayPilotCalendar
          {...config}
          ref={component => {
            this.calendar = component && component.control;
          }}
        />
      </div>
</div>



      </React.Fragment>
    );
  }
}





export default tutorschedule;