import React, {useEffect, useReducer} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react'

import Cookies from 'js-cookie';

import moment from 'moment/moment';
import 'moment/locale/fr'

moment().local('fr')


function FetchAllFilm() {
    const initialState = {
        loading: true,
        error : '',
        films : {}
    };
    
  const reducer = (state, action) =>{
    switch (action.type){
      case "FETCH_SUCCESS": return {
        loading: false,
        films: action.payload,
        error: ''
      }
      case "FETCH_ERROR": return {
        loading: false,
        films: {},
        error: "something went wrong"
      };
      default : return state
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() =>{
    axios.get('http://localhost:5000/allfilm')
    .then(response =>{
      console.log(Cookies.get('access_token'));
      dispatch({type: 'FETCH_SUCCESS', payload: response.data});
    })
    .catch(error =>{
      dispatch({type: 'FETCH_ERROR', payload: error})
    });
  }, [])

  return (
    <div>
    
    <Button animated>
      <Button.Content visible>Next</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
      {state.loading ? 'loading..' : state.films.map(film =>{
        return(
          <React.Fragment>
            <h1>{film.nom}</h1>
            <h2>{film.date}</h2>
            <h3>{film.realisateur}</h3>
            <p>{film.genre}</p>
            <p>{film._id}</p>
            <p>{moment(film.date_sortie).format('L')}</p>
            <Link to={`/updatefilm/${film._id}`}><button> Page Edit</button></Link>

          </React.Fragment>
        )
      })  }
    </div>
  )
}

export default FetchAllFilm