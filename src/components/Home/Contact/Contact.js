import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact">
            <h1>GET IN TOUCH</h1>
            <p className="w-50 mx-auto my-4">1600 Pennsylvania Ave NW, Washington, DC 20500, United States of America. Tel: (202) 456-1111</p>
            <div className="container">
                <div class="input">
                    <form action="">
                        <input type="text" placeholder="Your Name" />
                        <input type="text" placeholder="Your Email" />
                        <textarea placeholder="Your Message"></textarea>
                        <button className="btn btn-primary my-5 p-3">SEND MESSAGE</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;