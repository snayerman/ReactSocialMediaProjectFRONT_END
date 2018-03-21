import React, {Component} from 'react'
import {Link} from 'react-router'

class List extends Component {
   constructor(props) {
      super(props);
   }
   
   goToProfile(id) {
      console.log(this);
      this.props.history.push({
         pathname: '/friends',
         query: {
            authorLink: authorLink.userName,
            id: authorLink._id
         }
      })
   }

   render () {
      let that = this;
      
      return (
         <ul className='list-group'>
         {this.props.items.map(function (authorLink, idx) {
            const newTo = {
               pathname: `/friends`,
               query: {
                  authorLink: authorLink.userName
               }
            }

            return <li key={idx} className='list-group-item'>
               {/* <Link to={newTo}>{authorLink.userName}</Link> */}
               <a href='#' onClick={() => that.goToProfile(authorLink._id)}>{authorLink.userName}</a>
            </li>
         })}
         </ul>
      )
   }
}

export default List
