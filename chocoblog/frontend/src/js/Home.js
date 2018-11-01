import React, {Component} from 'react';

class Home extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isLoading : true,
            contacts : []
        }

    }

    componentDidMount () {
        this.fetchData();
        
    }

    fetchData () {
        fetch("http://localhost:8000/api/todo")
        .then(response => response.json())
        .then(parsedJSON => parsedJSON.results.map(thing => (
            {
                id : `${thing.id}`,
                thing : `${thing.thing}`
        }
        )))
        .then(contacts => this.setState(
            {
                contacts,
                isLoading : false
            }
        ))
        .catch(error => console.log('Failed to parsed', error))

    }

    render () {
        const {isLoading, contacts} = this.state;
        return (
            <div>
                {
                    !isLoading ? contacts.map(contact => {
                        const {id} = contact;
                        return <p>{id}</p>
                    }) : null
                }    
            </div>
        );
    }
}

export default Home;