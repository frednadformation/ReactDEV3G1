import React, { Component } from 'react'
import './styles/newsletter.css'

class Newsletter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         nom : '',
         prenom : '',
         email : ''
      }

    }
    handleNomChange = event => {
        this.setState({nom : event.target.value})
    }

    handlePrenomChange = event => {
        console.log(event.target);
        if(event.target.value.length < 3){
            event.target.className = "borderRouge"
        }
        else{
            event.target.className = "borderVert"
        }
        this.setState({prenom : event.target.value})
    }
    handleEmailChange = event => {
        this.setState({email : event.target.value})
    }

    handleSubmit = event => {
        alert(`Merci, ${this.state.nom} ${this.state.prenom} d'avoir pris contact avec nous. Nous reviendrons vers vous a cet email : ${this.state.email} `)
    }

  render() {
        const {nom, prenom, email} = this.state
    return (
        

        <form onSubmit={this.handleSubmit}>
        <div>
            <label>Nom</label>
            <input
                type="text"
                value={nom}
                onChange={this.handleNomChange}
            />
        </div>
        <div>
            <label>Prénom</label>
            <input
                type="text"
                value={prenom}
                onChange={this.handlePrenomChange}
            />
        </div>
        <div>
            <label>E-mail</label>
            <input
                type="email"
                value={email}
                onChange={this.handleEmailChange}
            />
        </div>
       
        <button type="submit">Validation</button>
    </form>
    )
  }
}

export default Newsletter