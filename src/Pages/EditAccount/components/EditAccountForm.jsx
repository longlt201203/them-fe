import { useState } from 'react';

import { Formik } from 'formik';
import { Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import ButtonStyled from '../../../components/Button';
import FormControl from '../../../components/Formik/FormControl';
import ModalComponent from '../../../components/Modal/Modal';
// import { toastError, toastSuccess } from '../../../components/ToastNotification';
import authApi from '../../../utils/api/authApi';
import localFileApi from '../../../utils/api/localFIleApi';
import userApi from '../../../utils/api/userApi';
import { SchemaEditAccount } from '../schema/ShemaEditAccount';
import { FormContainer } from '../styled';

const EditAccountForm = ({ file, data, cover }) => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState('');
    const onSubmit = async (value, { setFieldError }) => {
        const postData = value;
        const avtUpload = file ? file[0] : null;
        const coverUpload = cover ? cover[0] : null;
        console.log(avtUpload);
        if (avtUpload) {
            const res = await localFileApi.postImg(avtUpload);
            console.log(res);
            if (res.data.status == 200) {
                postData.avt = res.data.data[0].id;
            }
        }
        if (coverUpload) {
            const res = await localFileApi.postImg(coverUpload);
            if (res.data.status == 200) {
                postData.cover = res.data.data[0].id;
            }
        }
        userApi.updateProfile(postData).then((res) => {
            if (res.data.status === 200) {
                setShow(true);
                setMessage(res.data.message);
            }
            if (res.data.status === 400) {
                setShow(true);
                setMessage(res.data.message);
                res.data.err.map((el) => {
                    setFieldError(el.at, el.message);
                });
            }
        });
        // const data = {
        //     avt: file[0] ? file[0] : '',
        //     cover: cover[0] ? cover[0] : '',
        // };
        // await localFileApi.postImg(data).then((res) => {
        //     console.log(res);
        //     if (res.data.status === 200) {
        //         const formatData = {
        //             ...value,
        //             avt: res.data.data[0] ? res.data.data[0].id : data.avt,
        //             cover: res.data.data[1] ? res.data.data[1].id : data.cover,
        //         };

        //     } else {
        //         toastError(res.data.err);
        //     }
        // });
    };
    // const { data } = useLoaderData();

    return (
        <>
            <ModalComponent
                success={true}
                show={show}
                setShow={setShow}
                body={message}
                title={'SUCCESS'}
            />
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
