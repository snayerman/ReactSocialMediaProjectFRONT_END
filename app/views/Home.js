import React, {Component} from 'react'
import {connect} from 'react-redux'
import Feed from './Feed'
import axios from 'axios';
import {getSelf} from '../controller/index';

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {loggedIn: this.props.loggedIn}
  }

   componentDidMount() {
      if(localStorage.getItem("token") !== null) {
         var authOptions = {
            method: 'GET',
            url: 'http://localhost:3001/me',
            headers: {
               'x-access-token': ''+localStorage.getItem("token"),
               'Content-Type': 'application/json'
            }
         };

         axios(authOptions)
            .then(res => {
               console.log("Getting self", res);
               let ret = {
                  friends: res.data.friends,
                  userName: res.data.userName
               }

               authOptions.url = 'http://localhost:3001/post';
               axios(authOptions)
                  .then(res => {
                     ret.posts = res.data.posts;
                     this.props.dispatch(getSelf(ret));
                  }).catch(err => {
                     console.log(err);
                  })

            })
            .catch(err => {
               console.log(err);
            })
      }
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
