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

const routes = [

    { path: '/dashboard/default', exact: true, name: 'Default', component: DashboardDefault },
    { path: '/LH/TutorValidation', exact: false, name: 'TutorValidation', component: TutorValidation },  
    { path: '/LH/exploreTutor', exact: false, name: 'exploreTutor', component: exploreTutor },  
    { path: '/LH/tutorschedule', exact: false, name: 'tutorschedule', component: tutorschedule },  
    
    

];

export default routes;