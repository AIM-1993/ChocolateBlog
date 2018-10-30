import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Table.css';
import text from './text.json';
class Table extends React.Component {

  render() {
    return (
    <div className="container table-responsive">
      <table className="table table-hover table-dark">
        <thead className="bg-color">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Things</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{text.hello}</td>
            <td>{text.happy}</td>
            <td>后端数据</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  }
}
export default Table;
