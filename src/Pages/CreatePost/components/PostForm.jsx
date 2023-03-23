import { useState } from 'react';

import { Formik } from 'formik';
import { Form } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import ButtonStyled from '../../../components/Button';
import FormControl from '../../../components/Formik/FormControl';
import ModalComponent from '../../../components/Modal/Modal';
import { toastSuccess } from '../../../components/ToastNotification';
import authApi from '../../../utils/api/authApi';
import { SchemaRegister } from '../schema';

import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

const PostForm = () => {
    const [step, setStep] = useState(1);
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState('');
    const handleNextStep = () => {
        setStep(step + 1);
    };

    const handleBackStep = () => {
        setStep(step - 1);
    };
    const onSubmit = (value, { setFieldError }) => {
        console.log(value);

        authApi.register(value).then((response) => {
            console.log(response);
            if (response.data.status === 400) {
                setShow(true);
                setMessage(response.data.message);

                response.data.err.map((el) => {
                    setFieldError(el.at, el.message);
                });
            }

            if (response.data.status === 200) {
                toastSuccess(response.data.message);
                navigate('/login');
            }
        });
    };

    return (
        <>
            <ModalComponent show={show} setShow={setShow} body={message} title={'ERROR'} />
            <Formik
                validationSchema={SchemaRegister}
                onSubmit={onSubmit}
                initialValues={{
                    email: '',
                    phone: '',
                    password: '',
                    confirmPassword: '',
                    fname: '',
                    lname: '',
                    zipCode: '',
                    address: '',
                }}
            >
                {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors }) => {
                    const isStep1Valid =
                        values.email && values.phone && values.password && values.confirmPassword;
                    const isStep2Valid =
                        values.fname && values.lname && values.zipCode && values.address;

                    return (
                        <Form noValidate onSubmit={handleSubmit}>
                            {step === 1 && (
                                <>
                                    {/* Email*/}

                                    <FormControl
                                        className="text-white"
                                        control="input"
                                        type="email"
                                        placeholder="Please enter your email..."
                                        label="Email"
                                        controlId="email"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        isInvalid={touched.email && errors.email}
                                        message={errors.email}
                                    />
                                    {/* Phone Number */}
                                    <FormControl
                                        className="text-white"
                                        control="input"
                                        type="text"
                                        placeholder="Please enter your phone number..."
                                        label="Phone Number"
                                        controlId="phone"
                                        name="phone"
                                        value={values.phone}
                                        onChange={handleChange}
                                        isInvalid={touched.phone && errors.phone}
                                        message={errors.phone}
                                    />
                                    {/* password */}
                                    <FormControl
                                        className="text-white"
                                        control="input"
                                        type="password"
                                        placeholder="Please enter your password..."
                                        label="Password"
                                        controlId="password"
                                        name="password"
                                        onChange={handleChange}
                                        value={values.password}
                                        isInvalid={touched.password && !!errors.password}
                                        message={errors.password}
                                    />
                                    {/* Confirm Password */}
                                    <FormControl
                                        className="text-white"
                                        control="input"
                                        type="password"
                                        placeholder="Please confirm your password"
                                        label="Confirm Password"
                                        controlId="confirmPassword"
                                        name="confirmPassword"
                                        value={values.confirmPassword}
                                        onChange={handleChange}
                                        isInvalid={
                                            touched.confirmPassword && !!errors.confirmPassword
                                        }
                                        message={errors.confirmPassword}
                                    />
                                    <Stack className="my-2">
                                        <ButtonStyled
                                            type="button"
                                            className="text-end"
                                            onClick={handleNextStep}
                                            disabled={!isStep1Valid}
                                        >
                                            Next
                                        </ButtonStyled>
                                    </Stack>
                                </>
                            )}
                            {step === 2 && (
                                <>
                                    {/* First Name */}
                                    <FormControl
                                        className="text-white"
                                        control="input"
                                        type="text"
                                        placeholder="Your first name"
                                        label="First Name"
                                        controlId="fname"
                                        name="fname"
                                        value={values.fname}
                                        onChange={handleChange}
                                        isInvalid={touched.fname && !!errors.fname}
                                        message={errors.fname}
                                    />
                                    {/* Last Name */}
                                    <FormControl
                                        className="text-white"
                                        control="input"
                                        type="text"
                                        placeholder="Your last name"
                                        label="Last Name"
                                        controlId="lname"
                                        name="lname"
                                        value={values.lname}
                                        onChange={handleChange}
                                        isInvalid={touched.lname && !!errors.lname}
                                        message={errors.lname}
                                    />
                                    {/* Zip Code */}
                                    <FormControl
                                        className="text-white"
                                        control="input"
                                        type="text"
                                        placeholder="Zip Code"
                                        label="Zip Code"
                                        controlId="zipCode"
                                        name="zipCode"
                                        value={values.zipCode}
                                        onChange={handleChange}
                                        isInvalid={touched.zipCode && !!errors.zipCode}
                                        message={errors.zipCode}
                                    />
                                    {/* Address */}
                                    <FormControl
                                        className="text-white"
                                        control="input"
                                        type="text"
                                        placeholder="Your address"
                                        label="Address"
                                        controlId="address"
                                        name="address"
                                        value={values.address}
                                        onChange={handleChange}
                                        isInvalid={touched.address && !!errors.address}
                                        message={errors.address}
                                    />

                                    <Stack
                                        direction="horizontal"
                                        className="d-flex justify-content-between"
                                    >
                                        <ButtonStyled
                                            buttonType="inverted"
                                            type="button"
                                            onClick={handleBackStep}
                                        >
                                            Back
                                        </ButtonStyled>
                                        <ButtonStyled type="submit" disabled={!isStep2Valid}>
                                            Done
                                        </ButtonStyled>
                                    </Stack>
                                </>
                            )}
                            <div className="mt-3 text-center text-white">
                                Already have an account?{' '}
                                <Link className="me-3 color-link" to="/login">
                                    Sign In
                                </Link>
                            </div>
                        </Form>
                    );
                }}
            </Formik>
        </>
    );
};

export default PostForm;
