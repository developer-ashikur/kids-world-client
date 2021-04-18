import React from 'react';
import { useForm } from 'react-hook-form';

const SingleOrder = ({ user }) => {
    const { register, handleSubmit } = useForm();
    const { name, email, status, _id } = user;
    const { title } = user.service;

    const onSubmit = data => {
        console.log(data);
        fetch(`https://vast-hollows-66346.herokuapp.com/updateStatus/${_id}`, {
            method: 'PATCH',
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => console.log(success))
    };

    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{title}</td>
                <td>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className="row">
                            <div className="col-8">
                                <select {...register("status")} className='form-select'>
                                    <option value="Pending" defaultValue='selected'>{status}</option>
                                    <option value="On Going">On Going</option>
                                    <option value="Done">Done</option>
                                </select>
                            </div>
                            <div className="col-4">
                                <input type="submit" className='btn btn-danger' />
                            </div>
                        </div>
                    </form>
                </td>
            </tr>
        </>
    );
};

export default SingleOrder;