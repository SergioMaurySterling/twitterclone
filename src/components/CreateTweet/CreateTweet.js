import React, {useState} from 'react';

/*Images*/
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.png'
import bigpp from '../images/big_profile_pic.png'
import plus from '../images/plus.png'
import elipse from '../images/elipse.png'

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
        CreateTweetButton,
        TweetButtonContaner,
        Line,
        CaptainDiv
        } from '../CreateTweet/CreateTweet.styles.jsx'


export const CreateTweet = () => {

    const [show, setShow] = useState(false);
    const handleChange = (e) => {
        let r = e.target.value
        if (r) {
            setShow(true)
        } else {
            setShow (false)
        }
    }

    const [tweet, setTweet] = useState({});
    const handleTweet = (e) => {
        
    }


    return(
        <React.Fragment>
            <MainTweetContainer>
                <CreateTweetSubcontainer>
                    <div className='create-tweet-profile-picture-container'>
                        <CreateTweetProfilePicture src={bigpp} alt='Profile'/>
                    </div>
                    <CreateTweetBoxContainer>
                        <CreateTweetInputBox type='text' onChange={handleChange} placeholder='¿Qué esta pasando?'/>
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
                            <TweetButtonContaner>
                                <CaptainDiv>
                                    {show &&
                                        <>
                                            <IconsButtonsImg src={elipse} alt='icon'/>
                                            <Line/>
                                            <IconsButtonsImg src={plus} alt='icon'/>
                                        </>
                                    }
                                </CaptainDiv>
                                <CreateTweetButton onClick={handleTweet}>Tweet</CreateTweetButton>
                            </TweetButtonContaner>
                        </CreateTweetButtonsContainer>
                    </CreateTweetBoxContainer>
                </CreateTweetSubcontainer>
            </MainTweetContainer>
        </React.Fragment>
    )
}