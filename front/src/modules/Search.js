import React, { Component } from 'react'

class Search extends Component {
  state = {
    query: '',
  }


  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }


  render() {
    return (
        <nav className="navbar navbar-light bg-light">
          <form className="form-inline">
            <input className="form-control mr-sm-2"
                   placeholder="Search for..."
                   ref={input => this.search = input}
                   onChange={this.handleInputChange}
            />
            <p>{this.state.query}</p>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </nav>


    )
  }
}

export default Search