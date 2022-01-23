import React from 'react';
import axios from 'axios';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //state needs to keep track of attendeeList.
      firstName : '',
      lastName : '',
      email : '',
      guestCount: '',
    };
    this.setFirstName = this.setFirstName.bind(this);
    this.setLastName = this.setLastName.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setGuestCount = this.setGuestCount.bind(this);
    this.register = this.register.bind(this)
  }
  setFirstName(event) {
    this.setState({firstName : event.target.value})
  }

  setLastName(event) {
    this.setState({lastName : event.target.value})
  }

  setEmail(event) {
    this.setState({email : event.target.value})
  }

  setGuestCount(event) {
    this.setState({guestCount : event.target.value})
  }

  register() {
    axios.post('/rsvps', {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      guestCount: this.guestCount})
  }

  render() {
    return (
      <div className = "RSVP">
        <h2>RSVP Form</h2>
        <label>First Name:
          <input type="text" value={this.state.firstName} onChange = {this.setFirstName} ></input>
        </label>
        <label>Last Name:
          <input type="text" value={this.state.lastName} onChange = {this.setLastName} ></input>
        </label>
        <label>Email Address:
          <input type="text" value={this.state.email} onChange = {this.setEmail}></input>
        </label>
        <label>Number of Guests:
          <input type="text" value={this.state.guestCount} onChange = {this.setGuestCount}></input>
        </label>
        <button onClick = {this.register}>REGISTER</button>
      </div>
      )
    }
  }

export default RegisterForm;