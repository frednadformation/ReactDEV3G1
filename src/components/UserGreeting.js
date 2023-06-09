import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }

  render() {
    //if else
    // if(this.state.isLoggedIn)
    //     return (
    //       <div>Welcome Fred</div>
    //     )
    
    // else
    //    return <div>Welcome Guest !</div>
    
    //ternaire

    // return this.state.isLoggedIn ? (<div>Welcome Fred</div>) : (<div>Welcome Guest !</div>)
    //circuit-court

    // return this.state.isLoggedIn && (<div>Welcome Fred</div>)
    //Variable intermediaire :
    let message 
    if(this.state.isLoggedIn)
        message = <div>Welcome Fred</div>
    else
        message = <div>Welcome Guest </div>
    
        return message


  }
}

export default UserGreeting