import './App.css'
import FoodData from './components/FoodData'
import SearchData from './components/SearchData.jsx'
import ShowData from './components/ShowData.jsx'

import React, { Component } from 'react'

export default class App extends Component {
constructor(){
  super()
  this.state = {
    search : ""
  }
}

handleInput = (e) =>{
  this.setState({
    search:e.target.value
  })
}

  render() {
    return (
      <div>
        <SearchData input = {this.handleInput}/>
        {
          FoodData.filter((el)=>{
            if(this.state.search == " "){
              return el
            }

            else if(el.name.toLowerCase().includes(this.state.search.toLowerCase())){
              return el
            }

          }).map(food =>{
            return(
              <div key = {food.id}>
                <ShowData data= {food}/>
              </div>
            )
          })
        }

        
      </div>
    )
  }
}

