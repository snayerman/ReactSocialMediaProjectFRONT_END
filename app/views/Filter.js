import React, {Component} from 'react'

class Filter extends Component {
  constructor (props) {
    super(props)
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
  }

  handleChange (event) {
     console.log("SDFASDFASDFSDASDFASDF");
    this.setState({value: event.target.value})
  }

  handleKeyUp (event) {
    if (event.key === 'Enter') {
      this.props.onFilter(this.state.value)
    }
  }

  render () {
    return (
      <div>
        <label>
          <input type='search' value={this.state.value}
            onChange={this.handleChange}
            onKeyUp={this.handleKeyUp}
            placeholder='Filter by category...' />
        </label>
      </div>
    )
  }
}

export default Filter
