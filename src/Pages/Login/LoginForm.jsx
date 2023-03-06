import { useRef, useState, useEffect } from 'react';

import { Button, Form, FormGroup } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import GoogleSignInButton from '../../components/GoogleLogin';
import Localstorage from '../../utils/Localstorage';
import authApi from '../../utils/api/authApi';
import LineBreak from './LineBreak';

const LoginForm = () => {
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [checked, setChecked] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            emailOrPhone: user,
            password: pwd,
            remember: checked,
        };
        console.log(formData);
        authApi.login(formData).then((res) => {
            console.log(res);
            if (res.data.status === 200) {
                Localstorage.setItem('accessToken', res.data.data.access_token);
                Localstorage.setItem('refreshToken', res.data.data.refresh_token);
                navigate('/home');
            }
            if (res.data.status === 400) {
                setErrMsg(res.data.err);
            }
        });
    };

    return (
        <Form className="need-validation" onSubmit={handleSubmit}>
            <Form.Group className="was-validated mb-3" controlId="useraccount">
                <Form.Label>Email or Phone Number</Form.Label>
                <Form.Control
                    type="text"
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
            <p className={errMsg ? ' text-danger errmsg' : 'offscreen'} aria-live="assertive">
                {errMsg}
            </p>
            <Form.Group className="mb-3 d-flex justify-content-end" controlId="formBasicCheckbox">
                <Form.Check
                    type="checkbox"
                    label="Remember me"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                />
            </Form.Group>
            <Button className="w-100 mt-2 mb-3 text-light" variant="login" type="Login">
                Login
            </Button>
            <LineBreak />
            <div className="d-flex justify-content-center justify-content-center mb-3">
                <GoogleSignInButton />
            </div>
            <div className="mb-3 text-center">
                Forget password?{' '}
                <Link className="color-link" to="/forgotPassword">
                    Forgot password
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
