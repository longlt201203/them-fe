import { useState } from 'react';

import { Formik } from 'formik';

import FormControl from '../../../components/Formik/FormControl';
import { SchemaRegister } from '../schema';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const RegisterForm = () => {
    const [step, setStep] = useState(1);
    const handleNextStep = () => {
        setStep(step + 1);
    };
    const onSubmit = (value) => {
        console.log(value);
    };
    return (
        <>
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
                    terms: false,
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
                                        control="input"
                                        type="email"
                                        placeholder="Please enter your first name..."
                                        label="Email"
                                        controlId="email"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        isValid={touched.email && !errors.email}
                                        message={errors.email}
                                    />
                                    {/* Phone Number */}
                                    <FormControl
                                        control="input"
                                        type="text"
                                        placeholder="Please enter your last name..."
                                        label="Phone Number"
                                        controlId="phone"
                                        name="phone"
                                        value={values.phone}
                                        onChange={handleChange}
                                        isValid={touched.phone && !errors.phone}
                                        message={errors.phone}
                                    />
                                    {/* password */}
                                    <FormControl
                                        control="input"
                                        type="password"
                                        placeholder="Please enter your Student ID..."
                                        label="Password"
                                        controlId="password"
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        isValid={touched.password && !errors.password}
                                        message={errors.password}
                                    />
                                    {/* Confirm Password */}
                                    <FormControl
                                        control="input"
                                        type="password"
                                        placeholder="Your phone number"
                                        label="Confirm Password"
                                        controlId="confirmPassword"
                                        name="confirmPassword"
                                        value={values.confirmPassword}
                                        onChange={handleChange}
                                        isValid={touched.confirmPassword && !errors.confirmPassword}
                                        message={errors.confirmPassword}
                                    />

                                    <Button
                                        type="button"
                                        onClick={handleNextStep}
                                        disabled={!isStep1Valid}
                                    >
                                        Next
                                    </Button>
                                </>
                            )}
                            {step === 2 && (
                                <>
                                    {/* First Name */}
                                    <FormControl
                                        control="input"
                                        type="text"
                                        placeholder="Your phone number"
                                        label="First Name"
                                        controlId="fname"
                                        name="fname"
                                        value={values.fname}
                                        onChange={handleChange}
                                    />
                                    {/* Last Name */}
                                    <FormControl
                                        control="input"
                                        type="text"
                                        placeholder="Your phone number"
                                        label="Last Name"
                                        controlId="lname"
                                        name="lname"
                                        value={values.lname}
                                        onChange={handleChange}
                                    />
                                    {/* Zip Code */}
                                    <FormControl
                                        control="input"
                                        type="text"
                                        placeholder="Your phone number"
                                        label="Zip Code"
                                        controlId="zipCode"
                                        name="zipCode"
                                        value={values.zipCode}
                                        onChange={handleChange}
                                    />
                                    {/* Address */}
                                    <FormControl
                                        control="input"
                                        type="text"
                                        placeholder="Your phone number"
                                        label="Address"
                                        controlId="address"
                                        name="address"
                                        value={values.address}
                                        onChange={handleChange}
                                    />
                                    <Button type="submit" disabled={!isStep2Valid}>
                                        Submit
                                    </Button>
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
