import React from 'react';
import ReactDOM from 'react-dom';
import "typeface-source-sans-pro";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import CourseApplication from './Components/CourseApplication';

ReactDOM.render(
  <React.StrictMode>
    
    <CourseApplication/>
  </React.StrictMode>,
  document.getElementById('root')
);

