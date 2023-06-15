import React from 'react'

function NewFilm() {
  return (
    <form action="http://localhost:5000/submitFilm" method="post">
        <label for="">Nom</label>
        <input type="text" name="nom" />
        <label for="">Date</label>
        <input type="text" name="date" />
        <label for="">Realisateur</label>
        <input type="text" name="realisateur" />
        <label for="">Genre</label>
        <input type="text" name="genre" />
        <label for="">Date de sortie</label>
        <input type="date" name="date_sortie" />

        <input type="submit" value="envoyer" />
    </form>


  )
}

export default NewFilm