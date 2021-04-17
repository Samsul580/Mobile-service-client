import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5055/orders')
            .then(response => response.json())
            .then(data => setOrders(data))
    }, [])
    console.log(orders);
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-9 mx-4">
                        <h1>Order list</h1>
                        <table className="table table-bordered">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email Id</th>
                                    <th scope="col">Service</th>
                                    <th scope="col">Payment Id</th>
                                </tr>
                            </thead>
                            {
                                orders.map(order =>
                                    <tbody>
                                        <tr>
                                            <td>{order.displayName}</td>
                                            <td>{order.email} {order.brand}</td>
                                            <td>{order.name}</td>
                                            <td>{order.id}</td>
                                        </tr>
                                    </tbody>
                                )
                            }
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;