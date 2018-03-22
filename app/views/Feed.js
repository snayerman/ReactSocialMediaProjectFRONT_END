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

   //  axios.get(`https://api.myjson.com/bins/152rpb`)
   //    .then(res => {
   //      if (this.props.posts.length < 1) {
   //        for (var i = 0; i < res.data.post.length; i++) {
   //          const post = res.data.post[i]
   //          this.props.dispatch(addNewsfeed(post))
   //        }
   //      }
   //    })

    this.handleNewPost = this.handleNewPost.bind(this)
  }

   handleNewPost (post) {
      var authOptions = {
         method: 'POST',
         url: 'http://localhost:3001/post',
         data: {
            author: post.author,
            category: post.category,
            content: post.content,
            friend: post.friend
         },
         headers: {
            'x-access-token': ''+localStorage.getItem("token"),
            'Content-Type': 'application/json'
         }
      };

      console.log(authOptions.data);
      // this.props.dispatch(addFriend(friendName));
      axios(authOptions)
         .then(res => {
            console.log("Sending post", post);
            this.props.dispatch(addNewsfeed(post))
         })
         .catch(err => {
            console.log("ASDFASDFADSFADSF", err);
         })
   }

  render () {
    const profileAuthor = this.props.author
    const ListOfFriends = this.props.ListOfFriends

    if (profileAuthor !== '-') {
      const authorFeed = this.props.posts.filter(function (e) {
         // console.log("POST", e);
        return e.author === profileAuthor || e.friend === profileAuthor /* || e.friend === 'Timeline' */
      })

      let that = this;
      const post = authorFeed.map((post, index) => <Post key={index} value={post} {...that.props} />)

      return (
        <div className='feed'>
          {post}
          <PostForm author={this.props.author} onSubmit={this.handleNewPost} />
        </div>
      )
    } else {

      const friendsFeed = this.props.posts.filter(function (e) {
        return ListOfFriends.includes(e.author) || e.author === 'sam' || (ListOfFriends.includes(e.friend) && !ListOfFriends.includes('Timeline'))
      })

      const post = friendsFeed.map((post, index) => <Post key={index} value={post} />)
      //console.log(this.props.posts);
      //console.log(post);
      return (
        <div className='feed'>
          {post}
          <PostForm author={this.props.author} onSubmit={this.handleNewPost} />
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
