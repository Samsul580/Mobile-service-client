import './App.css';
import React, { createContext, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddService from './components/Dashboard/AddService/AddService';
import ManageService from './components/Dashboard/ManageService/ManageService';
import Login from './components/Login/Login';
import Review from './components/Dashboard/Review/Review';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Order from './components/Dashboard/Order/Order';
import BookingList from './components/Dashboard/OrderList/BookingList';

export const UserContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState([]);
    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <PrivateRoute path="/dashboard">
                        <Dashboard></Dashboard>
                    </PrivateRoute>
                    <PrivateRoute path="/addService">
                        <AddService></AddService>
                    </PrivateRoute>
                    <PrivateRoute path="/manageService">
                        <ManageService></ManageService>
                    </PrivateRoute>
                    <PrivateRoute path="/review">
                        <Review></Review>
                    </PrivateRoute>
                    <PrivateRoute path="/bookingList">
                        <BookingList></BookingList>
                    </PrivateRoute>
                    <PrivateRoute path="/order/:id">
                        <Order></Order>
                    </PrivateRoute>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
