import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import ProcessPayment from './ProcessPayment/ProcessPayment';
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
        fetch(`https://agile-woodland-49427.herokuapp.com/product/${id}`, {
            method: 'POST'
        })
            .then(response => response.json())
            .then(result => setOrder(result[0]))
    }, [])

    const handleOrder = (id) => {
        const newOrder = {...userInfo, ...newOrderInfo, id};
        fetch('https://agile-woodland-49427.herokuapp.com/addOrder', {
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
                    <div className="col-md-8 m-5">
                        <h1 className="mb-3">Process Order</h1>
                        <h5>Name: {displayName}</h5>
                        <h5>Email: {email}</h5>
                        <h5>Service Name: {name}</h5>
                        <h5>price: {price}</h5>
                        <h3>Payment option given below</h3>
                        <ProcessPayment handleOrder={handleOrder}></ProcessPayment>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;