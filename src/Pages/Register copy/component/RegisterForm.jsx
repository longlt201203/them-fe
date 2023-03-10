import { useState } from 'react';

import { Formik } from 'formik';
import { Form } from 'react-router-dom';
import { useNavigate, useLoaderData } from 'react-router-dom';

import ButtonStyled from '../../../components/Button';
import FormControl from '../../../components/Formik/FormControl';
import ModalComponent from '../../../components/Modal/Modal';
import { toastSuccess } from '../../../components/ToastNotification';
import authApi from '../../../utils/api/authApi';
import { SchemaRegister } from '../schema';

import Stack from 'react-bootstrap/Stack';

// import Form from 'react-bootstrap/Form';

const RegisterForm = ({ setErr }) => {
    const data = useLoaderData();
    const [step, setStep] = useState(1);
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState('');

    const navigate = useNavigate();
    const handleNextStep = () => {
        setStep(step + 1);
    };
    console.log(data);
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
                setErr(response.data.err);
                response.data.err.map((el) => {
                    setFieldError(el.at, el.message);
                });
            }

            if (response.data.status === 200) {
                console.log(response.data.message);
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
                    email: data.email,
                    phone: '',
                    password: '',
                    confirmPassword: '',
                    fname: data.given_name,
                    lname: data.family_name,
                    zipCode: '',
                    address: '',
                    // terms: false,
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
                                        readOnly={true}
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
                                        placeholder="Your phone number"
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
                                        placeholder="Your phone number"
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
                                        placeholder="Your phone number"
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
                                        placeholder="Your phone number"
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
                        </Form>
                    );
                }}
            </Formik>
        </>
    );
};

export default RegisterForm;
