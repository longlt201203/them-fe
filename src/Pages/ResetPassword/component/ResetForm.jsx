import { Formik } from 'formik';
import { Form, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import ButtonStyled from '../../../components/Button';
import FormControl from '../../../components/Formik/FormControl';
import { toastSuccess, toastError } from '../../../components/ToastNotification';
import authApi from '../../../utils/api/authApi';
import { SchemaResetForm } from '../schema/SchemaResetForm';

import Stack from 'react-bootstrap/Stack';

const ResetForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const onSubmit = (value, { resetForm }) => {
        const formData = {
            email: location.state,
            password: value.password,
        };
        authApi.ResetPassword(formData).then((response) => {
            console.log(response);
            if (response.data.status === 400) {
                console.log(response.data);
                toastError(response.data.err);
                resetForm();
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
            <Formik
                validationSchema={SchemaResetForm}
                onSubmit={onSubmit}
                initialValues={{
                    password: '',
                    confirmPassword: '',
                }}
            >
                {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors }) => {
                    return (
                        <Form noValidate onSubmit={handleSubmit}>
                            <>
                                {/* Email*/}
                                <FormControl
                                    className="text-white"
                                    control="input"
                                    type="password"
                                    placeholder="EX: ABCDEF"
                                    label="Password"
                                    controlId="password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    isInvalid={touched.password && errors.password}
                                    message={errors.password}
                                />
                                <FormControl
                                    className="text-white"
                                    control="input"
                                    type="password"
                                    placeholder="EX: ABCDEF"
                                    label="Confirm Password"
                                    controlId="confirmPassword"
                                    name="confirmPassword"
                                    value={values.confirmPassword}
                                    onChange={handleChange}
                                    isInvalid={touched.confirmPassword && errors.confirmPassword}
                                    message={errors.confirmPassword}
                                />
                                <Stack
                                    direction="horizontal"
                                    className="d-flex justify-content-between mt-3"
                                    gap={3}
                                >
                                    <ButtonStyled
                                        buttonType="inverted"
                                        type="button"
                                        onClick={() => navigate('/login')}
                                    >
                                        Cancel
                                    </ButtonStyled>
                                    <ButtonStyled type="submit">Change</ButtonStyled>
                                </Stack>
                            </>
                        </Form>
                    );
                }}
            </Formik>
        </>
    );
};

export default ResetForm;
