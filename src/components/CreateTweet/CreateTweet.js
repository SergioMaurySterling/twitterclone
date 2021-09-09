import React from 'react';

/*Images*/
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.png'
import bigpp from '../images/big_profile_pic.png'

/*styles*/
import {MainTweetContainer,
        CreateTweetSubcontainer,
        CreateTweetProfilePicture,
        CreateTweetBoxContainer,
        CreateTweetInputBox,
        CreateTweetButtonsContainer,
        AddersButtonContainer,
        IconsButtons,
        IconsButtonsImg,
        CreateTweetButton
        } from '../CreateTweet/CreateTweet.styles.jsx'


export const CreateTweet = () => {

    return(
        <React.Fragment>
            <MainTweetContainer>
                <CreateTweetSubcontainer>
                    <div className='create-tweet-profile-picture-container'>
                        <CreateTweetProfilePicture src={bigpp} alt='Profile'/>
                    </div>
                    <CreateTweetBoxContainer>
                        <CreateTweetInputBox type='text' placeholder='¿Qué esta pasando?'/>
                        <CreateTweetButtonsContainer>
                            <AddersButtonContainer>
                                <IconsButtons>
                                    <IconsButtonsImg src={icon1} alt='icon'/>
                                </IconsButtons>
                                <IconsButtons>
                                    <IconsButtonsImg src={icon2} alt='icon'/>
                                </IconsButtons>
                                <IconsButtons>
                                    <IconsButtonsImg src={icon3} alt='icon'/>
                                </IconsButtons>
                                <IconsButtons>
                                    <IconsButtonsImg src={icon4} alt='icon'/>
                                </IconsButtons>
                            </AddersButtonContainer>
                            <div className='tweet-button-container'>
                                <CreateTweetButton>Tweet</CreateTweetButton>
                            </div>
                        </CreateTweetButtonsContainer>
                    </CreateTweetBoxContainer>
                </CreateTweetSubcontainer>
            </MainTweetContainer>
        </React.Fragment>
    )
}