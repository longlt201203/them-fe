import { Formik } from 'formik';
import { Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import ButtonStyled from '../../../components/Button';
import FormControl from '../../../components/Formik/FormControl';
import { toastError, toastSuccess } from '../../../components/ToastNotification';
import authApi from '../../../utils/api/authApi';
import localFileApi from '../../../utils/api/localFIleApi';
import userApi from '../../../utils/api/userApi';
import { SchemaEditAccount } from '../schema/ShemaEditAccount';
import { FormContainer } from '../styled';

const EditAccountForm = ({ file, data }) => {
    console.log(data);
    const navigate = useNavigate();
    const onSubmit = async (value, { setFieldError }) => {
        console.log(value);
        console.log(file);
        await localFileApi.postImg(file).then((res) => {
            console.log(res);
            if (res.data.status === 200) {
                const formatData = {
                    ...value,
                    avt: res?.data.data[0].id,
                };
                userApi.updateProfile(formatData).then((res) => {
                    if (res.data.status === 200) {
                        toastSuccess(res.data.message);
                    }
                });
            } else {
                toastError(res.data.err);
            }
        });
    };
    // const { data } = useLoaderData();

    return (
        <>
            <Formik
                validationSchema={SchemaEditAccount}
                onSubmit={onSubmit}
                initialValues={{
                    fname: data.fname,
                    lname: data.lname,
                    phone: data.phone,
                    address: data.address,
                    zipCode: data.zipCode,
                }}
            >
                {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors }) => {
                    return (
                        <FormContainer noValidate onSubmit={handleSubmit}>
                            <>
                                {/* Email*/}
                                <Stack
                                    direction="horizontal"
                                    gap={4}
                                    className="justify-content-between align-items-center"
                                >
                                    <FormControl
                                        className=""
                                        control="input"
                                        type="text"
                                        placeholder="Please enter your first name..."
                                        label="First Name"
                                        controlId="fname"
                                        name="fname"
                                        value={values.fname}
                                        onChange={handleChange}
                                        isInvalid={touched.fname && errors.fname}
                                        message={errors.fname}
                                    />
                                    <FormControl
                                        className=""
                                        control="input"
                                        type="text"
                                        placeholder="Please enter your first name..."
                                        label="Last Name"
                                        controlId="lname"
                                        name="lname"
                                        value={values.lname}
                                        onChange={handleChange}
                                        isInvalid={touched.lname && errors.lname}
                                        message={errors.lname}
                                    />
                                </Stack>
                                <FormControl
                                    control="input"
                                    type="text"
                                    placeholder="Please enter your first name..."
                                    label="Phone"
                                    controlId="phone"
                                    name="phone"
                                    value={values.phone}
                                    onChange={handleChange}
                                    isInvalid={touched.phone && errors.phone}
                                    message={errors.phone}
                                />
                                <FormControl
                                    control="input"
                                    type="text"
                                    placeholder="Please enter your first name..."
                                    label="Address"
                                    controlId="address"
                                    name="address"
                                    value={values.address}
                                    onChange={handleChange}
                                    isInvalid={touched.address && errors.address}
                                    message={errors.address}
                                />
                                <FormControl
                                    control="input"
                                    type="text"
                                    placeholder="Please enter your first name..."
                                    label="Zip Code"
                                    controlId="zipCode"
                                    name="zipCode"
                                    value={values.zipCode}
                                    onChange={handleChange}
                                    isInvalid={touched.zipCode && errors.zipCode}
                                    message={errors.zipCode}
                                />
                                <Stack
                                    direction="horizontal"
                                    className="justify-content-center"
                                    gap={3}
                                >
                                    <ButtonStyled
                                        type="submit"
                                        className="text-end"
                                        // onClick={handleNextStep}
                                        // disabled={!isStep1Valid}
                                    >
                                        Submit
                                    </ButtonStyled>
                                    <ButtonStyled
                                        type="button"
                                        buttonType="outlined"
                                        className="text-end"
                                        onClick={() => navigate('/')}
                                        // disabled={!isStep1Valid}
                                    >
                                        cancel
                                    </ButtonStyled>
                                </Stack>
                            </>
                        </FormContainer>
                    );
                }}
            </Formik>
        </>
    );
};

export default EditAccountForm;
export function loaderInfoUser() {
    return authApi.getUser();
}
