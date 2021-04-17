import React from 'react';
import team1 from '../../../images/t1.jpeg';
import team2 from '../../../images/t2.jpeg';
import team3 from '../../../images/t3.jpeg';
import team4 from '../../../images/t4.jpeg';
import './Team.css'

const Team = () => {
    return (
        <div className="team">
            <h1>MEET OUR BEAUTIFUL TEAM</h1>
            <p className="w-50 mx-auto my-4">We are a small team of designers and developers, who help brands with big ideas.</p>
            <div className="container team-area">
                <div className="team-box">
                    <img className="w-75 h-75" src={team1} alt=""/>
                    <h3>ANNE HATHAWAY</h3>
                    <h5>CEO / Marketing Guru</h5>
                </div>
                <div className="team-box">
                    <img className="w-75 h-75" src={team2} alt=""/>
                    <h3>ANNE HATHAWAY</h3>
                    <h5>CEO / Marketing Guru</h5>
                </div>
                <div className="team-box">
                    <img className="w-75 h-75" src={team3} alt=""/>
                    <h3>ANNE HATHAWAY</h3>
                    <h5>CEO / Marketing Guru</h5>
                </div>
                <div className="team-box">
                    <img className="w-75 h-75" src={team4} alt=""/>
                    <h3>ANNE HATHAWAY</h3>
                    <h5>CEO / Marketing Guru</h5>
                </div>
            </div>
        </div>
    );
};

export default Team;