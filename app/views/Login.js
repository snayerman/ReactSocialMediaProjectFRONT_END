import React, {Component} from 'react'
import {connect} from 'react-redux'
import Form from './common/Form'
import axios from 'axios';

import {loginRequest} from '../controller'

class Login extends Component {
  constructor (props) {
    super(props)
    this._login = this._login.bind(this)
  }

  render () {
    const {dispatch} = this.props
    const {formState, currentlySending, error} = this.props.data

    console.log(this.props);
    return this.props.data.loggedIn ? (
      <div>
         {this.props.history.push('/')}
      </div>
    ) : (
      <div className='form-page__wrapper'>
         <div className='form-page__form-wrapper'>
         <div className='form-page__form-header'>
            <h2 className='form-page__form-heading'>Login</h2>
         </div>
         <Form data={formState} dispatch={dispatch} history={this.props.history} onSubmit={this._login} btnText={'Login'} error={error} currentlySending={currentlySending} />
         </div>
      </div>
    )
    /* return (
      <div className='form-page__wrapper'>
        <div className='form-page__form-wrapper'>
          <div className='form-page__form-header'>
            <h2 className='form-page__form-heading'>Login</h2>
          </div>
          <Form data={formState} dispatch={dispatch} history={this.props.history} onSubmit={this._login} btnText={'Login'} error={error} currentlySending={currentlySending} />
        </div>
      </div>
    ) */
  }

   _login (username, password) {
      let user = {userName: username, password: password};
      // console.log("USER: ", user);

      axios.post('http://localhost:3001/login', user).then(res => {
         localStorage.setItem("token", res.data.token);
         console.log("Logged in!", res);
         this.props.dispatch(loginRequest({username, password}))
      }).catch(err => {
         console.log("Login err!", err);
      });
   }
}

Login.propTypes = {
  data: React.PropTypes.object,
  history: React.PropTypes.object,
  dispatch: React.PropTypes.func
}

function select (state) {
  return {
    data: state
  }
}

export default connect(select)(Login)
