import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Booking = () => {
    const [service, setService] = useState({});
    const { user } = useAuth();
    const { id } = useParams();
    const { register, handleSubmit } = useForm();
    const [totalCost, setTotalCost] = useState();
    let history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:5000/service/${id}`)
            .then(res => {
                setService(res.data);
                setTotalCost(res.data.cost);
            })
    }, [id])

    const calculateCost = (e) => {
        const person = e.target.value;
        const totalCost = service.cost * person;
        setTotalCost(totalCost);
    }


    const onSubmit = data => {
        data.userId = user.uid;
        data.totalCost = totalCost;
        data.tour = service.title;
        data.status = "Pending";
        axios.post('http://localhost:5000/booking', {
            booking: data
        })
            .then(res => {
                if (res) {
                    alert("Your Booking Successful");
                    history.push('/my-booking');
                }
            })
    }
    return (
        <div className="py-5">
            {

                <Container>
                    <Row>
                        <Col md="6">
                            <img src={service.photo} alt="" className="w-100" />
                            <h2 className="py-2">{service.title}</h2>
                            <p>{service.shortDesc}</p>
                            <div className="d-flex justify-content-between fw-bold">
                                <p>Duration: {service.duration}</p>
                                <p>Cost: ${service.cost} per person</p>
                            </div>


                        </Col>
                        <Col md="6">
                            <div className="text-center mb-5 section-header">
                                <h2 className="my-0">Please Fill The Form</h2>
                                <hr className="mx-auto my-0 text-primary rounded" />
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)} className="w-75 mx-auto">

                                <input {...register("name", { required: true })} className="form-control my-3 py-2" placeholder="Enter your name" defaultValue={user.displayName} />

                                <input type="email" {...register("email")} className="form-control my-3 py-2" placeholder="Enter your email" defaultValue={user.email} />

                                <input  {...register("phone", { required: true })} className="form-control my-3 py-2" placeholder="Enter your phone number" />

                                <div>
                                    <label htmlFor="">Booking Date</label>
                                    <input type="date" {...register("bookingDate", { required: true })} className="form-control py-2" />
                                </div>

                                <textarea {...register("address", { required: true })} className="form-control my-3 py-2" placeholder="Enter your address"></textarea>

                                <div className="my-3 d-flex justify-content-between">
                                    <div>
                                        <label htmlFor="">Person</label>
                                        <select {...register("person")} onChange={calculateCost} className="form-control py-2">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="">Total Cost in dollar($)</label>
                                        <input {...register("totalCost")} className="form-control py-2" defaultValue={totalCost} disabled />
                                    </div>

                                </div>

                                <div className="my-3">
                                    <label htmlFor="">Selected Tour</label>
                                    <input {...register("tour")} className="form-control my-3 py-2" defaultValue={service.title} disabled />
                                </div>
                                <input type="submit" className="btn btn-success fw-bold" />
                            </form>
                        </Col>
                    </Row>
                </Container>
            }
        </div>
    );
};

export default Booking;