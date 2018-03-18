import React, {Component} from 'react'
import List from './List'
import {connect} from 'react-redux'

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
    return (
      <div className='filter-list'>
        <p> List of people!</p>
        <form>
          <fieldset className='form-group'>
            <input type='text' className='form-control form-control-lg' placeholder='Search' onChange={this.filterFriends} />
          </fieldset>
        </form>
        <List items={this.state.items} />
      </div>
    )
  }
}

const mapStateToProps = state => ({ListOfPeople: state.ListOfPeople})

export default connect(mapStateToProps)(Search)
