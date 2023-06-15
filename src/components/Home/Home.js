import React, {useEffect, useReducer} from 'react'
import axios from 'axios'
// import {Button} from "../styles/Button.style"

function Home() {
  const initialState = {
    loading: true,
    error: false,
    contacts: {},
    errorMessage: ''

  };

  const reducer = (state, action) =>{
    switch (action.type){
      case "FETCH_SUCCESS": return {
        loading: false,
        contacts: action.payload,
        error: false
      }
      case "FETCH_ERROR": return {
        loading: false,
        contacts: [],
        error: true,
        errorMessage: "something went wrong"
      };
      default : return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() =>{
    axios.get('http://localhost:5000/', {withCredentials: true})
    .then(response =>{
      console.log(response.data);
      dispatch({type: 'FETCH_SUCCESS', payload: response.data});
    })
    .catch(error =>{

      console.log(error);
      dispatch({type: 'FETCH_ERROR', payload: error})
    });
  },[] )

  try{
    var returncontacts = state.contacts.map(contact=>{
      return(
        <div>
        <h1>{contact.firstname}</h1>
        <h3>{contact.lastname}</h3>
        <p>{contact.email}</p>
        </div>
          )
      });
  }
  catch(error){
    console.log("utilisateur non connecté");       
    console.log(error);       
  }
  return (
    <React.Fragment>
      Bienvenue sur notre super site React !
      Voici la liste des contacts : 
      {returncontacts}
    
    </React.Fragment>
  )
}

export default Home