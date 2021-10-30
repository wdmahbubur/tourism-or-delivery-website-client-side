import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';

const Contact = () => {
    const { user } = useAuth()
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="">
            <Container>
                <div className="text-center mb-5 section-header">
                    <h2 className="my-0">Get In Touch</h2>
                    <hr className="mx-auto my-0 text-primary rounded" />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="w-75 mx-auto">

                    <input {...register("name", { required: true })} className="form-control my-3 py-2" placeholder="Enter your name" defaultValue={user?.displayName} />

                    <input type="email" {...register("email")} className="form-control my-3 py-2" placeholder="Enter your email" defaultValue={user?.email} />

                    <input {...register("subject")} className="form-control my-3 py-2" placeholder="Subject" />

                    <textarea {...register("message", { required: true })} className="form-control my-3 py-2" placeholder="Message"></textarea>

                    <input type="submit" className="btn btn-success fw-bold" />
                </form>
            </Container>
        </div>
    );
};

export default Contact;