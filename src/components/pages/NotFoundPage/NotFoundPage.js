
import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const NotFoundPage = () => {
    let history = useHistory();
    const GoToHome = () => {
        history.push('/');
    }
    return (
        <div className="text-center">
            <img src="https://i.ibb.co/kJTXWBd/undraw-page-not-found-su7k.png" alt="" className="mx-auto d-block" style={{ height: '400px' }} />
            <Button onClick={GoToHome}>Go To Home</Button>
        </div>
    );
};

export default NotFoundPage;