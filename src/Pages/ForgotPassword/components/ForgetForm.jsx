import { Formik } from 'formik';
import { Form } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import ButtonStyled from '../../../components/Button';
import FormControl from '../../../components/Formik/FormControl';
import { toastError } from '../../../components/ToastNotification';
import authApi from '../../../utils/api/authApi';

const ForgetForm = () => {
    const navigate = useNavigate();
    const onSubmit = (value, { setFieldError }) => {
        console.log(value);

        authApi.SendEmail(value).then((response) => {
            console.log(response);
            if (response.data.status === 400) {
                console.log(response.data);
                toastError(response.data.err);
                // setErr(response.data.err);
                // response.data.err.map((el) => {
                //     setFieldError(el.at, el.message);
                // });
            }

            if (response.data.status === 200) {
                console.log(response.data.message);
                navigate('/verification', { state: value });
            }
        });
    };
    return (
        <>
            <Formik
                // validationSchema={SchemaRegister}
                onSubmit={onSubmit}
                initialValues={{
                    email: '',
                }}
            >
                {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors }) => {
                    return (
                        <Form noValidate onSubmit={handleSubmit}>
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
                                    isInvalid={touched.email && errors.email}
                                    message={errors.email}
                                />
                                <ButtonStyled
                                    type="submit"
                                    className="text-end"
                                    // onClick={handleNextStep}
                                    // disabled={!isStep1Valid}
                                >
                                    Submit
                                </ButtonStyled>
                            </>
                        </Form>
                    );
                }}
            </Formik>
        </>
    );
};

export default ForgetForm;
