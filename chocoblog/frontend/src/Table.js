import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Table.css';
class Table extends React.Component {
  render() {
    return (
    <div className="container">
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
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  }
}
export default Table;
