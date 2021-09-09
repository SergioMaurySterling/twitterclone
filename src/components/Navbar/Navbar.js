import React from 'react';

/*Images*/
import favtweets from '../images/favs_tweets.png'

/*Styles*/
import {MainNavbar,NavbarContainer,NavbarText} from '../Navbar/Navbar.styles.jsx'

export const Navbar = () => {
    return(
        <MainNavbar>
            <NavbarContainer>
                <NavbarText>Inicio</NavbarText>
                <img className='Navbar-icon' src={favtweets} alt='Icono de tweets destacados'/>
            </NavbarContainer>
        </MainNavbar>
    )
}