import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignupForm from './signupForm';

import * as actions from '../../actions'

class Signup extends Component {

  onSubmit = (fields) => {
    this.props.signUp(fields, () => {
      console.log('Navagate to the dashboard');
      this.props.history.push('/dashboard');
    });
  }

  render() {
    return (
      <div className='sign-up'>
        <SignupForm onSubmit={(event) => this.onSubmit(event)}/>
      </div>
    );
  }
}

export default connect(null, actions)(Signup);
