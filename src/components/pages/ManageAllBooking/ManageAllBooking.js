import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Button } from 'react-bootstrap';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import useAuth from '../../../hooks/useAuth';

const ManageAllBooking = () => {
    const [bookings, setBookings] = useState([]);
    const { user } = useAuth();
    let count = 1;

    useEffect(() => {
        axios.get(`https://pacific-harbor-14083.herokuapp.com/booking`)
            .then(res => {
                setBookings(res.data);
            })
    }, [user.uid]);

    const approvedBooking = (id) => {
        const getUpdateBooking = bookings.find(booking => booking._id === id);
        if (getUpdateBooking.status === "Approved") {
            return alert("This booking status already approved");
        } else {
            const confirm = window.confirm("Are you sure? approved this booking");
            if (confirm) {
                axios.post(`https://pacific-harbor-14083.herokuapp.com/service/approved/${id}`)
                    .then(res => {
                        if (res) {
                            alert("Approved Success");
                            const RemainingBookings = bookings.filter(booking => booking._id !== id);
                            getUpdateBooking.status = "Approved";
                            setBookings([...RemainingBookings, getUpdateBooking])
                        }
                    });
            }
        }

    }
    const cancelBooking = (id) => {
        const confirm = window.confirm("Are you sure? cancel this booking");
        if (confirm) {
            axios.delete(`https://pacific-harbor-14083.herokuapp.com/service/delete/${id}`)
                .then(res => {
                    if (res) {
                        alert("Delete Success");
                        const remainingBooking = bookings.filter(booking => booking._id !== id);
                        setBookings(remainingBooking);
                    }
                });
        }
    }
    return (
        <div className="py-5">
            <Container>
                <Table className="table table-striped">
                    <Thead>
                        <Tr>
                            <Th>#</Th>
                            <Th>Title</Th>
                            <Th>Customer Name</Th>
                            <Th>Booking Date</Th>
                            <Th>Person</Th>
                            <Th>Total Cost</Th>
                            <Th>Status</Th>
                            <Th colSpan="2">Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            bookings.map(booking => <Tr key={booking._id}>
                                <Td>{count++}</Td>
                                <Td>{booking.tour}</Td>
                                <Td>{booking.name}</Td>
                                <Td>{booking.bookingDate}</Td>
                                <Td>{booking.person}</Td>
                                <Td>{booking.totalCost}</Td>
                                <Td>{booking.status}</Td>
                                <Td><Button variant="success" onClick={() => approvedBooking(booking._id)}>Approved Booking</Button></Td>
                                <Td><Button variant="danger" onClick={() => cancelBooking(booking._id)}>Cancel Booking</Button></Td>
                            </Tr>)

                        }
                    </Tbody>
                </Table>
            </Container>
        </div>
    );
};

export default ManageAllBooking;