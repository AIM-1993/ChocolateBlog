import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './main.css';
import Home from './js/Home';
import Table from './js/Table';
import Blog from './js/Blog';
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
            <Route exact path="/" component={Home}/>
            <Route path="/todo" component={Table}/>
            <Route path='/blog' component={Blog}/>
            <Route path="/about" component={About}/>
          </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<SiteRouter />, document.getElementById('site'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
