import React from 'react'

/*styles*/
import { TweetBox,MessageButtonTweet,IconsButtonImgTweet,RtButtonTweet,ExportButtonTweet,FavButtonTweet,TweetProfileImage,TweetIconsFunctions,TweetContentBox, TweetName, TweetLeeters, TweetImg, TopTweetBox, SeparatorDivTweet } from './Tweet.styles'

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
                        <MessageButtonTweet>
                            <IconsButtonImgTweet src={messageicon} alt='icon'/>
                        </MessageButtonTweet>
                        <RtButtonTweet>
                            <IconsButtonImgTweet src={rticon} alt='icon'/>
                        </RtButtonTweet>
                        <FavButtonTweet>
                            <IconsButtonImgTweet src={favicon} alt='icon'/>
                        </FavButtonTweet>
                        <ExportButtonTweet>
                            <IconsButtonImgTweet src={exporticon} alt='icon'/>
                        </ExportButtonTweet>
                    </TopTweetBox>
                </TweetContentBox>
            </TweetBox>
        </React.Fragment>
    )
}