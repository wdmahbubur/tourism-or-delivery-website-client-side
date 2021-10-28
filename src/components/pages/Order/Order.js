import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const Order = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="py-5">
            <Container>
                <div className="text-center mb-5 section-header">
                    <h2 className="my-0">Please Fill The Form</h2>
                    <hr className="mx-auto my-0 text-primary rounded" />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="w-75 mx-auto">
                    <input {...register("name", { required: true })} className="form-control my-3 py-2" placeholder="Enter your name" />
                    <input type="email" {...register("email")} className="form-control my-3 py-2" placeholder="Enter your email" />
                    <input type="number" {...register("phone", { required: true })} className="form-control my-3 py-2" placeholder="Enter your phone number" />
                    <div>
                        <label htmlFor="">Booking Date</label>
                        <input type="date" {...register("bookingDate", { required: true })} className="form-control py-2" />
                    </div>

                    <textarea {...register("address", { required: true })} className="form-control my-3 py-2" placeholder="Enter your home address"></textarea>

                    <div className="my-3">
                        <label htmlFor="">Selected Tour</label>
                        <input type="text" {...register("tour", { required: true })} className="form-control py-2" />
                    </div>
                    <input type="submit" className="btn btn-success fw-bold" />
                </form>
            </Container>
        </div>
    );
};

export default Order;