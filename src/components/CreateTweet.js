import React from 'react';
import '../css/CreateTweet.css'

/*Images*/
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.png'
import bigpp from '../images/big_profile_pic.png'


export const CreateTweet = () => {

    return(
        <React.Fragment>
            <div className='create-tweet-container'>
                <div className='create-tweet-subcontainer'>
                    <div className='create-tweet-profile-picture-container'>
                        <img className='create-tweet-profile-picture' src={bigpp} alt='Profile'/>
                    </div>
                    <div className='create-tweet-box-container'>
                        <input className='create-tweet-input-box' type='text' placeholder='¿Qué esta pasando?'></input>
                        <div className='create-tweet-buttons-container'>
                            <div className='adders-buttons-container'>
                                <button className='icons-buttons'>
                                    <img className='icons-buttons-img' src={icon1} alt='icon'/>                                    </button>
                                <button className='icons-buttons'>
                                    <img className='icons-buttons-img' src={icon2} alt='icon'/>
                                </button>
                                <button className='icons-buttons'>
                                    <img className='icons-buttons-img' src={icon3} alt='icon'/>
                                </button>
                                <button className='icons-buttons'>
                                    <img className='icons-buttons-img' src={icon4} alt='icon'/>
                                </button>
                            </div>
                            <div className='tweet-button-container'>
                                <button className='create-create-tweet-button'>Tweet</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}