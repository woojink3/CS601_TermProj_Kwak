import React from 'react';
import './Resume.css';

const Resume: React.FC = ():any => {
    return (
        <div className='resume-container'>
            <section className='head2'>
                <div className='head2-content'>
                    <h2>Woojin Kwak</h2>
                    <p>204 Ash Ct. Monmouth Junction, NJ 08852</p>
                    <p>Phone: (412) 735-4852</p>
                    <p>Email: woojink3@gmail.com</p>
                </div>
            </section>
            <section className='education'>
                <h3>Education</h3>
                <div className='education-rutgers'>
                    <h4>Rutgers University, School of Arts and Science</h4>
                    <p>BA in Information Technolody and Informatics</p>
                    <p>Minor in Business and Administration</p>
                    <p>Graduation: Jan 2021, GPA 3.39</p>
                </div>
                <div className='education-bu'>
                    <h4>Boston University Metropolitan College</h4>
                    <p>Master's in Software Development</p>
                    <p>September 2024 - Present</p>
                </div>
            </section>
            <section className='work-content'>
                <h3>Work Experience</h3>
                <div className='job'>
                    <h4>Chel's Clothes Closet: Part-time Order Picker</h4>
                    <p>-Pick orders from inventory and deliver them to shipping</p>
                    <p>-Organize and restock inventory</p>
                    <p>-Replace materials such as containers and labels when necessary</p>
                </div>
            </section>
            <section className='skill-content'>
                <h3>Skills</h3>
                <div className='skill'>
                    <h4>Strengths:</h4>
                    <p>Creative Problem-Solving, Logical Thinker, Analytical Thinker, Team Player, Attention to details, Organized, Computer Proficiency</p>
                    <h4>Programming:</h4>
                    <p>Java, JavaScript, HTML/CSS, Python</p>
                    <h4>Software and Tools:</h4>
                    <p>Microsoft Suite, Tableau, Figma, Adobe Photoshop</p>
                </div>
            </section>
        </div>
    );
};

export default Resume;