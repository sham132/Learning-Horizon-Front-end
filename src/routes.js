import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;
const DashboardDefault = React.lazy(() => import('./Demo/Dashboard/Default'));

//const TAVUS = React.lazy(() => import('./Demo/TAVUS/Tavus'));   //exploreTutor
const TutorValidation = React.lazy(() => import('./Demo/LH/TutorValidation'));

const exploreTutor = React.lazy(() => import('./Demo/LH/exploreTutor'));
const tutorschedule = React.lazy(() => import('./Demo/LH/tutorschedule'));
const addQuestions = React.lazy(() => import('./Demo/LH/addQuestions'));
const generateFee = React.lazy(() => import('./Demo/LH/generateFee'));  
const feePerSubject = React.lazy(() => import('./Demo/LH/feePerSubject')); 
const studentFee = React.lazy(() => import('./Demo/LH/studentFee')); 
const routes = [

    { path: '/dashboard/default', exact: true, name: 'Default', component: DashboardDefault },
    { path: '/LH/TutorValidation', exact: false, name: 'TutorValidation', component: TutorValidation },  
    { path: '/LH/exploreTutor', exact: false, name: 'exploreTutor', component: exploreTutor },  
    { path: '/LH/tutorschedule', exact: false, name: 'tutorschedule', component: tutorschedule },  
    { path: '/LH/addQuestions', exact: false, name: 'addQuestions', component: addQuestions },  
    { path: '/LH/generateFee', exact: false, name: 'generateFee', component: generateFee },  
    { path: '/LH/feePerSubject', exact: false, name: 'feePerSubject', component: feePerSubject },  
    { path: '/LH/studentFee', exact: false, name: 'studentFee', component: studentFee },  
    

];

export default routes;