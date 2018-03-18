import React, {Component} from 'react'
import {connect} from 'react-redux'
import {changeName, changePassword} from '../controller'

class Settings extends Component {
  constructor (props) {
    super(props)
    this.state = {name: this.props.name, password: this.props.formState.password}

    this.changeName = this.changeName.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.handlePassWordChange = this.handlePassWordChange.bind(this)
  }

  changeName (event) {
    event.preventDefault()
    this.props.dispatch(changeName(this.state.name))
  }

  handleNameChange (event) {
    this.setState({name: event.target.value})
  }

  changePassword (event) {
    event.preventDefault()
    this.props.dispatch(changePassword(this.state.password))
  }

  handlePassWordChange (event) {
    this.setState({password: event.target.value})
  }

  render () {
    console.log(this.props.formState)
    return (
      <div className='main'>

        <form onSubmit={this.changeName}>
          <input type='text' value={this.state.name} onChange={this.handleNameChange} />
          <button className='button'>Change Name</button>
        </form>

        <form onSubmit={this.changePassword}>
          <input type='text' value={this.state.password} onChange={this.handlePassWordChange} />
          <button className='button'>Change Password</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({name: state.name, formState: state.formState})

export default connect(mapStateToProps)(Settings)
