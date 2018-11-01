import React, { Component } from 'react';
import '../scss/about.css';

class About extends Component {
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
        fetch("http://localhost:8000/api/article")
        .then(response => response.json())
        .then(parsedJSON => parsedJSON.results.map(article => (
            {
                title : `${article.title}`,
                author : `${article.author}`,
                pub_date : `${article.pub_date}`,
                context : `${article.context}`
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
                        const {title, author, pub_date, context} = contact;
                        return <p key={pub_date}>{title}{author}{pub_date}{context}</p>
                    }) : null
                }    
            </div>
            );
    }
    }

export default About;
