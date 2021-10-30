import React, { useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { loginWithGoogle, user } = useAuth();
    let history = useHistory();
    const { location } = useHistory();
    const redirect_url = location.state?.from || '/';
    useEffect(() => {
        if (user?.email) {
            history.push(redirect_url)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

    return (
        <div className="py-5 my-5">
            <Container className="text-center">
                <Button variant="primary" onClick={loginWithGoogle}>Login with Google</Button>
            </Container>
        </div>
    );
};

export default Login;