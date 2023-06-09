import React, { useEffect, useReducer } from 'react'

import axios from 'axios'

function DataFetchReducer() {
    const initialState ={ 
        loading : true,
        error: '',
        posts : {}
    }

    const reducer =  (state, action ) => {

        switch (action.type) {
            case 'FETCH_SUCCESS':
                return{
                    loading : false,
                    posts : action.payload,
                    error: '',
                }
            case 'FETCH_ERROR':
                return{
                    loading: false,
                    error: "Something went wrong",
                    posts:{}
                }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(()=>{
        axios.get('https://mocki.io/v1/50c6ef10-32e2-462d-8ee1-32374d8f7ee4')
        .then(response =>{
            dispatch({type: 'FETCH_SUCCESS', payload: response.data.posts})
        })
        .catch(error =>{
            dispatch({type: 'FETCH_ERROR'});
        })
    })

  return (
    <div>
        {state.loading ? 'Loading...' : state.posts.map((post, index)=>{
            return (
                <React.Fragment key={index}>
                    <h1>{post.title}</h1>
                    <h3>userId : {post.userId}</h3>
                    <p>{post.body}</p>
                </React.Fragment>
            )
        })}


    </div>
  )
}

export default DataFetchReducer