import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './HelpCentettbl';
import { environment } from '../environment';
import './tableStyle.css';

export default class HelpCenter extends Component {
  constructor(props) {
    super(props);
    this.state = { HelpCenter: [] };
  }

  componentDidMount() {
    axios
      .get(environment.baseURL + '/helpCenter/getAll')
      .then((response) => {
        this.setState({ HelpCenter: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  tabRow() {
    return this.state.HelpCenter.map(function (object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3 align="center">List of Help Centers</h3>
        <p>Tourism Disaster Monitoring and Hosting Program' along with the Tourist Police Division where tourism where tourism officials will visit the foreign tourists, providing them with dry ration gift package,
        familiarizing the current situation and identifying the difficulties they are facing and providing providing assistance, reports Xinhua news agency.. 
        <br/>
        <br/>
        Under the guidance of Sri Lanka Tourism Development Authority, this campaign involved a team to travel across the country for four days, on the lookout for tourists. Their tour of Sri Lanka included the following destinations: 

</p>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Center Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>location</th>
              <th>Contact Number</th>
            </tr>
          </thead>
          <tbody>{this.tabRow()}</tbody>
        </table>
      </div>
    );
  }
}
