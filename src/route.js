import React from 'react';

const SignUp1 = React.lazy(() => import('./Demo/Authentication/SignUp/SignUp1'));
const Signin1 = React.lazy(() => import('./Demo/Authentication/SignIn/SignIn1'));
const SignupPage = React.lazy(() => import('./Demo/Authentication/SignUp/SignupPage'));
const StudentSignup = React.lazy(() => import('./Demo/Authentication/SignUp/StudentSignup'));
const TutorSignup = React.lazy(() => import('./Demo/Authentication/SignUp/TutorSignup'));
const TutorLogin = React.lazy(() => import('./Demo/Authentication/SignIn/TutorLogin'));


const route = [
    { path: '/auth/signup', exact: true, name: 'signup', component: SignUp1 },
    { path: '/auth/Login', exact: true, name: 'Login', component: Signin1 },
    { path: '/auth/SignupPage', exact: true, name: 'SignupPage', component: SignupPage },
    
    { path: '/auth/StudentSignup', exact: true, name: 'StudentSignup', component: StudentSignup },
    
    { path: '/auth/TutorSignup', exact: true, name: 'TutorSignup', component: TutorSignup },
    
    { path: '/TutorLogin', exact: true, name: 'TutorLogin', component: TutorLogin }

];

export default route;