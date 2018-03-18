import React, {Component} from 'react'
import {connect} from 'react-redux'
import Feed from './Feed'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {loggedIn: this.props.loggedIn}
  }

  render () {
    var imagestyle = {
      'max-width': '800px',
      'max-height': '800px'
    }
    if (this.state.loggedIn === true) {
      return (
        <div className='main'>
          <section className='text-section'>
            <div className='newsFeed'>
              <br />
              <img src='app/newsfeed.png' style={imagestyle} />
              <hr />
              <Feed author='-' />
            </div>
          </section>
          <section className='text-section' />
        </div>
      )
    } else {
      return (
        <div className='main'>
          <p> Please Log in! </p>
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({loggedIn: state.loggedIn})

export default connect(mapStateToProps)(Home)
