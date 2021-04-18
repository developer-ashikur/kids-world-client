import React, { useEffect, useState } from 'react';
import ManageSingleService from '../ManageSingleService/ManageSingleService';
import Sidebar from '../Sidebar/Sidebar';

const ManageService = () => {
    const [serviceData, setServiceData] = useState([]);

    useEffect(() => {
        fetch('https://vast-hollows-66346.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServiceData(data))
    }, []);

    return (
        <div className='container-fluid'>
            <div className="row ps-0">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <div className="row">
                        <h1>Manage Service</h1>
                        <hr/>
                    </div>
                    <div className="row">
                    <div className='p-5 shadow rounded'>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Service Title</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        serviceData.map(service => <ManageSingleService key={service._id} service={service}></ManageSingleService>)
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

export default ManageService;