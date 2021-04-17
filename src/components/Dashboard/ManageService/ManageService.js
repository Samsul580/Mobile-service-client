import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const ManageService = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5055/service')
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])
    const deleteService = (id) => {
        fetch(`http://localhost:5055/delete/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(result => console.log('delete successfully', result))
    }
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-8 m-4">
                        <h1>Manage Services</h1>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Service name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    services.map(service => (
                                        <tr>
                                            <th scope="row">{service.name}</th>
                                            <td>{service.price}</td>
                                            <td><button className="btn btn-danger" onClick={() => deleteService(service._id)}>Delete</button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ManageService;