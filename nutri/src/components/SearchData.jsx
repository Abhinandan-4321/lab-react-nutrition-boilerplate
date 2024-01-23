import React, { Component } from 'react'

class SearchData extends Component {
  
  render() {
    return (
      <div>
        <input className = "searchBar"type="text" onChange={(e)=>{this.props.input(e)}}/>
      </div>
    )
  }
}

export default SearchData;
