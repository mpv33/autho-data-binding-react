import React, { Component } from 'react';
import  NavigationBar  from './NavigationBar';

class User extends Component {

  onKeyUp = (passed, e) => {
    if (e.keyCode === 13) {
      console.log(passed)
      switch (passed) {
        case 'firstName':
          this.lastName.focus();
          break;
        case 'lastName':
          this.age.focus();
          break;
        case 'age':
          this.submit.focus();
          break;
        default:
          this.submit.focus();
      }
    }
  }
  onSubmit = () => {
    <NavigationBar name={this.firstName.value}/>
    alert(`Yes submited! ${this.firstName.value}, ${this.lastName.value},${this.age.value} `);
  }
  render() {
    return (
      <div className="login-form">

        <div>
          <span>First Name: </span>
          <input
            type="text"
            onKeyUp={this.onKeyUp.bind(this, 'firstName')}
            ref={(input) => { this.firstName = input; }} />
        </div>
        <div>
          <span>Last Name: </span>
          <input
            type="text"
            onKeyUp={this.onKeyUp.bind(this, 'lastName')}
            ref={(input) => { this.lastName = input; }} />
        </div>
        <div>
          <span>Enter  Age: </span>
          <input
            type="text"
            onKeyUp={this.onKeyUp.bind(this, 'age')}
            ref={(input) => { this.age = input; }} />
        </div>
        <div>
        <input
          type="submit"
          value="Submit"
          onClick={this.onSubmit}
          ref={(input) => { this.submit = input; }}
        />
         </div>
      </div>
    );
  }
}


export default User;