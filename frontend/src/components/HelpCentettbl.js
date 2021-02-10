import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class HelpCentettbl extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  delete() {
    axios
      .get(
        'http://localhost:4000/helpCenter/delete/' +
          this.props.obj._id
      )
      .then(console.log('Deleted'))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.centerName}</td>
        <td>{this.props.obj.email}</td>
        <td>{this.props.obj.address}</td>
        <td>{this.props.obj.location}</td>
        <td>{this.props.obj.phone}</td>
      </tr>
    );
  }
}

export default HelpCentettbl;
