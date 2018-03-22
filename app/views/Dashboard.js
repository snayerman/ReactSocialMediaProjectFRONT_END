import React, {Component} from 'react'
import Search from './Search'
import Feed from './Feed'
import ImageUpload from './ImageUpload'
import {connect} from 'react-redux'
import axios from 'axios';

import {getSelf, getAllUsers} from '../controller/index';

class Dashboard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: this.props.name
    }
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

         authOptions.url = 'http://localhost:3001/users';

         axios(authOptions)
            .then(res => {
               console.log("Getting all users", res.data);
               this.props.dispatch(getAllUsers(res.data));
            })
            .catch(err => {
               console.log(err);
            })
      }
   }

   render () {
      var imagestyle = {
        'maxWidth': '200px',
        'maxHeight': '200px'
      }
      var image = 'http://images2.gazzettaobjects.it/includes2013/images/scribble_default_user.png';

      if(localStorage.getItem("token") === null)
         this.props.history.push('/login');

      return (
         <div className='main'>

         <div className='lefty'>
            <h1>Welcome back! {this.state.name}</h1>
            <img src={image} style={imagestyle} />
         </div>

         <div className='righty'>
            <Search />
         </div>

         <div className='newsFeed'>
            <br />
            <h1>Facebook Wall</h1>
            <hr />
            <Feed author={this.props.name} />
         </div>

         </div>
      )
   }
}

const mapStateToProps = state => ({name: state.name})

export default connect(mapStateToProps)(Dashboard)
