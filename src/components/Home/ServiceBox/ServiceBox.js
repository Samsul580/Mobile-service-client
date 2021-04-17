import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceBox.css'

const ServiceBox = (props) => {
    const { name, price, image, _id } = props.service;
    return (
        <div className="service-box">
            <Link to={`/order/${_id}`}>
                
                    <img className="w-50 h-50" src={`data:image/jpeg;base64,${image.img}`} alt="" />
                    <h3>{name}</h3>
                    <h4>${price}</h4>
                
            </Link>
        </div>
    );
};

export default ServiceBox;