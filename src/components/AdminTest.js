import React, { Component } from 'react'

class AdminTest extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         admin: true,
      }
    }
  
    render() {
        //ternaire
        // return this.state.admin ? <div><button>Edit</button></div> : <h1>Veuillez vous connecter en tant qu'admin</h1>
        let message
        if(this.state.admin)
            message = <button>Edit</button>
        else
            message = <h1>Veuillez vous connecter en tant qu'admin</h1>
        return message
    }
}

export default AdminTest