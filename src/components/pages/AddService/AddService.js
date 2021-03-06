import axios from 'axios';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    async function onSubmit(data) {
        const photo = data.photo[0];
        const title = data.title;
        let body = new FormData()
        body.set('key', process.env.REACT_APP_IMGBB_API)
        body.append('image', photo)
        body.append('name', title)

        await axios({
            method: 'post',
            url: 'https://api.imgbb.com/1/upload',
            data: body
        }).then(res => {
            data.photo = res.data.data.display_url;
        })

        axios.post('https://pacific-harbor-14083.herokuapp.com/service', {
            service: data
        })
            .then(response => {
                if (response) {
                    alert("Service Added Successful")
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        reset();


    };
    return (
        <div className="py-5">
            <Container>
                <div className="text-center mb-5 section-header">
                    <h2 className="my-0">Add New Service</h2>
                    <hr className="mx-auto my-0 text-primary rounded" />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="w-75 mx-auto">

                    <input {...register("title", { required: true })} className="form-control my-3 py-2" placeholder="Service Title" />

                    <textarea {...register("shortDesc", { required: true, min: 30, max: 80 })} className="form-control my-3 py-2" placeholder="Short Description"></textarea>

                    <input type="number" {...register("cost", { required: true })} className="form-control my-3 py-2" placeholder="Tour Costing" />

                    <input type="number" {...register("duration", { required: true })} className="form-control my-3 py-2" placeholder="Tour Duration" />

                    <input type="file" {...register("photo", { required: true })} className="form-control my-3 py-2" />

                    <input type="submit" className="btn btn-success fw-bold" />
                </form>
            </Container>
        </div>
    );
};

export default AddService;