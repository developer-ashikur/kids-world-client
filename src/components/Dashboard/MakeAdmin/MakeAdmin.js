import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:4000/addAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(result => {
                console.log(result);
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
                        <h1>Make Admin</h1>
                        <hr/>
                    </div>
                    <div className="row">
                    <form onSubmit={handleSubmit(onSubmit)} className='w-50 mx-auto mt-5 shadow p-5 rounded'>
                            <h5>Add Admin</h5>
                            <input placeholder='Enter Email' className='form-control mb-4' type='email' {...register("email")} />

                            <input type="submit" className='btn btn-danger' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;