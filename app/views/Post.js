import React, {Component} from 'react'
import {Link} from 'react-router'
import {Button, ButtonGroup} from 'react-bootstrap';
import axios from 'axios';

import {deletePost} from '../controller/index';

class Post extends Component {
   constructor(props) {
      super(props);
   }

   deletePost() {
      let id = this.props.value._id;

      var auth = {
         method: 'DELETE',
         url: 'http://localhost:3001/post/'+id,
         headers: {
            'x-access-token': ''+localStorage.getItem("token"),
            'Content-Type': 'application/json'
         }
      }

      console.log(this);

      axios(auth)
         .then(res => {
            console.log("Deleting post!", res);
            this.props.dispatch(deletePost(id));
         })
   }

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
          <Button onClick={() => this.deletePost()} bsStyle="danger" className="pull-right" style={{marginLeft: "25px", bottom: "8px", position: "relative"}}>Delete</Button>
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
