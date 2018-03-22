import React, {Component} from 'react'
import {connect} from 'react-redux'
import Post from './Post'
import PostForm from './PostForm'

import {addNewsfeed} from '../controller'

class newsFeed extends Component {
  constructor (props) {
    super(props)
    this.handleNewPost = this.handleNewPost.bind(this)
  }

  handleNewPost (post) {
    this.props.dispatch(addNewsfeed({post}))
  }
  render () {
     let that = this;
    const post = this.props.posts.map((post, index) => {
      return <Post key={index} value={post.post} />
     })

    return (
      <div className='feed'>
        {post}
        <PostForm onSubmit={this.handleNewPost} />
      </div>
    )
  }
}

newsFeed.propTypes = {
  dispatch: React.PropTypes.func
}

const mapStateToProps = state => ({
  posts: state.posts
})

export default connect(mapStateToProps)(newsFeed)
