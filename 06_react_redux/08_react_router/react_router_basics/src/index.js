import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BasicExampleRoute from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter}  from 'react-router-dom';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();



ReactDOM.render(

  <BrowserRouter>
    <BasicExampleRoute />
  </BrowserRouter>,
  document.getElementById("root"));
  registerServiceWorker();
