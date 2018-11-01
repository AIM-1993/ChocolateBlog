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
        fetch("http://localhost:8000/api/v1/DataIndex/")
        .then(response => response.json())
        .then(parsedJSON => parsedJSON.results.map(dataindex => (
            {
                count : `${dataindex.count}`
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
                        const {count} = contact;
                        return <h3>目前数据库中共有文章： <span className="badge badge-secondary">{count}</span></h3>
                    }) : null
                }
            </div>
        );
    }
}

export default Home;
