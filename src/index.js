import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {BrowserRouter as Router} from 'react-router-dom';
//"Router" es un alias, puede no estar e invocarlo con BrowserRouter

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
  );
