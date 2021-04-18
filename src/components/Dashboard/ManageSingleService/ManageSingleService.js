import React from 'react';

const ManageSingleService = ({service}) => {
    const {title, price, _id} = service;

    const handleDeleteService = (id) => {
        fetch(`https://vast-hollows-66346.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
    }
    return (
        <>
            <tr>
                <td>{title}</td>
                <td>${price}</td>
                <td>
                    <button className="btn btn-success me-3">Update</button>
                    <button className="btn btn-danger" onClick={() => {handleDeleteService(_id)}}>Delete</button>
                </td>
            </tr>
        </>
    );
};

export default ManageSingleService;