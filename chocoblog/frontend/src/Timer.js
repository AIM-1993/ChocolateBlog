import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Timer.css';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()}
    }
    componentDidMount() {
      this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    }
    componentWillUnmount() {
      clearInterval(this.timerID);
    }

    tick() {
      this.setState({
        date: new Date()
      });
    }
    render() {
    return(
      <div className="Timer">
        <header className="Timer-header">
          <h2>现在时间是  {this.state.date.toLocaleTimeString()}.</h2>
        </header>
      </div>
    );
  }
}

export default Clock;
