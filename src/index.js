import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';



import OnOff from './OnOff';
import NameChanger from './NameChanger';
import DelayedAlert from './DelayedAlert';
import EmailValidation from './EmailValidation';
import BasicForm from './BasicForm';
import TransformCard from './TransformCard';
import Notification from './Notification';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<div className='wrapper'>
    
    <Card1/>
    <Card/>
    <Card2/>
    <Card3/>
    </div>*/}
    {/*<Counter>*/}
   {/* <OnOff/>*/}
   {/*<NameChanger/>*/}
   {/*<DelayedAlert/>*/}
   {/*<EmailValidation/>*/}
    {/*<Routerex/>*/}
    {/*<BasicForm/>*/}
    {/*<TransformCard/>*/}
    <Notification/>  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();