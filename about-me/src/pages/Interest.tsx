import React from 'react';
import gaming from '../img/HSR.png';
import digital from '../img/digital-art.jpg';
import cooking from '../img/cooking.jpg';
import video from '../img/youtube.jpg'
import './Interest.css';

function Gaming() {
    return <img src={gaming} width={400} alt="hsr"></img>
}

function Digital() {
    return <img src={digital} width={330} alt="digi-art"></img>
}

function Cooking() {
    return <img src={cooking} width={400} alt="cooking"></img>
}

function Video() {
    return <img src={video} width={330} alt="video"></img>
}

const Interest: React.FC = ():any => {
    return (
        <div className='interest-container'>
            <h2>My Interests</h2>
            <div className='interest-items'>
                <section className='gaming'>
                    <div className='img-container'><Gaming /></div>
                    <div className='text-box'>
                        One of my biggest hobby is gaming. I enjoy gaming with my friend online as well gaming by myself to clear my head.
                        One game I enjoy playing is Honkai Star Rail, which is shown in the image of this section. It is a single-player game I play on
                        my computer and my mobile device. Some games I play with my friends are Overwatch, Battlefield 6, and Rainbow Six Siege.
                    </div>
                </section>
                <section className='digital-art'>
                    <div className='img-container'><Digital /></div>
                    <div className='text-box'>
                        Since high school I had a great interest in digital art. I started out drawing on my notebook and on my sketch which was given to me by my former art
                        teacher back at Pittsburgh as going away present to me before I moved to New Jersey. With some encouragement from my friends, I bought a Wacom Tablet
                        to start some of my digital art projects. Eventually I bought tablet monitor to have an easier time doing digital art. As time went on, I have had less
                        time to draw, but I still do digital art sketches from time to time to keep up the practice.
                    </div>
                </section>
                <section className='cook'>
                    <div className='img-container'><Cooking /></div>
                    <div className='text-box'>
                        Cooking has become a recent hobby for me. As I was watching videos of what other people had made, I was inspired to try to give my hand at cooking.
                        Although I am not the best cook, I was still able to make some simple dishes that ranges from Asian cuisine to some Westen Cuisine.
                    </div>
                </section>
                <section className='vid'>
                    <div className='img-container'><Video /></div>
                    <div className='text-box'>
                        During college, I have made some YouTube videos hoping to try my hand at being a content creator. However, most of my videos are private and I have
                        only decided to share it with just my friends. My videos would mostly be about my gameplays of some games that I play normally. Because of this, I have
                        had some interest in video editting and do it from time to time whenever time is available to me.
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Interest;