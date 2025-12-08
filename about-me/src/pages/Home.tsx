import React from 'react';
import profile from '../img/profile.jpg';
import './Home.css';

function Profile() {
    return <img src={profile} width={300} alt="my-profile"></img>
}

const Home: React.FC = ():any => {
    return (
        <div className="home">
            <section className="head">
                <img src="https://images.unsplash.com/photo-1518873890627-d4b177c06e51?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="winter"
                    className="head-image"
                />
                <div className="head-content">
                    <h2>Woojin Kwak</h2>
                    <div className="profile-container"><Profile /></div>
                </div>
            </section>
            <section className="welcome">
                <div className="welcome-text">
                    <h3>Welcome to my website!</h3>
                    <p>Click the links above to navigate to any content.</p>
                </div>
            </section>
        </div>
    );
};

export default Home;