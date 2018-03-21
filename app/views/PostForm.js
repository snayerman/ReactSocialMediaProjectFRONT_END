import React, {Component} from 'react'
import {connect} from 'react-redux'

class PostForm extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
     console.log("Making post!!", this);
    event.preventDefault()
    this.props.onSubmit({
      friend: this.friend.value,
      category: this.category.value,
      content: this.content.value,
      author: this.props.author
    })
    this.friend.value = this.props.ListOfFriends[0]
    this.category.value = this.props.categories[0]
    this.content.value = ''
  }

  render () {
    return (
      <div className='post-form'>
        <form onSubmit={this.handleSubmit}>
          <label>
          To:
          <select ref={(input) => this.friend = input}>
            {this.props.ListOfFriends.map((friend, index) =>
              <option key={friend} value={friend}>{friend}</option>
            )}
          </select>

          </label>
          <label>
            Category:
            <select ref={(input) => this.category = input}>
              {this.props.categories.map((category, index) =>
                <option key={category} value={category}>{category}</option>
              )}
            </select>
          </label>
          <label>
            Content:
            <input type='text' ref={(input) => this.content = input} />
          </label>
          <button className='button'>Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  ListOfFriends: state.ListOfFriends
})

export default connect(mapStateToProps)(PostForm)
