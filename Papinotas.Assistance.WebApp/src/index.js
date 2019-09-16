import React from 'react';
import ReactDOM from 'react-dom';
import Course from './components/Course';
import List from './pages/List';
import CreateStudent from './pages/CreateStudent';

const container = document.getElementById('app');
// ReactDOM.render(<Course />,container);
ReactDOM.render(<CreateStudent />,container);