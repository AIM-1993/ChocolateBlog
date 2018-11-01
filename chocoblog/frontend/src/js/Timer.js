import React, { Component } from 'react';
import '../scss/timer.css';

class Clock extends Component {
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
          <p>{this.state.date.toLocaleTimeString()}</p>
        </header>
      </div>
    );
  }
}

export default Clock;
