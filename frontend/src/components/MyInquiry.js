import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './InquiryTbl';
import { environment } from '../environment';
import './tableStyle.css';

export default class MyInquiry extends Component {
  constructor(props) {
    super(props);
    this.state = { inquiryList: [] };
  }

  componentDidMount() {
    axios
      .get(environment.baseURL + '/tourist/getAll')
      .then((response) => {
        this.setState({ inquiryList: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  tabRow() {
    return this.state.inquiryList.map(function (object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3 align="center">My Inquiry List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }} data-testid = "table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Passport ID</th>
              <th>Location</th>
              <th>Contact No</th>
              <th>Note</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>{this.tabRow()}</tbody>
        </table>
      </div>
    );
  }
}
