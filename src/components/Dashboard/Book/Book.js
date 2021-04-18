import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import PaymentProcess from '../PaymentProcess/PaymentProcess';
import Sidebar from '../Sidebar/Sidebar';

const Book = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { id } = useParams();
    const [bookedService, setBookedService] = useState({});
    useEffect(() => {
        fetch(`http://localhost:4000/service/${id}`)
            .then(res => res.json())
            .then(data => setBookedService(data))
    }, [id]);
    const handlePayment = paymentId => {
        const enrolledUserInfo = {
            ...loggedInUser,
            service: bookedService,
            shipment: paymentId,
            status: 'Pending',
            orderTime: new Date()
        };
        console.log(enrolledUserInfo);

        fetch('http://localhost:4000/addBooking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(enrolledUserInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div className='container-fluid'>
            <div className="row ps-0">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <div className="row">
                        <h1>Book Service</h1>
                        <hr />
                    </div>
                    <div className="row">
                        <div className='w-50 mx-auto mt-5 shadow p-5 rounded'>
                            <h5>Service Name: {bookedService.title} </h5>
                            <h5>Price: ${bookedService.price} </h5>
                            <p>Please Pay With Your Credit Card</p>
                            <PaymentProcess handlePayment={handlePayment} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;