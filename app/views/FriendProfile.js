import React, {Component} from 'react'
import Feed from './Feed'
import {connect} from 'react-redux'
import {addFriend, deleteFriend} from '../controller'
import axios from 'axios';

class FriendProfile extends Component {
  constructor (props) {
    super(props)
    this.addFriend = this.addFriend.bind(this)
    this.deleteFriend = this.deleteFriend.bind(this)
  }

   addFriend (event) {
      event.preventDefault()
      var friendName = this.props.location.query.authorLink || this.props.location.query.friendLink
      var id = this.props.location.query.id;

      var authOptions = {
         method: 'POST',
         url: 'http://localhost:3001/friend',
         params: {  
            id: id
         },
         headers: {
            'x-access-token': ''+localStorage.getItem("token"),
            'Content-Type': 'application/json'
         }
      };
      
      // this.props.dispatch(addFriend(friendName));
      axios(authOptions)
         .then(res => {
            console.log("Added friend", res);
            this.props.dispatch(addFriend(friendName));
         })
         .catch(err => {
            console.log(err);
         })
   }

   deleteFriend (event) {
      event.preventDefault()
      var friendName = this.props.location.query.authorLink || this.props.location.query.friendLink
      var id = this.props.location.query.id;

      var authOptions = {
         method: 'DELETE',
         url: 'http://localhost:3001/friend',
         params: {  
            id: id
         },
         headers: {
            'x-access-token': ''+localStorage.getItem("token"),
            'Content-Type': 'application/json'
         }
      };
      
      // this.props.dispatch(addFriend(friendName));
      axios(authOptions)
         .then(res => {
            console.log("Deleted friend", res);
            this.props.dispatch(deleteFriend(friendName));
         })
         .catch(err => {
            console.log(err);
         })
   }

  render () {
    var friendName = this.props.location.query.authorLink || this.props.location.query.friendLink

    var imagestyle = {
      'maxWidth': '200px',
      'maxHeight': '200px'
    }

    var image = 'https://pbs.twimg.com/profile_images/1724449330/stick_man_by_minimoko94-d2zvfn8.png';

    if (this.props.ListOfFriends.includes(friendName)) {
      return (
        <div className='main'>

          <div className='lefty'>
            <h1>{friendName}'s Profile</h1>
            <img src={image} style={imagestyle} />
            <form onSubmit={this.deleteFriend}>
              <button className='button'>Unfollow</button>
            </form>
          </div>

          <div className='newsFeed'>
            <br />
            <hr />
            <Feed author={this.props.route.store.getState().name} />
          </div>

        </div>
      )
    } else {
      return (
        <div className='main'>
          <div className='lefty'>
            <h1>{friendName}'s Profile</h1>
            <img src={image} style={imagestyle} />
            <p> Would you like to follow this person? </p>
            <form onSubmit={this.addFriend}>
              <button className='button'>Follow</button>
            </form>
          </div>
        </div>
      )
    }
  }
}

FriendProfile.propTypes = {
  dispatch: React.PropTypes.func,
  author: React.PropTypes.string
}

const mapStateToProps = state => ({ListOfFriends: state.ListOfFriends})

export default connect(mapStateToProps)(FriendProfile)
