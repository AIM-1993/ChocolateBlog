import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './main.css';
import Home from './js/Home';
import Table from './js/Table';
import Clock from './js/Timer';
import About from './js/About';

import {
  BrowserRouter,
  Route
  } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

class SiteRouter extends BrowserRouter {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Route exact path="/home" component={Home}/>
            <Route path="/todo" component={Table}/>
            <Route path="/about" component={About}/>
          </div>
      </BrowserRouter>
    );
  }
}


ReactDOM.render(<SiteRouter />, document.getElementById('site'));
ReactDOM.render(<Clock />, document.getElementById('timer'));
// ReactDOM.render(<Record />, document.getElementById('record'));

// ReactDOM.render(<Record />, document.getElementById('record'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
