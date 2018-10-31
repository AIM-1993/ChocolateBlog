import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './main.css';
import Table from './Table';
import Clock from './Timer';
import {
BrowserRouter,
Route,
Link
} from 'react-router-dom';

// import Record from './Record';
import * as serviceWorker from './serviceWorker';

class TableRouter extends BrowserRouter {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Route exact path="/todo" component={Table}/>
          </div>
      </BrowserRouter>
    );
  }
}



ReactDOM.render(<Clock />, document.getElementById('timer'));
ReactDOM.render(<TableRouter />, document.getElementById('table'));
// ReactDOM.render(<Record />, document.getElementById('record'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
