import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;
const DashboardDefault = React.lazy(() => import('./Demo/Dashboard/Default'));

//const TAVUS = React.lazy(() => import('./Demo/TAVUS/Tavus'));
const addNumberList = React.lazy(() => import('./Demo/Aggr/addNumberList'));
const createCompaign = React.lazy(() => import('./Demo/Aggr/createCompaigns'));
const sendSmsList = React.lazy(() => import('./Demo/Aggr/sendSmsList'));
const CampaignList = React.lazy(() => import('./Demo/Aggr/CampaignList'));
const routes = [

    { path: '/dashboard/default', exact: true, name: 'Default', component: DashboardDefault },
    { path: '/Aggr/addNumberList', exact: false, name: 'addNumberList', component: addNumberList },  
    { path: '/Aggr/createCompaign', exact: false, name: 'sendSms', component: createCompaign }, 
    { path: '/Aggr/sendSmsList', exact: false, name: 'sendSmsList', component: sendSmsList },
    { path: '/Aggr/CampaignList', exact: false, name: 'CampaignList', component: CampaignList },
    // { path: '/TAVUS/addTemplate', exact: true, name: 'addTemplate', component: addTemplate // CampaignList },
    // { path: '/TAVUS/templateList', exact: true, name: 'templateList', component: templateList }
];

export default routes;