import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';


// ReactDOM la tao ra DOM ao de render ra Component App o DOM co id='root'.
ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
