import { useRef, useState, useEffect } from 'react';

import { Formik, Field } from 'formik';
import { Button, Form, FormGroup, Row } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import * as yup from 'yup';

import GoogleSignInButton from '../../components/GoogleLogin';
import Localstorage from '../../utils/Localstorage';
import authApi from '../../utils/api/authApi';
import LineBreak from './LineBreak';

const phoneMailRegExp =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/;
const pwdRegExp = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/; //at least 8 char, 1 uppercase letter, 1 lowercase letter, 1 number, 1 special char;
const schema = yup.object().shape({
    user: yup
        .string()
        .required('Please enter email or phone number!')
        .matches(phoneMailRegExp, 'Invalid email or phone number!'),
    pwd: yup.string().required('Please enter password!').matches(
        pwdRegExp,
        // 'Password must be at least 8 character,  one uppercase letter, one lowercase letter, one number and one special character!'
        'Invalid password!'
    ),
});
const LoginForm = () => {
    const [checked, setChecked] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (value) => {
        const formData = {
            emailOrPhone: value.user,
            password: value.pwd,
            remember: checked,
        };
        console.log(value);
        authApi.login(formData).then((res) => {
            console.log(res);
            if (res.data.status === 200) {
                Localstorage.setItem('accessToken', res.data.data.access_token);
                Localstorage.setItem('authTokens', JSON.stringify(res.data.data));
                navigate('/home');
            }
            if (res.data.status === 400) {
                setErrMsg(res.data.err);
            }
        });
    };

    return (
        <Formik
            initialValues={{ user: '', pwd: '' }}
            validationSchema={schema}
            onSubmit={handleSubmit}
        >
            {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group className="was-validated mb-3 text-light" controlId="useraccount">
                        <Form.Label className="text-light">Email or Phone Number</Form.Label>
                        <Form.Control
                            type="text"
                            as={Field}
                            name="user"
                            onChange={handleChange}
                            value={values.user}
                            placeholder="Enter email or phone number"
                            required
                            isInvalid={touched.user && !!errors.user}
                        />
                        <Form.Control.Feedback type="invalid">{errors.user}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="was-validated mb-3" controlId="password">
                        <Form.Label className="text-light">Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="pwd"
                            onChange={handleChange}
                            value={values.pwd}
                            placeholder="Enter password"
                            required
                            autoComplete="on"
                            isInvalid={touched.pwd && !!errors.pwd}
                        />
                        <Form.Control.Feedback type="invalid">{errors.pwd}</Form.Control.Feedback>
                    </Form.Group>
                    <p
                        className={errMsg ? ' text-danger errmsg' : 'offscreen'}
                        aria-live="assertive"
                    >
                        {errMsg}
                    </p>
                    <Form.Group
                        className="mb-3 d-flex justify-content-end"
                        controlId="formBasicCheckbox"
                    >
                        <Form.Check
                            type="checkbox"
                            className="text-light"
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
                    <div className="mb-3 text-center text-light">
                        Forget password?{' '}
                        <Link className="color-link" to="/forgotPassword">
                            Forgot password
                        </Link>
                    </div>
                    <div className="mb-3 text-center text-light">
                        Don't have an account?{' '}
                        <Link className="color-link" to="/register">
                            Create now
                        </Link>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default LoginForm;
