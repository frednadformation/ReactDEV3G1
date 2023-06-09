import React from 'react'
import { useLocation } from 'react-router-dom'


function Developpement() {
    const location = useLocation()
    
    
    console.log(location);
    console.log(location.pathname);

  return (
    <div>Developpement</div>
  )
}

export default Developpement