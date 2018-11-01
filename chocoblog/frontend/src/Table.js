import React, { Component } from 'react';
import ListItem from './ListItem';
import Dialog from './dialog';
import './table.css';

class Table extends Component {
    constructor (props) {
        super(props);

        //初始任务列表
        this.state = {
            list: [],
            finished: 0
        };
    }

    //添加新任务，在组件中以props的形式传递给子组件
    addTask (newitem) {
        var allTask = this.state.list;
        allTask.push(newitem);
        this.setState({
            list: allTask
        });
    }
    updateFinished (todoItem) {
  		var sum = 0;
  		this.state.list.forEach( (item) => {
  			if (item.id === todoItem.id) {
  				item.status = todoItem.status;
  			}
  			if (item.status === 1) {
  				sum++;
  			}
  		});
  		this.setState({
  			finished: sum
  		});
  }



    //更新任务总数，在组件中以props的形式传递给子组件
    updateTotal (todoItem) {
        var obj = [], sum = 0;
        this.state.list.forEach((item) => {
            if (item.id !== todoItem.id) {
                obj.push(item);
                if (item.status === 1 ) {
                    sum++;
                }
            }
        });
        this.setState({
            list: obj,
            finished: sum
        });
    }

  render() {
      return (
        <div className="container table-responsive">
          <h1>TodoList</h1>
          <table className="table table-hover table-dark">
            <thead className="bg-color">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Things</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody className="no-underline">
                  { this.state.list.map ((item, index) =>
                    <ListItem
                        key={index}
                        finishedChange={this.updateFinished.bind(this)}
                        totalChange={this.updateTotal.bind(this)}
                        item={item}
                    />
                  )}

            </tbody>
          </table>
          <Dialog addNewTask={this.addTask.bind(this)} nums={this.state.list.length}/>
        </div>


      );
  }
}
export default Table;
