import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetchAll() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [posts, setPosts] = useState({})

    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then((response) => {
            setLoading(false)
            setError('')
            setPosts(response.data)
        })
        .catch((error) => {
            setLoading(false)
            setError('Something went wrong')
            setPosts({})
        })
    })


  return (
    <div>
        {loading ? 'Loading...' : posts.map((post, index) =>{
            return(
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

export default DataFetchAll