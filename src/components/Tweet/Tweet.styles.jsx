import styled from 'styled-components'
import {CreateTweetProfilePicture,IconsButtons, IconsButtonsImg} from '../CreateTweet/CreateTweet.styles'

export const TweetBox = styled.div `
    width: auto;
    height: auto;
    display: flex;
    padding-left: 25px;
    border-bottom: 1px solid #e7ecf065;

    &:hover {
        background-color: rgb(240, 238, 238)
    }
`
export const TweetContentBox = styled.div `
    width: 574px;
    padding-left: 16px;
`

export const TweetName = styled.p `
    font-size: 15px;
    font-weight: 700;
    color: #00000;
`
export const TweetLeeters = styled.p `
    font-size: 15px;
    font-weight: 400;
    color: #828282;
`

export const TweetImg = styled.img `
    width: 574px;
    height: 285px;
`

export const TopTweetBox = styled.div `
    display: flex;
`
export const SeparatorDivTweet = styled.div `
    width: 5px;
`

export const TweetProfileImage = styled(CreateTweetProfilePicture) `
    margin-top: 10px;
`

export const MessageButtonTweet = styled(IconsButtons) `
    margin-right: 135px;
    margin-bottom: 10px;
`
export const RtButtonTweet = styled(IconsButtons) `
    margin-right: 135px;
    margin-bottom: 10px;

    &:hover {
        background-color: rgb(0, 186, 124,0.2);
    }
`
export const FavButtonTweet = styled(IconsButtons) `
    margin-right: 135px;
    margin-bottom: 10px;

    &:hover {
        background-color: rgb(247,35,129,0.2);
    }
`

export const ExportButtonTweet = styled(IconsButtons) `
    margin-right: 135px;
    margin-bottom: 10px;
`

export const IconsButtonImgTweet = styled(IconsButtonsImg) `
    width: 18px;
    height: 15px;
`
