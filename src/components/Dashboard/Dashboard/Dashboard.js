import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    const [loggedInUser, setLoggeInUser] = useContext(UserContext);
    return (
        <div className='container-fluid'>
            <div className="row ps-0">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <h2 className='text-brand pt-5'>Welcome {loggedInUser.name} to Our Dashboard.</h2>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;