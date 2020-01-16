import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import './DesktopForm.css';


export default class DesktopForm extends Component {
  constructor(props) {
    super(props);
    this.state = { Users: [] };
  }
  componentDidMount() {
    axios.get('http://localhost:3001/Desktop')
      .then(response => {
        this.setState({ Users: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  // componentDidMount() {
  //   axios.get('http://localhost:3001/Signup')
  //     .then(response => {
  //       this.setState({ Admin: response.data });
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  // }

  tabRow() {
    return this.state.Users.map(function (object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div className="desktoptable">
        <p className="desk">Desktop List</p>
        <table className="table table-striped" style={{ marginTop: 60 }}>
          <thead>
            <tr>
              <th>Employee_Id</th>
              <th>Asset_Number</th>
              <th>Name</th>
              <th>MAC_Address</th>
              <th>Comment</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.tabRow()}
          </tbody>
        </table>
      </div>
    );
  }
}