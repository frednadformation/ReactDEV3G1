import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    increment(){
        this.setState((prevState)=>({
            count: prevState.count + 1
        }))

        console.log(this.state.count);
    }
    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    incrementProps(){
        this.setState((prevState)=>({
            count: prevState.count + this.props.valeur
        }))

    }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={()=>this.increment()}>+1 </button>
        <button onClick={()=>this.incrementFive()}>+ 5</button>
        <button onClick={()=>this.decrement()}> - 1</button>
        <button onClick={()=>this.incrementProps()}> +{this.props.valeur}</button>
      </div>
    )
  }
}

export default Counter