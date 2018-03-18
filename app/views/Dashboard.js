import React, {Component} from 'react'
import Search from './Search'
import Feed from './Feed'
import ImageUpload from './ImageUpload'
import {connect} from 'react-redux'

class Dashboard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: this.props.name
    }
  }
  render () {
    return (
      <div className='main'>

        <div className='lefty'>
          <h1>Welcome back! {this.state.name}</h1>
          <ImageUpload />
        </div>

        <div className='righty'>
          <Search />
        </div>

        <div className='newsFeed'>
          <br />
          <h1>Facebook Wall</h1>
          <hr />
          <Feed author='Yeng Tan' />
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => ({name: state.name})

export default connect(mapStateToProps)(Dashboard)
