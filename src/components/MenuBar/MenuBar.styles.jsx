import styled from 'styled-components'

export const MainMenuBar = styled.div `
    width: 285px;
    height: 1922px;
    border-right: solid 1px #e7ecf065;
    @media (max-width: 1275px) {
        width: 285px;
        height: 1922px;
        border: solid 1px #E7ECF0;
        display: flex;
        justify-content: flex-end;
    }
`

export const MenubarButtonsContainer = styled.div `
    width: 180px;
    margin-left: 70px;
    margin-top: 32px;
    @media (max-width: 1275px) {
        width: 64px;
        margin-left: 70px;
        margin-top: 32px;
    }
`

export const MenuBarLogo = styled.img `
    margin-bottom: 32px;
    padding-left: 10px;
`
export const MenuBarButton = styled.button `
    width: auto;
    height: 45px;
    display: flex;
    align-items: center;
    border: none;
    margin-bottom: 10px;
    border-radius: 30px;
    background-color: white;
    cursor: pointer;

    &:hover {
        background-color: rgb(240, 238, 238);
    }

    @media (max-width: 1275px) {
        width: 50px;
        height: 45px;
        display: flex;
        align-items: center;
        border: none;
        margin-bottom: 10px;
        border-radius: 50px;
        background-color: white;

        &:hover {
            background-color: rgb(240, 238, 238);
        }
    }
`

export const MenubarButtonsText = styled.p `
    color: #333333;
    font-size: 19px;
    padding-right: 10px;
    font-family: 'Roboto';
    @media (max-width: 1275px) {
        display: none;
    }
`

export const MenubarIcons = styled.img `
    padding-left: 10px;
    width: 26px;
    height: 26px;
    padding-right: 10px;
    @media (max-width: 1275px) {
        padding-left: 5px;
        width: 26px;
        height: 26px;
        padding-right: 5px;
    }
`

export const ButtonTweet = styled.button `
    width: 180px;
    height: 50px;
    color: white;
    background-color: #1DA1F2;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    border:none;
    cursor: pointer;

    &:hover {
        background-color: #117dc0;
    }

    @media (max-width: 1275px) {
        width: 50px;
        height: 50px;
        color: white;
        background-color: #1DA1F2;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 30px;
        border:none;
        background-repeat: no-repeat;
        background-position-x: center;
        background-position-y: center;

        &:hover {
            background-color: #117dc0;
        }
    }
`

export const TweetButtonText = styled.p `
    font-size: 15px;
    font-weight: 700;

    @media (max-width: 1275px) {
        display: none;
    }
`