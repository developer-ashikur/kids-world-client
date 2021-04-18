import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import SingleBooking from '../SingleBooking/SingleBooking';

const Bookings = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [enrolledUserInfo, setEnrolledUserInfo] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:4000/bookedServices?email=${loggedInUser.email}`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
            }
        })
        .then(res => res.json())
        .then(data => setEnrolledUserInfo(data))
    },[loggedInUser.email]);
    return (
        <div className='container-fluid'>
            <div className="row ps-0">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <div className="row">
                        <h1>Booking List</h1>
                        <hr />
                    </div>
                    <div className="row">
                        <div className='p-5 shadow rounded'>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Service</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        enrolledUserInfo.map(user => <SingleBooking key={user._id} user={user}></SingleBooking>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bookings;