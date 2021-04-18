import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import SingleOrder from '../SingleOrder/SingleOrder';

const OrderList = () => {
    const [enrolledUsers, setEnrolledUsers] = useState([]);

    useEffect(() => {
        fetch('https://vast-hollows-66346.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setEnrolledUsers(data))
    }, []);

    return (
        <div className='container-fluid'>
            <div className="row ps-0">
                <div className="col-md-2">
                    <Sidebar style={{height: '100%'}} />
                </div>
                <div className="col-md-10">
                    <div className="row">
                        <h1>Order List</h1>
                        <hr />
                    </div>
                    <div className="row">
                        <div className='p-5 shadow rounded'>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email Id</th>
                                        <th scope="col">Service</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        enrolledUsers.map(user => <SingleOrder key={user._id} user={user}></SingleOrder>)
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

export default OrderList;