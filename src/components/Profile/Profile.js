import React from 'react'
import { useParams } from 'react-router-dom'

function Profile() {
    const params = useParams();
    console.log(params.id);
  return (
    <div>Bonjour {params.id}, voici votre profil</div>
  )
}

export default Profile