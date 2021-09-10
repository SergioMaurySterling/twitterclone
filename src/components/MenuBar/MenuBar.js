import React from 'react';

/*Images*/
import logo from '../images/twitterlogo.png'
import home from '../images/Home.png'
import hashtag from '../images/Hashtag.png'
import notification from '../images/Notification.png'
import messages from '../images/Message.png'
import bookmarks from '../images/Bookmark.png'
import list from '../images/List.png'
import profilepicture from '../images/profile.png'
import more from '../images/More.png'

/*Styles*/
import {MainMenuBar,
        MenubarButtonsContainer,
        MenuBarLogo,
        MenuBarButton,
        MenubarButtonsText,
        MenubarIcons,
        ButtonTweet,
        TweetButtonText
        } from '../MenuBar/MenuBar.styles.jsx'


export const MenuBar = () => {
    return(
        <React.Fragment>
            <MainMenuBar>
                <MenubarButtonsContainer>
                    <MenuBarLogo src={logo} alt='Logo de Twitter'/>
                    <div className='separator'></div>
                    <MenuBarButton>
                        <MenubarIcons src={home} alt='House icon'/>
                        <MenubarButtonsText>Inicio</MenubarButtonsText>
                    </MenuBarButton>
                    <MenuBarButton>
                        <MenubarIcons src={hashtag} alt='House icon'/>
                        <MenubarButtonsText>Explorar</MenubarButtonsText>
                    </MenuBarButton>
                    <MenuBarButton>
                        <MenubarIcons src={notification} alt='House icon'/>
                        <MenubarButtonsText>Notificaciones</MenubarButtonsText>
                    </MenuBarButton>
                    <MenuBarButton>
                        <MenubarIcons src={messages} alt='House icon'/>
                        <MenubarButtonsText>Mensajes</MenubarButtonsText>
                    </MenuBarButton>
                    <MenuBarButton>
                        <MenubarIcons src={bookmarks} alt='House icon'/>
                        <MenubarButtonsText>Guardados</MenubarButtonsText>
                    </MenuBarButton>
                    <MenuBarButton>
                        <MenubarIcons src={list} alt='House icon'/>
                        <MenubarButtonsText>Lista</MenubarButtonsText>
                    </MenuBarButton>
                    <MenuBarButton>
                        <MenubarIcons src={profilepicture} alt='House icon'/>
                        <MenubarButtonsText>Perfil</MenubarButtonsText>
                    </MenuBarButton>
                    <MenuBarButton>
                        <MenubarIcons src={more} alt='House icon'/>
                        <MenubarButtonsText>Más</MenubarButtonsText>
                    </MenuBarButton>
                    <ButtonTweet>
                        <TweetButtonText>Tweet</TweetButtonText>
                    </ButtonTweet>
                </MenubarButtonsContainer>
            </MainMenuBar>
        </React.Fragment>
    )
}