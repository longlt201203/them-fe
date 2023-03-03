import { useRef, useState, useEffect } from 'react';

import { Button, Form, FormGroup } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import axios from '../../utils/api/axios';
import LineBreak from './LineBreak';

const LoginForm = () => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const userRef = useRef();
    const errRef = useRef();
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    useEffect(() => {
        userRef.current.focus();
    }, []);
    useEffect(() => {
        setErrMsg('');
    }, [user, pwd]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(LOGIN_URL, JSON.stringify({ user, pwd }), {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true,
            });
            console.log(JSON.stringify(response?.data));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken });
            setUser('');
            setPwd('');
            navigate(from, { replace: true });
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Useraccount or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    };
    return (
        <Form className="need-validation" onSubmit={handleSubmit}>
            <Form.Group className="was-validated mb-3" controlId="useraccount">
                <Form.Label>Email or Phone Number</Form.Label>
                <Form.Control
                    ref={userRef}
                    type="email"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    placeholder="Enter email or phone number"
                    required
                />
            </Form.Group>
            <Form.Group className="was-validated mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    placeholder="Enter password"
                    required
                    autoComplete="on"
                />
            </Form.Group>
            <p
                ref={errRef}
                className={errMsg ? ' text-danger errmsg' : 'offscreen'}
                aria-live="assertive"
            >
                {errMsg}
            </p>
            <Form.Group className="mb-3 d-flex justify-content-end" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button className="w-100 mt-2 mb-3 text-light" variant="login" type="Login">
                Login
            </Button>
            <LineBreak />
            <p className="mb-3 text-center">Sign in with Google</p>
            <div className="mb-3 text-center">
                Forget password?{' '}
                <Link className="color-link" to="/resetpassword">
                    Reset password
                </Link>
            </div>
            <div className="mb-3 text-center">
                Don't have an account?{' '}
                <Link className="color-link" to="/register">
                    Create now
                </Link>
            </div>
        </Form>
    );
};

export default LoginForm;
