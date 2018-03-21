import React, {Component} from 'react'
import ErrorMessage from './ErrorMessage'
import LoadingButton from './LoadingButton'

import {changeForm} from '../../controller'

class Form extends Component {
   constructor (props) {
      super(props)

      this.onSubmit = this.onSubmit.bind(this)
      this.changeUsername = this.changeUsername.bind(this)
      this.changePassword = this.changePassword.bind(this)

      this.state = {
         username: '',
         password: ''
      }
  }

  changeUsername (event) {
   //  this.emitChange({...this.props.data, username: event.target.value})
      this.setState({username: event.target.value});
  }

  changePassword (event) {
   //  this.emitChange({...this.props.data, password: event.target.value})
   this.setState({password: event.target.value});
  }

   emitChange (/* newFormState */) {
   //  this.props.dispatch(changeForm(newFormState))
      console.log("Emitting change");
      // this.props.dispatch(changeForm({...this.props.data, username: this.state.username, password: this.state.password}));
   }

   onSubmit (event) {
      console.log("On submit");
      event.preventDefault()
      this.props.onSubmit(this.state.username, this.state.password)
   }

   render () {
      const {error} = this.props

      return (
         <form className='form' onSubmit={this.onSubmit}>
         {error ? <ErrorMessage error={error} /> : null}
         <div className='form__field-wrapper'>
            <input
               className='form__field-input'
               type='text'
               id='username'
               value={this.state.username}
               placeholder='username'
               onChange={this.changeUsername}
               autoCorrect='off'
               autoCapitalize='off'
               spellCheck='false' />
            <label className='form__field-label' htmlFor='username'>
               Username
            </label>
         </div>
         <div className='form__field-wrapper'>
            <input
               className='form__field-input'
               id='password'
               type='password'
               value={this.state.password}
               placeholder='••••••••••'
               onChange={this.changePassword} />
            <label className='form__field-label' htmlFor='password'>
               Password
            </label>
         </div>
         <div className='form__submit-btn-wrapper'>
            {this.props.currentlySending ? (
               <LoadingButton />
            ) : (
               <button className='form__submit-btn' type='submit' onClick={this.emitChange.bind(this)}>
               {this.props.btnText}
               </button>
               )}
         </div>
         </form>
      )
   }
}

Form.propTypes = {
  dispatch: React.PropTypes.func,
  data: React.PropTypes.object,
  onSubmit: React.PropTypes.func,
  changeForm: React.PropTypes.func,
  btnText: React.PropTypes.string,
  error: React.PropTypes.string,
  currentlySending: React.PropTypes.bool
}

export default Form
