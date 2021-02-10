import React, { Component } from 'react';
import axios from 'axios';

export default class InquiryEdit extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangepassport = this.onChangepassport.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangenote = this.onChangenote.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        name: '',
        email: '',
        passportId: '',
        location: '',
        phone: '',
        note: '',
    };
  }

  componentDidMount() {
    axios
      .get(
        'http://localhost:4000/tourist/get/' +
          this.props.match.params.id
      )
      .then((response) => {
        this.setState({
            name: response.data.name,
            email: response.data.email,
            passportId: response.data.passportId,
            location: response.data.location,
            phone: response.data.phone,
            note: response.data.note,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
        email: e.target.value,
    });
  }
  onChangepassport(e) {
    this.setState({
        passportId: e.target.value,
    });
  }
  onChangeLocation(e) {
    this.setState({
        location: e.target.value,
    });
  }
  onChangePhone(e) {
    this.setState({
        phone: e.target.value,
    });
  }
  onChangenote(e) {
    this.setState({
        note: e.target.note,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
        name: this.state.name,
        email: this.state.email,
        passportId: this.state.passportId,
        location: this.state.location,
        phone: this.state.phone,
        note: this.state.note,
    };
    axios
      .post(
        'http://localhost:4000/tourist/update/' +
          this.props.match.params.id,
        obj
      )
      .then((res) => console.log(res.data));

    this.props.history.push('/index');
  }

  render() {
    return (
        <div style={{ marginTop: 10 }}>
        <h3 align="center">Update My Inquiries</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Person Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>
          <div className="form-group">
            <label>GST Number: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.passportId}
              onChange={this.onChangepassport}
            />
          </div>
          <div className="form-group">
            <label>GST Number: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.location}
              onChange={this.onChangeLocation}
            />
          </div>
          <div className="form-group">
            <label>GST Number: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.phone}
              onChange={this.onChangePhone}
            />
          </div>
          <div className="form-group">
            <label>GST Number: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.note}
              onChange={this.onChangenote}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Update Business"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
