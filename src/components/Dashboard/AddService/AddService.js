import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '947fb59bf3b63ff1b74306d43dfc26de');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const onSubmit = data => {
        console.log(data);
        const serviceData = {
            title: data.serviceTitle,
            price: data.price,
            duration: data.duration,
            totalSits: data.totalSits,
            totalLessons: data.totalLessons,
            image: imageURL
        }
        console.log(serviceData);
        fetch('https://vast-hollows-66346.herokuapp.com/addService', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(result => {
                console.log(result);
            })
    };
    return (
        <div className='container-fluid'>
            <div className="row ps-0">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <div className="row">
                        <h1>Add Service</h1>
                    </div>
                    <hr />
                    <div className="row">
                        <form onSubmit={handleSubmit(onSubmit)} className='w-50 mx-auto mt-5 shadow p-5 rounded'>
                            <h5>Service Title</h5>
                            <input placeholder='Enter Title' className='form-control mb-4' type='text' {...register("serviceTitle")} />

                            <h5>Add Price</h5>
                            <input placeholder='Enter Price' className='form-control mb-4' type='number' {...register("price")} />

                            <h5>Duration</h5>
                            <input placeholder='Enter Course Duration' className='form-control mb-4' type='number' {...register("duration")} />

                            <h5>Total Sits</h5>
                            <input placeholder='Total Sits' className='form-control mb-4' type='number' {...register("totalSits")} />

                            <h5>Total Lessons</h5>
                            <input placeholder='Total Lessons' className='form-control mb-4' type='number' {...register("totalLessons")} />

                            <h5>Add Photo</h5>
                            <input type='file' className='form-control mb-4' {...register("image")} onChange={handleImageUpload} /> <br/>

                            <input type="submit" className='btn btn-danger' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;