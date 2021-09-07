import React from 'react';
import '../css/Navbar.css'

/*Images*/
import favtweets from '../images/favs_tweets.png'

export const Navbar = () => {
    return(
        <div className='Navbar'>
            <div className='Navbar-container'>
                <p className='Navbar-text'>Inicio</p>
                <img className='Navbar-icon' src={favtweets} alt='Icono de tweets destacados'/>
            </div>
        </div>
    )
}