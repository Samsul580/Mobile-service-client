import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const Order = () => {
    const {id} = useParams();
    const [order, setOrder] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {displayName, email} = loggedInUser;
    const userInfo = {displayName, email};
    const {name, price} = order;
    const newOrderInfo = {name, price};
    useEffect(() => {
        fetch(`http://localhost:5055/product/${id}`, {
            method: 'POST'
        })
            .then(response => response.json())
            .then(result => setOrder(result[0]))
    }, [])

    const handleOrder = () => {
        const newOrder = {...userInfo, ...newOrderInfo};
        fetch('http://localhost:5055/addOrder', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newOrder)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        console.log(newOrder);
    }
    
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-8">
                        <h1>Add Order</h1>
                        <h3>name: {displayName}</h3>
                        <h3>name: {email}</h3>
                        <h3>name: {name}</h3>
                        <h3>price: {price}</h3>
                        <button className="btn btn-primary" onClick={handleOrder}>Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;