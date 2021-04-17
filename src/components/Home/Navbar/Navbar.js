import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light container">
                <a className="navbar-brand text-light" href="#">PHONE SERVICE</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <a className="nav-link m-3 text-light" href="#">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link m-3 text-light" href="#">ABOUT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link m-3 text-light" href="#">WORK</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link m-3 text-light" href="#">CONTACT</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link m-3 text-light" to="/dashboard">DASHBOARD</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login">
                                <button className="btn m-3 btn-primary text-light">LOGIN</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;