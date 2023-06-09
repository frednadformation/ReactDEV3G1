import React from 'react'

function Inscription() {
  return (
    <form action="http://localhost:5000/api/signup" method="post">

        <label for="">Username</label>
        <input type="text" name="username"/>

        <label for="">email</label>
        <input type="email" name="email"/>

        <label for="">password</label>
        <input type="password" name="password"/>

        <input type="submit" value="Inscription" />
    </form>
  )
}

export default Inscription