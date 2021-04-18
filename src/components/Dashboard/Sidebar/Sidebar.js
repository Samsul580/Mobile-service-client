import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard/orderList" className="text-white">
                         <span>Order list</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addService" className="text-white">
                         <span>Add service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/makeAdmin" className="text-white">
                         <span>Make admin</span>
                    </Link>
                </li>
                <li>
                    <Link to="/manageService" className="text-white">
                         <span>Manage services</span>
                    </Link>
                </li>
                
                <li>
                    <Link to="/order/:id" className="text-white">
                         <span>Order</span>
                    </Link>
                </li>
                <li>
                    <Link to="/bookingList" className="text-white">
                         <span>Booking List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/review" className="text-white">
                         <span>Add review</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;