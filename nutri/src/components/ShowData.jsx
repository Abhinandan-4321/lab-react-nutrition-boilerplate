import React, { Component } from 'react'
import Total from './Total'

export default class Showdata extends Component {

    constructor(){
        super()
        this.state = {
            counter : 0,
            totalCalorie : 0
        }
    }

    handleIncrement=()=>{
        this.setState({
            totalCalorie:(this.props.data.cal*this.state.counter)
        })
    }

    handleAddClick=(e)=>{
        this.setState({
            counter:e
        })
    }

    handleReset=()=>{
        this.setState({
            counter: 0,
            totalCalorie: 0
        })
    }

  render() {
    return (
      <div className='item-container'>
        
            <div className='name'>
            <img className="images"src={this.props.data.img} alt="" />
            <div className="text">{this.props.data.name}</div>
            </div>

            
        
            <div>

                <div className='input-contain'>
                    
                <input type="number" onChange = {(e)=>this.handleAddClick(e.target.value)} className='inputnum'/>
                <div className="plusBtn"onClick = {this.handleIncrement}>+</div>
                <div className = "counter-container">
                <div>{this.state.counter}&nbsp;{this.props.data.name} =&nbsp;</div>
                <div> {this.state.totalCalorie}&nbsp;Calories</div>
                </div>
                <button className="reset-Btn"onClick = {this.handleReset}>Reset</button>
                </div>

                
                

                {/* <Total name = {this.props.food.name} totalCalorie={this.state.totalCalorie} count = {this.state.counter}/> */}

            </div>
      </div>
    )
  }
}
