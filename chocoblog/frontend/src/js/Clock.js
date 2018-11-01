import React, { Component } from 'react';
import '../css/clock.css';

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
        <div className="Timer-header">
          <p>{this.state.date.toLocaleTimeString()}</p>
        </div>
      </div>
    );
  }
}

export default Clock;
