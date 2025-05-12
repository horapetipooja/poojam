import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';



import OnOff from './OnOff';
import NameChanger from './NameChanger';
import DelayedAlert from './DelayedAlert';

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
   <DelayedAlert/>
    {/*<Routerex/>*/}
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();