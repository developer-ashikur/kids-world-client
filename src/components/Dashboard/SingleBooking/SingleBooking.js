import React from 'react';

const SingleBooking = ({user}) => {
    const {title, price} = user.service;
    const {status, name} = user;
    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{title}</td>
                <td>${price}</td>
                <td>{status}</td>
            </tr>
        </>
    );
};

export default SingleBooking;