import React, { Component } from 'react';

class Record extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/api/todo/?format=json")
      .then(response => response.json())
      .then(parsedJSON => console.log(parsedJSON.results))
      .catch(error => console.log('Failed to parsed.'))
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  componentWillUnmount() {
  this.serverRequest.abort()
}


  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.id} {item.thing}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default Record;
