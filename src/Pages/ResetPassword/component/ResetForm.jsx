import { Formik } from 'formik';
import { Form } from 'react-router-dom';
import styled from 'styled-components';

import ButtonStyled from '../../../components/Button';
import FormControl from '../../../components/Formik/FormControl';

import Stack from 'react-bootstrap/Stack';

const ResetForm = () => {
    return (
        <>
            <Formik
                // validationSchema={SchemaRegister}
                // onSubmit={onSubmit}
                initialValues={{
                    password: '',
                    confirmPassword: '',

                    // terms: false,
                }}
            >
                {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors }) => {
                    return (
                        <Form noValidate onSubmit={handleSubmit}>
                            <>
                                {/* Email*/}
                                <FormControl
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
                                    className="d-flex justify-content-between"
                                >
                                    <ButtonStyled
                                        buttonType="inverted"
                                        type="button"
                                        // onClick={handleBackStep}
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
