import React, { useEffect, useState } from 'react';
import ServiceBox from '../ServiceBox/ServiceBox';
import './Service.css'

const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://agile-woodland-49427.herokuapp.com/service')
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="service">
            <h1>SERVICES WE PROVIDE</h1>
            <p className="w-50 mx-auto my-4">We are working with both individuals and businesses from all over the globe to create awesome phones and device.</p>
            <div className="container service-area">
                
                {
                    services.map(service => <ServiceBox service={service} key={service._id}></ServiceBox>)
                }
            </div>
        </div>
    );
};

export default Service;