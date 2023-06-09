import React, {useEffect, useReducer} from 'react'
import axios from 'axios'

function BlogIndex() {
    const initialState = {
        loading: true,
        error : '',
        blogs: {}
    }

    const reducer = (state, action) =>{
        switch(action.type){
            case 'FETCH_SUCCESS': return {
                loading: false,
                error: '',
                blogs: action.payload
            }
            case 'FETCH_ERROR': return {
                loading: false,
                blogs: {},
                error: 'Something went wrong'
            }
            default: return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() =>{
        axios.get('http://localhost:5000/myblog')
        .then(response =>{
            dispatch({type: 'FETCH_SUCCESS', payload: response.data})
        })
        .catch((error) =>{
            dispatch({type: 'FETCH_ERROR', payload: error});
        })
    }, [])
  return (
    <React.Fragment>
        {state.loading ? 'Loading' : state.blogs.map((blog, index) => {
            return (
                <React.Fragment key={index}>
                    <h1>{blog.titre}</h1>
                    <h2>{blog.username}</h2>
                    <h2>{blog.imagename}</h2>
                    <img src={`http://localhost:5000/${blog.imagename}`} />
                </React.Fragment>
            )
        })}
    </React.Fragment>
  )
}

export default BlogIndex