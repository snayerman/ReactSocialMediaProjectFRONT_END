import React, {Component} from 'react'
import {connect} from 'react-redux'
import Form from './common/Form'

import {registerUser} from '../controller'

class Register extends Component {
  constructor (props) {
    super(props)

    this.register = this.register.bind(this)
  }

  render () {
    const {dispatch} = this.props
    const {formState, currentlySending, error} = this.props.data

    return (
      <div className='form-page__wrapper'>
        <div className='form-page__form-wrapper'>
          <div className='form-page__form-header'>
            <h2 className='form-page__form-heading'>Register</h2>
          </div>
          <Form data={formState} dispatch={dispatch} history={this.props.history} onSubmit={this.register} btnText={'Register'} error={error} currentlySending={currentlySending} />
        </div>
      </div>
    )
  }

  register (username, password) {
    this.props.dispatch(registerUser({username, password}))
  }
}

Register.propTypes = {
  data: React.PropTypes.object,
  history: React.PropTypes.object,
  dispatch: React.PropTypes.func
}

function select (state) {
  return {
    data: state
  }
}

export default connect(select)(Register)
