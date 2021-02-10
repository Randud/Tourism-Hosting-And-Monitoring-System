import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class InquiryTbl extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  delete() {
    axios
      .delete(
        'http://localhost:4000/tourist/delete/' +
          this.props.obj._id
      )
      .then(console.log('Deleted'))
      .catch((err) => console.log(err));
  }
  render() {



    return (
      <tr>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.email}</td>
        <td>{this.props.obj.passportId}</td>
        <td>{this.props.obj.location}</td>
        <td>{this.props.obj.phone}</td>
        <td>{this.props.obj.note}</td>
        <td>
          <Link to={'/InquiryEdit/' + this.props.obj._id} className="btn btn-primary">
            Edit
          </Link>
          {/* <button onClick={this.delete} className="btn btn-primary">
          Edit
          </button> */}
        </td>
        <td>
          <button onClick={this.delete} className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default InquiryTbl;
