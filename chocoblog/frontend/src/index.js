import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './main.css';
import Table from './Table';
import Clock from './Timer';
import About from './About';
// import Record from './Record';
import {
BrowserRouter,
Route
} from 'react-router-dom';

// import Record from './Record';
import * as serviceWorker from './serviceWorker';

class SiteRouter extends BrowserRouter {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Table}/>
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
