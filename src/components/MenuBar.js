import React from 'react';
import '../css/MenuBar.css'

/*Images*/
import logo from '../images/Twitter-Logo.png'
import home from '../images/Home.png'
import hashtag from '../images/Hashtag.png'
import notification from '../images/Notification.png'
import messages from '../images/Message.png'
import bookmarks from '../images/Bookmark.png'
import list from '../images/List.png'
import profilepicture from '../images/profile.png'
import more from '../images/More.png'


export const MenuBar = () => {
    return(
        <React.Fragment>
            <div className='MenuBar'>
                <div className='MenuBar-buttons-container'>
                    <img className='MenuBar-logo' src={logo} alt='Logo de Twitter'/>
                    <div className='separator'></div>
                    <button className='MenuBar-button-home'>
                        <img className='MenuBar-icons' src={home} alt='House icon'/>
                        <p className='MenuBar-buttons-text'>Inicio</p>
                    </button>
                    <button className='MenuBar-button-hashtag'>
                        <img className='MenuBar-icons' src={hashtag} alt='House icon'/>
                        <p className='MenuBar-buttons-text'>Explorar</p>
                    </button>
                    <button className='MenuBar-button-notifications'>
                        <img className='MenuBar-icons' src={notification} alt='House icon'/>
                        <p className='MenuBar-buttons-text'>Notificaciones</p>
                    </button>
                    <button className='MenuBar-button-messages'>
                        <img className='MenuBar-icons' src={messages} alt='House icon'/>
                        <p className='MenuBar-buttons-text'>Mensajes</p>
                    </button>
                    <button className='MenuBar-button-bookmarks'>
                        <img className='MenuBar-icons' src={bookmarks} alt='House icon'/>
                        <p className='MenuBar-buttons-text'>Guardados</p>
                    </button>
                    <button className='MenuBar-button-list'>
                        <img className='MenuBar-icons' src={list} alt='House icon'/>
                        <p className='MenuBar-buttons-text'>Lista</p>
                    </button>
                    <button className='MenuBar-button-profile'>
                        <img className='MenuBar-icons' src={profilepicture} alt='House icon'/>
                        <p className='MenuBar-buttons-text'>Perfil</p>
                    </button>
                    <button className='MenuBar-button-more'>
                        <img className='MenuBar-icons' src={more} alt='House icon'/>
                        <p className='MenuBar-buttons-text'>Más</p>
                    </button>
                    <button className='MenuBar-button-tweet'>
                        <p className='MenuBar-tweet-button-text'>Tweet</p>
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}