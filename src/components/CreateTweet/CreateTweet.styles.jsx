import styled from 'styled-components'

export const MainTweetContainer = styled.div `
    height: 142px;
    width: 692px;
    border-bottom: solid 1px #e7ecf065;
`
export const CreateTweetSubcontainer = styled.div `
    display: flex;
    margin-right: 25px;
    margin-left: 25px;
    margin-top: 10px;
    height:80%;
`

export const CreateTweetProfilePicture = styled.img `
    width: 48px;
    height: 48px;
`

export const CreateTweetBoxContainer = styled.div `
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 10px;
`

export const CreateTweetInputBox = styled.input `
    font-size: 19px;
    padding-top: 15px;
    border: none;
    outline: none;
    color: #000000;
`

export const CreateTweetButtonsContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    border-top: solid 1px #e7ecf065;
`

export const AddersButtonContainer = styled.div `
    display: flex;
    padding-top: 10px;
`

export const IconsButtons = styled.button `
    width: 35px;
    height: 35px;
    margin-right: 24px;
    margin-bottom: 0px;
    cursor: pointer;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border-radius: 20px;

    &:hover {
        background-color: #1da0f21e;
    }
`

export const CreateTweetButton = styled.button `
    height: 42px;
    width: 98px;
    background-color: #1DA1F2;
    border: none;
    border-radius: 55px;
    color: white;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background-color: #117dc0;
    }
`

export const TweetButtonContaner = styled.div `
    width: 197px;
    height: 42px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
`

export const IconsButtonsImg = styled.img `
    width: 20px;
    height: 20px;
    margin: 0px;
    padding: 0px;
`

export const Line = styled.td `
    border-left: 1px solid #BDBDBD;
    height: 70%;
`

export const CaptainDiv = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:50%;
    height: 100%;
    margin-right: 10px;
`
