import React, {Component} from 'react'
import Feed from './Feed'
import {connect} from 'react-redux'
import {addFriend, deleteFriend} from '../controller'

class FriendProfile extends Component {
  constructor (props) {
    super(props)
    this.addFriend = this.addFriend.bind(this)
    this.deleteFriend = this.deleteFriend.bind(this)
  }

  addFriend (event) {
    event.preventDefault()
    var friendName = this.props.location.query.authorLink || this.props.location.query.friendLink
    this.props.dispatch(addFriend(friendName))
  }

  deleteFriend (event) {
    event.preventDefault()
    var friendName = this.props.location.query.authorLink || this.props.location.query.friendLink
    this.props.dispatch(deleteFriend(friendName))
  }

  render () {
    var friendName = this.props.location.query.authorLink || this.props.location.query.friendLink

    var imagestyle = {
      'max-width': '200px',
      'max-height': '200px'
    }

    var image

    if (friendName === 'Alex Boyd') {
      image = 'https://scontent-lax3-2.xx.fbcdn.net/v/t31.0-8/14054556_185808918498354_841006668792322777_o.jpg?oh=c4d91748f179fb9c72655a715b024314&oe=5AA57AE9'
    } else if (friendName === 'Paul Stoner') {
      image = 'https://scontent-lax3-2.xx.fbcdn.net/v/t31.0-8/12795103_538098086360158_462432492525878035_o.jpg?oh=fc1fb67c6f7054b4fce34a52ac5a5e72&oe=5A9D0976'
    } else if (friendName === 'Costin Pirvu') {
      image = 'https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/13892211_1114065301973670_9016146129470736783_n.jpg?oh=999df562abab8c4b969d62e8f3159f40&oe=5A8FFAD4'
    } else if (friendName === 'Jessie Smith') {
      image = 'https://scontent-lax3-2.xx.fbcdn.net/v/t31.0-8/19942845_1627254183953937_2753809561792257296_o.jpg?oh=6a4a3a4f9e67da819fafa350021e9a6a&oe=5A943697'
    } else if (friendName === 'Alidod Ghazvini') {
      image = 'https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/12920360_1287305551282561_7946541182252069852_n.jpg?oh=c6df46804eafd6de51911b81b69e40df&oe=5AAA6922'
    } else if (friendName === 'Alli Dinapoli') {
      image = 'https://scontent-lax3-2.xx.fbcdn.net/v/t31.0-8/23116647_1527954370630841_5809584315159581393_o.jpg?oh=7081c860cf213efaf92b95b04f6b9901&oe=5AA49251'
    } else if (friendName === 'Andrew Cofano') {
      image = 'https://scontent-lax3-2.xx.fbcdn.net/v/t31.0-8/18699411_1774493702566901_3021655125878370299_o.jpg?oh=cd9744a7882f7ca80373668f5fd13f95&oe=5AA8446F'
    } else if (friendName === 'Yeng Tan') {
      image = 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAvGAAAAJDk4ZWM2ZTM4LTk5NGQtNGI1Yy1iN2ZiLTdhZDRlOTE2YmM5MA.jpg'
    } else {
      image = 'https://pbs.twimg.com/profile_images/1724449330/stick_man_by_minimoko94-d2zvfn8.png'
    }

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
            <Feed author={friendName} />
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
