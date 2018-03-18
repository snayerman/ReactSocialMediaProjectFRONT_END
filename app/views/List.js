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
          // return <li className="list-group-item" data-category={item} key={item}>{item}</li>
          // <Link to={'/ideas/'+this.props.testvalue }>Create Idea</Link>

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

// const newTo = { pathname: "/article/595212758daa6810cbba4104", param1: "Par1" };

// <Link to={newTo}> </Link>
