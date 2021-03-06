import React, {Component} from 'react'
import LoadingButton from './LoadingButton'
import {Link} from 'react-router'

import {logout, clearError} from '../../controller'

class Nav extends Component {
  constructor (props) {
    super(props)
    this._logout = this._logout.bind(this)
    this._clearError = this._clearError.bind(this)
  }

  render () {
    const navButtons = this.props.loggedIn
      ? (
        <div>
         <Link to='/dashboard' className='btn btn--dash btn--nav'>Profile</Link>
         <Link to='/settings' className='btn btn--login btn--nav' onClick={this._clearError}>Settings</Link>
         {/* {this.props.currentlySending
         ? (<LoadingButton className='btn--nav' />)
         : (
            <a href='#' className='btn btn--login btn--nav' onClick={this._logout}>Logout</a>
         )} */}
         <a href='#' className='btn btn--login btn--nav' onClick={this._logout}>Logout</a>
        </div>
      )
      : (
        <div>
          <Link to='/register' className='btn btn--login btn--nav' onClick={this._clearError}>Register</Link>
          <Link to='/login' className='btn btn--login btn--nav' onClick={this._clearError}>Login</Link>
        </div>
      )

    return (
      <div className='nav'>
        <div className='nav__wrapper'>
          <Link to='/' className='nav__logo-wrapper' onClick={this._clearError}>
            <h1 className='nav__logo'>Home</h1>
          </Link>
          {navButtons}
        </div>
      </div>
    )
  }

  _logout () {
    this.props.dispatch(logout());
    this.props.history.push('/login');
  }

  _clearError () {
    this.props.dispatch(clearError())
  }
}

Nav.propTypes = {
  loggedIn: React.PropTypes.bool,
  currentlySending: React.PropTypes.bool,
  dispatch: React.PropTypes.func
}

export default Nav
