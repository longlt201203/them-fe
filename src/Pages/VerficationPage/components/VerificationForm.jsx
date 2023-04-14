import { useState } from 'react';

import { Formik } from 'formik';
import { Form } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import ButtonStyled from '../../../components/Button';
import FormControl from '../../../components/Formik/FormControl';
import ModalComponent from '../../../components/Modal/Modal';
import { toastSuccess } from '../../../components/ToastNotification';
import authApi from '../../../utils/api/authApi';

import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

const VerificationForm = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [show, setShow] = useState(false);
    const [message, setMessage] = useState('');
    const Resend = () => {
        authApi.SendEmail({ email: location.state.email }).then((response) => {
            console.log(response);
            if (response.data.status === 400) {
                console.log(response.data);
            }

            if (response.data.status === 200) {
                console.log(response.data.message);
                toastSuccess(response.data.message);
            }
        });
    };
    const onSubmit = (value, { setFieldError }) => {
        const formData = {
            email: location.state.email,
            code: value.code,
        };
        console.log(formData);
        authApi.CheckCode(formData).then((response) => {
            console.log(response);
            if (response.data.status === 400) {
                setShow(true);
                setMessage(response.data.err);
                // setErr(response.data.err);
                // response.data.err.map((el) => {
                //     setFieldError(el.at, el.message);
                // });
            }

            if (response.data.status === 200) {
                navigate('/resetPassword', { state: location.state.email });
                toastSuccess(response.data.message);
            }
        });
    };
    return (
        <>
            {' '}
            <ModalComponent show={show} setShow={setShow} body={message} title={'ERROR'} />
            <Formik
                // validationSchema={SchemaRegister}
                onSubmit={onSubmit}
                initialValues={{
                    code: '',
                }}
            >
                {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors }) => {
                    return (
                        <Form noValidate onSubmit={handleSubmit}>
                            <>
                                {/* Email*/}
                                <FormControl
                                    control="input"
                                    className="text-light"
                                    type="text"
                                    placeholder="Please enter your code..."
                                    label="Code"
                                    controlId="code"
                                    name="code"
                                    value={values.code}
                                    onChange={handleChange}
                                    isInvalid={touched.code && errors.code}
                                    message={errors.code}
                                />
                                <Stack
                                    direction="horizontal"
                                    className="d-flex justify-content-between mt-3"
                                    gap={2}
                                >
                                    <ButtonStyled
                                        buttonType="inverted"
                                        type="button"
                                        onClick={Resend}
                                    >
                                        Resend
                                    </ButtonStyled>
                                    <ButtonStyled type="submit">Submit</ButtonStyled>
                                </Stack>
                            </>
                        </Form>
                    );
                }}
            </Formik>
        </>
    );
};

export default VerificationForm;
