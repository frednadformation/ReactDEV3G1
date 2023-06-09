import React, {useEffect, useReducer} from 'react'
import axios from 'axios'
// import {Button} from "../styles/Button.style"

function Home() {
  const initialState = {
    loading: true,
    error: '',
    contacts: {}
  };

  const reducer = (state, action) =>{
    switch (action.type){
      case "FETCH_SUCCESS": return {
        loading: false,
        contacts: action.payload,
        error: ''
      }
      case "FETCH_ERROR": return {
        loading: false,
        contacts: {},
        error: "something went wrong"
      };
      default : return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() =>{
    axios.get('http://localhost:5000/')
    .then(response =>{
      console.log(response.data);
      dispatch({type: 'FETCH_SUCCESS', payload: response.data});
    })
    .catch(error =>{
      console.log(error);
      dispatch({type: 'FETCH_ERROR', payload: error})
    });
  })

  return (
    <React.Fragment>
    Bienvenue sur notre super site React !
    Voici la liste des contacts : 
    {state.loading ? 'Loading...' : state.contacts.map(contact =>{
      return(
        <div>
        <h1>{contact.firstname}</h1>
        <h3>{contact.lastname}</h3>
        <p>{contact.email}</p>

        </div>
      )

    })}



    
    </React.Fragment>
  )
}

export default Home