import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './main.css';
import Table from './Table';
import Clock from './Timer';
// import Record from './Record';
import TodoList from './TodoList';
import * as serviceWorker from './serviceWorker';


// ReactDOM.render(<Clock />, document.getElementById('timer'));
ReactDOM.render(<Table />, document.getElementById('table'));
// ReactDOM.render(<Record />, document.getElementById('record'));
// ReactDOM.render(<TodoList />, document.getElementById('todolist'));
// ReactDOM.render(<Record />, document.getElementById('record'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
