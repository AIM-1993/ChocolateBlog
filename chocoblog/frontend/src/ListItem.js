import React, { Component } from 'react';
import './table.css';
class ListItem extends Component {
    constructor (props) {
        super(props);

        this.handleFinished = this.handleFinished.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleFinished () {
        var status = this.props.item.status;

        status = (status === 0 ? 1 : 0);

        var obj = {
            id: this.props.item.id,
            name: this.props.item.name,
            status: status
        }

        this.props.finishedChange(obj); //执行父组件传来的方法
    }

    handleDelete () {
        this.props.totalChange(this.props.item); //执行父组件传来的方法
    }



    render () {
        const item = this.props.item;
        return (
          <tr>
            <td scope='col' key={item.id}>{item.id}</td>
            <td>{ item.name }</td>
            <td><button onClick={this.handleDelete} className="btn btn-warning btn-sm">删除</button></td>
          </tr>
        );
    }
}

export default ListItem;
