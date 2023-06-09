import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Services() {
  return (
    <React.Fragment>
    Services

    <nav >
      <Link to='/services/marketing' >Service Marketing </Link>
      <Link to='/services/developpement' >Service Developpement </Link>
    </nav>
    <Outlet />
    </React.Fragment>
  )
}

export default Services