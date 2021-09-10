import React from 'react'

/*styles*/
import { TweetBox,TweetProfileImage,TweetIconsFunctions,TweetContentBox, TweetName, TweetLeeters, TweetImg, TopTweetBox, SeparatorDivTweet } from './Tweet.styles'
import { IconsButtonsImg } from '../CreateTweet/CreateTweet.styles'

/*Icons*/
import messageicon from '../images/messageicon.png'
import rticon from '../images/rticon.png'
import favicon from '../images/favicon.png'
import exporticon from '../images/exporticon.png'

export let Tweet = (props) => {
    return(
        <React.Fragment>
            <TweetBox>
                <TweetProfileImage src={props.profilepicture} alt='Foto de perfil de usuario'/>
                <TweetContentBox>
                    <TopTweetBox>
                        <TweetName>{props.name}</TweetName>
                        <SeparatorDivTweet/>
                        <TweetLeeters>{`@${props.username}`}</TweetLeeters>
                        <SeparatorDivTweet/>
                        <TweetLeeters>{props.time}</TweetLeeters>
                    </TopTweetBox>
                    <TweetLeeters>{props.message}</TweetLeeters>
                    <TweetImg src={props.photo} alt='Tweet foto'/>
                    <TopTweetBox>
                        <TweetIconsFunctions>
                            <IconsButtonsImg src={messageicon} alt='icon'/>
                        </TweetIconsFunctions>
                        <TweetIconsFunctions>
                            <IconsButtonsImg src={rticon} alt='icon'/>
                        </TweetIconsFunctions>
                        <TweetIconsFunctions>
                            <IconsButtonsImg src={favicon} alt='icon'/>
                        </TweetIconsFunctions>
                        <TweetIconsFunctions>
                            <IconsButtonsImg src={exporticon} alt='icon'/>
                        </TweetIconsFunctions>
                    </TopTweetBox>
                </TweetContentBox>
            </TweetBox>
        </React.Fragment>
    )
}