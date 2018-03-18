import React, {Component} from 'react'
import {Link} from 'react-router'

class List extends Component {
  render () {
    return (
      <ul className='list-group'>
        {this.props.items.map(function (authorLink) {
          const newTo = {
            pathname: '/friends',
            query: {
              authorLink
            }
          }

          return <li className='list-group-item'>
            <Link to={newTo}>
              {authorLink}</Link>
          </li>
        })
}
      </ul>
    )
  }
}

export default List
