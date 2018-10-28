import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './Timer';
import Table from './Table';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Clock />, document.getElementById('timer'));
ReactDOM.render(<Table />, document.getElementById('table'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
