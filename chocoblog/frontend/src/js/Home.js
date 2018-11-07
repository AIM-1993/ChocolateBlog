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
                        return(
                            <div class="container">
                                <h1>欢迎使用 ChocolateTodoList！</h1>
                                <hr className="my-4" />
                                <h4>目前数据库中共有文章： <span className="badge badge-secondary">{count} </span></h4>
                                <p>你可以尝试在Blog页面阅读他们。相信我，他们值得一读</p>
                            </div>
                        )
                    }) : null
                }
            </div>
        );
    }
}

export default Home;
