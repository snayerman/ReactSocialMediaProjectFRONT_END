import React, {Component} from 'react'
import List from './List'
import {connect} from 'react-redux'
import {Link} from 'react-router';

class Search extends Component {
  constructor (props) {
    super(props)

    this.state = {
      listOfPeople: this.props.ListOfPeople,
      items: this.props.ListOfPeople
    }
    this.filterFriends = this.filterFriends.bind(this)
  }

  filterFriends (event) {
    var updateFriends = this.state.listOfPeople
    updateFriends = updateFriends.filter(function (e) {
      return e.toLowerCase().search(event.target.value.toLowerCase()) !== -1
    })
    this.setState({items: updateFriends})
  }

  render () {
   //   console.log("BLACK", this.props.ListOfPeople);
    return (
      <div className='filter-list'>
        <form>
          <fieldset className='form-group'>
            <input type='text' className='form-control form-control-lg' placeholder='Search' onChange={this.filterFriends} />
          </fieldset>
        </form>
        {/* <List items={this.props.ListOfPeople} /> */}
        <ul className='list-group'>
         {this.props.ListOfPeople.map(function (authorLink, idx) {
            const newTo = {
               pathname: `/friends`,
               query: {
                  authorLink: authorLink.userName,
                  id: authorLink._id
               }
            }

            return (
               <li key={idx} className='list-group-item'>
                  <Link to={newTo}>{authorLink.userName}</Link>
                  {/* <a href='#' onClick={() => that.goToProfile(authorLink._id)}>{authorLink.userName}</a> */}
               </li>
            );
         })}
         </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({ListOfPeople: state.ListOfPeople})

export default connect(mapStateToProps)(Search)
