import React from 'react'

import { Link, Outlet } from 'react-router-dom'
import { Button } from '../styles/Button.style'
import { MyContainer } from '../styles/Div.style'
// import { GreenButton, RedButton, VioletButton } from '../styles/Button.style'

function Admin() {
  return (
    <React.Fragment>
        <nav>
            <Link to="/admin/dashboard">Dashboard</Link>
            <Link to="/admin/gestionpost">Gestion Post</Link>
        </nav>
        <Outlet />
        {/* <GreenButton>Bouton Vert</GreenButton>
        <RedButton>Bouton rouge</RedButton>
        <VioletButton>Bouton violet !!!!</VioletButton> */}
        <MyContainer>
            <Button backgroundColor="violet">Test</Button>
            <Button backgroundColor="red">Test</Button>
            <Button backgroundColor="green">Test</Button>
            <Button backgroundColor="blue">Test</Button>

        </MyContainer>

        

    </React.Fragment>

)
}

export default Admin