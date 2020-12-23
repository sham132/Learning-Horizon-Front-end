import React, { Component } from 'react';
import { render } from 'react-dom';

import * as Survey from 'survey-react';
import 'survey-react/survey.css';

import 'bootstrap/dist/css/bootstrap.css'
import './style.css';

class Feedback extends Component {
  componentWillMount() {    
    Survey.Survey.cssType = "bootstrap";
    Survey.defaultBootstrapCss.navigationButton = "btn btn-green";
  }

  render() {    
    var json = { title: "Learning Horizon Tutor Feedback", showProgressBar: "top", pages: [
        {questions: [
            { type: "matrix", name: "Quality", title: "How well does the tutor teach the core subject?",
                columns: [{ value: 1, text: "Strongly Disagree" },
                    { value: 2, text: "Disagree" },
                    { value: 3, text: "Neutral" },
                    { value: 4, text: "Agree" },
                    { value: 5, text: "Strongly Agree" }],
                rows: [{ value: "affordable", text: "Was well-prepared" },
                    { value: "does what it claims", text: "Was good at explaning things" },
                    { value: "better then others", text: "Taught at an appropriate pace" },
                    { value: "easy to use", text: "Was receptive to student's questions " }]},
            { type: "rating", name: "satisfaction", title: "How satisfied are you from the Tutor?",
                mininumRateDescription: "Not Satisfied", maximumRateDescription: "Completely satisfied" },
            { type: "rating", name: "recommend friends", visibleIf: "{satisfaction} > 3",
                title: "How likely are you to recommend the Tutor to a friend or co-worker?",
                mininumRateDescription: "Will not recommend", maximumRateDescription: "I will recommend" },
            { type: "comment", name: "suggestions", title:"What would make you more satisfied from the Tutor?", }
        ]},
        {questions: [
            { type: "matrix", name: "Quality", title: "Teacher is prepared for class",
                columns: [{ value: 6, text: "Strongly Disagree" },
                    { value: 7, text: "Disagree" },
                    { value: 8, text: "Neutral" },
                    { value: 9, text: "Agree" },
                    { value: 10, text: "Strongly Agree" }],
                rows: [{ value: "affordable", text: "Was well-prepared" },
                    { value: "does what it claims", text: "How well does the teacher teach the core subject?" },
                    { value: "better then others", text: "Teacher is prepared for class" },
                    { value: "easy to use1", text: "Teacher know his/her subject" },
                     { value: "easy to use2", text: "Teacher is creative in developing activities and lessons" },
                     { value: "easy to use3", text: "Teacher is comfortable in accomadating for individual student needs" }]},
           
           
          
        ]},
        { questions: [
            { type: "text", name: "email",
                title: "Thank you for taking our Learning Horizon Tutor Feedback survey. Your survey is almost complete, we'll do our services better according to review of your feedback. Thank you for participing in this survey...!!!  "}
        ]}
    ]};

    var model = new Survey.Model(json);    
    return (
      <Survey.Survey model={model}/>
    );
  }
  
}

export default Feedback;
