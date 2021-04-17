import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div>
            <div className="container-fluid">
                <h1>Dashboard</h1>
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar></Sidebar>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;