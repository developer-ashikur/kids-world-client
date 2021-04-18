import React from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const reviewData = {
            name: data.name,
            profession: data.profession,
            description: data.description
        };
        console.log(reviewData);
        fetch('https://vast-hollows-66346.herokuapp.com/addReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewData)
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
                        <h1>Review Our Service</h1>
                        <hr/>
                    </div>
                    <div className="row">
                    <form onSubmit={handleSubmit(onSubmit)} className='w-50 mx-auto mt-5 shadow p-5 rounded'>
                            <h5>Your Name</h5>
                            <input placeholder='Enter Name' className='form-control mb-4' type='text' {...register("name")} />

                            <h5>Profession</h5>
                            <input placeholder='Enter Profession' className='form-control mb-4' type='text' {...register("profession")} />

                            <h5>Description</h5>
                            <input placeholder='Enter Course Duration' className='form-control mb-4' type='text' {...register("description")} />

                            <input type="submit" className='btn btn-danger' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;