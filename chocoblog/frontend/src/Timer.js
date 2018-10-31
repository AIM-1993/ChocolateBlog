import React, { Component } from 'react';
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
          <p>现在时间:  {this.state.date.toLocaleTimeString()}.</p>
        </header>
      </div>
    );
  }
}

export default Clock;
