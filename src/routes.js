import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;
const DashboardDefault = React.lazy(() => import('./Demo/Dashboard/Default'));

//const TAVUS = React.lazy(() => import('./Demo/TAVUS/Tavus'));   //exploreTutor
const TutorValidation = React.lazy(() => import('./Demo/Aggr/TutorValidation'));

const exploreTutor = React.lazy(() => import('./Demo/Aggr/exploreTutor'));

const routes = [

    { path: '/dashboard/default', exact: true, name: 'Default', component: DashboardDefault },
    { path: '/Aggr/TutorValidation', exact: false, name: 'TutorValidation', component: TutorValidation },  
    { path: '/Aggr/exploreTutor', exact: false, name: 'exploreTutor', component: exploreTutor },  
    
    

];

export default routes;