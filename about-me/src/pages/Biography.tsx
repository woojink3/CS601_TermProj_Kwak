import React from 'react';
import wplogo from '../img/William-Paterson-Logo.jpg';
import rlogo from '../img/Rutgers_University_logo.png';
import './Biography.css';


function WpLogo() {
    return <img src={wplogo} width={300} alt="wp-logo"></img>
}

function RutgersLogo() {
    return <img src={rlogo} width={300} alt="rutgers-logo"></img>
}

const Biography: React.FC = ():any => {
    return (
        <div className='bio-container'>
            <h2>About Me</h2>
            <div className='bio-content'>
                <p>My name is Woojin Kwak. I was born in Seoul, South Korea. I currently live in New Jersey and one fun thing about is that I have an adorable dog named "Tiki".</p>
                <p>
                    I came to the United States when I was three years old and the first place I lived in was Pittsburgh, PA.
                    During my 8th grade year, I moved to New Jersey to finish the remainder of my education. Some memorable moments here were the times I spent with my friends,
                    and the club activities in a club known as "MASK" which stands for Montgomery Advocates for Solidarity and Kindness.
                    This club raised awareness for domestic violence and relationship abuse, and I enjoyed my time contributing to their events such as creating banners and videos.
                    I graduated from Montgomery High School during the year 2016. Afterwards, I attended William Paterson University for my first two years of college with my major undecided.
                </p>
                <p><WpLogo /></p>
                <p>
                    After my sophomore year, I transferred to Rutgers University and graduated with a bachelor's degree in Information Technology with a minor in Business Administration.
                    During my time at this institution, I had the pleasure of working on a couple of UI/UX projects, and join a club known as Creation of Game Society where I had a little exposure to game development.
                    Soon Covid-19 came hit and I had to finish the remainder of my semesters at home.
                </p>
                <p><RutgersLogo /></p>
                <p>
                    I am now a part-time student of Boston University, striving to earn Master's Degree in Software Development.
                </p>
            </div>
        </div>
    )
};

export default Biography;