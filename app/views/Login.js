import React, {Component} from 'react'
import {connect} from 'react-redux'
import Form from './common/Form'

import {loginRequest} from '../controller'

class Login extends Component {
  constructor (props) {
    super(props)
    this._login = this._login.bind(this)
  }

  render () {
    const {dispatch} = this.props
    const {formState, currentlySending, error} = this.props.data

    return this.props.data.loggedIn ? (
      <div>
         {console.log(this)}
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
    this.props.dispatch(loginRequest({username, password}))
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
