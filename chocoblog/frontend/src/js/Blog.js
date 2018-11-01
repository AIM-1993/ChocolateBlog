import React, { Component } from 'react';
import '../css/blog.css';

class Blog extends Component {
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
                        return(
                              <div className="list-group">
                                <ul key={pub_date} className="article">
                                    <li className="fas fa-book-open list-group-item list-group-item-action flex-column align-items-start activ">  {title}</li>
                                    <li className="list-group-item list-group-item-action flex-column align-items-start activ">{author} | {pub_date}</li>
                                    <li className="list-group-item list-group-item-action flex-column align-items-start activ">{context}</li>
                                </ul>
                              </div>)
                    }) : null
                }
            </div>
            );
    }
    }

export default Blog;
