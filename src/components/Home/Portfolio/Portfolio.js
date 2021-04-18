import React from 'react';
import portfolio1 from '../../../images/wr1.png';
import portfolio2 from '../../../images/wr2.png';
import portfolio3 from '../../../images/wr3.png';
import portfolio4 from '../../../images/wr4.png';
import './Portfolio.css'

const Portfolio = () => {
    return (
        <div className="portfolio">
            <h1>OUR PORTFOLIO</h1>
            <p className="w-50 mx-auto my-4">We solve many big projects in the world. Our compay is internation compay. We have many international projects.</p>
            <div className="container portfolio-area">
                <div>
                    <img className="w-75" src={portfolio1} alt=""/>
                    <h2>Project with iPhoene company</h2>
                </div>
                <div>
                    <img className="w-75" src={portfolio2} alt=""/>
                    <h2>Project with Realme company</h2>
                </div>
                <div>
                    <img className="w-75" src={portfolio3} alt=""/>
                    <h2>Project with samsung company</h2>
                </div>
                <div>
                    <img className="w-75" src={portfolio4} alt=""/>
                    <h2>Big project in our company</h2>
                </div>
            </div>
            <button className="btn btn-secondary m-3 p-3">LOAD MORE PROJECTS</button>
        </div>
    );
};

export default Portfolio;