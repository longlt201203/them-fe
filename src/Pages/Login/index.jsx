import { useRef, useState, useEffect } from 'react';

import { Button, Form } from 'react-bootstrap';
import GoogleLogin from 'react-google-login';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import axios from '../../utils/api/axios';
import { LoginStyle } from './css';

const LOGIN_URL = '';
export default function Login() {
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
        <LoginStyle>
            <div className="position-absolute d-flex flex-column justify-content-center align-items-center w-100 h-100">
                <div className="login-title mb-3">Login</div>
                <Form className="need-validation" onSubmit={handleSubmit}>
                    <Form.Group className="was-validated mb-3" controlId="useraccount">
                        <Form.Label>Email or Phone Number</Form.Label>
                        <Form.Control
                            ref={userRef}
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
                    <Form.Group
                        className="mb-3 d-flex justify-content-end"
                        controlId="formBasicCheckbox"
                    >
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <Button className="w-100 mt-2 mb-3" variant="login" type="Login">
                        Login
                    </Button>
                    <p className="mb-3 text-center">Sign in with Google</p>
                    <div className="mb-3 text-center">
                        Forget password? <Link to="/resetpassword">Reset password</Link>
                    </div>
                    <div className="mb-3 text-center">
                        Don't have an account? <Link to="/register">Create now</Link>
                    </div>
                </Form>
            </div>
        </LoginStyle>
    );
}
