import React from 'react';
import skill1 from '../../../images/sk1.png';
import skill2 from '../../../images/sk2.png';
import skill3 from '../../../images/sk3.png';
import skill4 from '../../../images/sk4.png';
import './Skill.css'

const Skill = () => {
    return (
        <div className="skill">
            <h1>WE GOT SKILLS!</h1>
            <p className="w-50 mx-auto my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="container skill-area">
                <div>
                    <img src={skill1} alt="" />
                    <h3>iPhone service</h3>
                </div>
                <div>
                    <img src={skill2} alt="" />
                    <h3>Chinese phone service</h3>
                </div>
                <div>
                    <img src={skill3} alt="" />
                    <h3>Sony service</h3>
                </div>
                <div>
                    <img src={skill4} alt="" />
                    <h3>Overall service</h3>
                </div>
            </div>
        </div>
    );
};

export default Skill;