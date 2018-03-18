import React, {Component} from 'react'
import {Link} from 'react-router'

class Post extends Component {
  render () {
    const authorLink = this.props.value.author
    const friendLink = this.props.value.friend

    var fromPathName = '/friends'
    var toPathName = '/friends'

    if (authorLink === 'Yeng Tan') {
      fromPathName = '/dashboard'
    } else if (friendLink === 'Yeng Tan') {
      toPathName = '/dashboard'
    } else if (friendLink === 'Timeline') {
      toPathName = '/'
    }

    return (
      <div className='post'>
        <div className='formatLeft'>
          <span className={this.props.value.category}>{this.props.value.category}</span>
        </div>
        <div className='formatRight'>
          <span className='content'>{this.props.value.content}</span>
          <span className='author'>
            <Link to={{pathname: fromPathName, query: {authorLink}}}>
              {this.props.value.author}
            </Link>
        &nbsp;to&nbsp;
        <Link to={{pathname: toPathName, query: {friendLink}}}>
          {this.props.value.friend}
        </Link>
          </span>
        </div>
      </div>
    )
  }
}

export default Post
