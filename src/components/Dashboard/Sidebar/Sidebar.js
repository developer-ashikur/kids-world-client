import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logo.png';
import './Sidebar.css';

const Sidebar = ({style}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:4000/isAdmin`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data))
    },[loggedInUser.email]);
    return (
        <div className='sidebar pt-5' style={style}>
            <div>
                <Link to='/'><img src={logo} alt="" className="img-fluid w-50" /></Link>
            </div>
            {
                isAdmin || 
                <div className='pt-5'>
                <div>
                    <span><i className="fas fa-shopping-cart"></i></span>
                    <Link to="/book" alt='logo'>Book</Link>
                </div>
                <div>
                    <span><i className="fas fa-book"></i></span>
                    <Link to="/bookings" alt='logo'>Booking List</Link>
                </div>
                <div>
                    <span><i className="fas fa-envelope-open-text"></i></span>
                    <Link to="/review" alt='logo'>Review</Link>
                </div>
            </div>
            }
            {
                isAdmin && 
                <div className='pt-5'>
                <div>
                    <span><i className="fas fa-clipboard-list"></i></span>
                    <Link to="/orderList" alt='logo'>Order List</Link>
                </div>
                <div>
                    <span><i className="fas fa-plus"></i></span>
                    <Link to="/addService" alt='logo'>Add Service</Link>
                </div>
                <div>
                    <span><i className="fas fa-cogs"></i></span>
                    <Link to="/manageService" alt='logo'>Manage Services</Link>
                </div>
                <div>
                    <span><i className="fas fa-user-lock"></i></span>
                    <Link to="/makeAdmin" alt='logo'>Make Admin</Link>
                </div>
            </div>
            }
        </div>
    );
};

export default Sidebar;