import React, {useEffect, useState} from 'react'
import axios from 'axios'

function FetchOneFilm() {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [film, setFilm] = useState({})

    useEffect(() =>{
        axios.get('http://localhost:5000/film/64803932052fd9a0dac0f4fe')
        .then((response) =>{
            setLoading(false)
            setError('')
            setFilm(response.data)
        })
        .catch((error) =>{
            setLoading(false)
            setError('Something went wrong')
            setFilm({})
        })
    })

  return (
    <div>
        {loading ? "loading" : film.nom}
        {loading ? "loading" : film.date}
        {loading ? "loading" : film.realisateur}
        {loading ? "loading" : film.genre}
    </div>
  )
}

export default FetchOneFilm