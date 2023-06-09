import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetchingOne() {
    //Chargement
    const [loading, setLoading] = useState(true)
    //Erreur
    const [error, setError] = useState('')
    //Données
    const [post, setPost] = useState({})

    useEffect(() =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/321`)
        .then((response) =>{
            setLoading(false)
            setError('')
            setPost(response.data)
        })
        .catch((error) =>{
            setLoading(false)
            setError('Something went wrong')
            setPost({})
        })
    })



  return (
    <div>
    <h1>
    titre du post : 
        {loading ? 'Loading...' : post.title}

    </h1>
    <p>
    {loading ? 'loading' : post.body}</p>

    {error ? error : null}

    </div>
  )
}

export default DataFetchingOne