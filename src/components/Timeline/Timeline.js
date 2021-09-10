import React from 'react';

/*Components*/
import {Tweet} from '../Tweet/Tweet.jsx'

/*Images*/
import tweet1 from '../images/tweet1.png'
import tweet2 from '../images/tweet2.png'
import tweet3 from '../images/tweet3.png'
import tweet4 from '../images/tweet4.png'
import jorge from '../images/jorge.png'
import annie from '../images/annie.png'
import serenity from '../images/serenity.png'
import dianne from '../images/dianne.png'
import dustin from '../images/dustin.png'

/*Styles*/
import {TimelineContainer} from '../Timeline/Timeline.styles.jsx'

let tweets = [
    {name:'Annie',username:'annie',profilepicture:annie,time:'14s',message:'This is a tweet. It can be long, or short. Depends on what you have to say. It can have some hashtags too. #likethis This is a tweet. It can be long, or short. Depends on what you have to say. It can have some hashtags too. #likethis ',photo:tweet1},
    {name:'Jorge Mckinney',username:'TravisWade',profilepicture:jorge,time:'14s',message:'This is a tweet. It can be long, or short. Depends on what you have to say. It can have some hashtags too. #likethis ',photo:''},
    {name:'Serenity Jones',username:'CrystalRobinson',profilepicture:serenity,time:'14s',message:'This is a tweet. It can be long, or short. Depends on what you have to say. It can have some hashtags too. #likethis. This is a tweet. It can be long, or short. Depends on what you have to say. It can have some hashtags too. #likethis This is a tweet. It can be long, or short. Depends on what you have to say. It can have some hashtags too. #likethis ',photo:tweet2},
    {name:'Dianne Fisher',username:'ClydeLowe',profilepicture:dianne,time:'14s',message:'This is a tweet. It can be long, or short. Depends on what you have to say. It can have some hashtags too. #likethis ',photo:tweet3},
    {name:'Dustin Alexander',username:'KistinMurphy',profilepicture:dustin,time:'14s',message:'This is a tweet. It can be long, or short. Depends on what you have to say. It can have some hashtags too. #likethis ',photo:tweet4},
]
export const Timeline = () => {
    return (
        <React.Fragment>
            <TimelineContainer>
                {tweets.map((t)=>{
                    return (
                        <Tweet
                            key={t.index}
                            name={t.name}
                            username={t.username}
                            profilepicture={t.profilepicture}
                            time={t.time}
                            message={t.message}
                            photo={t.photo}
                        />
                    )
                })}
            </TimelineContainer>
        </React.Fragment>
    )
}