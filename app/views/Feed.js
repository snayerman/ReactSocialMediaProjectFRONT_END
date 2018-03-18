import React, {Component} from 'react'
import {connect} from 'react-redux'
import Post from './Post'
import PostForm from './PostForm'
import {addNewsfeed} from '../controller'
import axios from 'axios'

class Feed extends Component {
  constructor (props) {
    super(props)

    this.state = {
      filteredPosts: []
    }

    axios.get(`https://api.myjson.com/bins/152rpb`)
      .then(res => {
        if (this.props.posts.length < 1) {
          for (var i = 0; i < res.data.post.length; i++) {
            const post = res.data.post[i]
            this.props.dispatch(addNewsfeed(post))
          }
        }
      })

    this.handleNewPost = this.handleNewPost.bind(this)
  }

  handleNewPost (post) {
    this.props.dispatch(addNewsfeed(post))
  }

  render () {
    const profileAuthor = this.props.author
    const ListOfFriends = this.props.ListOfFriends

    if (profileAuthor !== '-') {
      const authorFeed = this.props.posts.filter(function (e) {
        return e.author === profileAuthor || e.friend === profileAuthor
      })

      const post = authorFeed.map((post, index) => <Post key={index} value={post} />)

      return (
        <div className='feed'>
          {post}
          <PostForm onSubmit={this.handleNewPost} />
        </div>
      )
    } else {
      const friendsFeed = this.props.posts.filter(function (e) {
        return ListOfFriends.includes(e.author) || e.author === 'Yeng Tan' || (ListOfFriends.includes(e.friend) && !ListOfFriends.includes('Timeline'))
      })

      const post = friendsFeed.map((post, index) => <Post key={index} value={post} />)

      return (
        <div className='feed'>
          {post}
          <PostForm onSubmit={this.handleNewPost} />
        </div>
      )
    }
  }
}

Feed.propTypes = {
  dispatch: React.PropTypes.func
}

const mapStateToProps = state => ({posts: state.posts, ListOfFriends: state.ListOfFriends})

export default connect(mapStateToProps)(Feed)
