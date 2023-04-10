import React, { useState } from 'react';

import { Formik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import * as yup from 'yup';

import ButtonStyled from '../../../../components/Button';
import UploadControl from '../../../../components/UploadControl';
import { ProfileStyle } from '../../style';
import Avatar from '../Header/Avatar';
import Cover from '../Header/Cover';
import GoBack from '../Header/GoBack';

const user = {
    name: 'Leslie Flores',
    bio: 'Mauris ornare egestas iaculis leo. Lacus commodo non ac vulputate dignissim.',
};
const schema = yup.object().shape({
    firstName: yup.string().required('Please enter your first name'),
    lastName: yup.string().required('Please enter your last name'),
    bio: yup.string(),
    phone: yup.string().required('Please enter your phone'),
    address: yup.string().required('Please enter your address'),
    zipCode: yup.string().required('Please enter zip code'),
});

const index = () => {
    const [file, setFile] = useState('');
    const handleFileChange = async (e) => {
        try {
            const reader = new FileReader();
            const file = e.target.files[0];
            console.log(file);
            if (file) reader.readAsDataURL(file);
            reader.onload = (e) => {
                console.log(e.target.result);
                setFile(e.target.result);
                console.log(e.target.result);
            };
        } catch (err) {
            console.log(err);
        }
    };
    console.log(file);
    return (
        <ProfileStyle>
            <div>
                <Cover className="bg-secondary size-cover top-0 img-fluid" />
                <div className="px-3">
                    <div className="d-flex justify-content-center mb-5">
                        <UploadControl
                            className="d-flex justify-content-center"
                            onChange={(e) => handleFileChange(e)}
                        >
                            {file != '' ? (
                                <img
                                    src={file}
                                    className="img-thumbnail size-avatar rounded-circle d-flex align-items-center justify-content-center position-absolute top-13"
                                />
                            ) : (
                                <div className="img-thumbnail border-dashed size-avatar rounded-circle d-flex align-items-center justify-content-center position-absolute top-13">
                                    <i className="bi bi-camera color-grey"></i>
                                </div>
                            )}
                        </UploadControl>
                    </div>
                </div>
                <div className="position-fixed top-0 w-100 navbar">
                    <div className="px-2">
                        <GoBack href="/user" />
                    </div>
                </div>
                <div className="px-2">
                    <Formik
                        validationSchema={schema}
                        onSubmit={console.log}
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            bio: '',
                            phone: '',
                            address: '',
                            zipCode: '',
                        }}
                    >
                        {({
                            handleSubmit,
                            handleChange,
                            handleBlur,
                            values,
                            touched,
                            isValid,
                            errors,
                        }) => (
                            <Form noValidate onSubmit={handleSubmit}>
                                <div className="d-flex justify-content-between">
                                    <Form.Group controlId="firstName" className="col-5">
                                        <Form.Label className="fw-bold">First Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="First Name"
                                            isValid={touched.firstName && !errors.firstName}
                                            isInvalid={!!errors.firstName}
                                            onChange={handleChange}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.firstName}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group controlId="lastName" className="col-5">
                                        <Form.Label className="fw-bold">Last Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Last Name"
                                            isValid={touched.lastName && !errors.lastName}
                                            isInvalid={!!errors.lastName}
                                            onChange={handleChange}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.lastName}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                                <Form.Group controlId="bio">
                                    <Form.Label className="fw-bold">Bio</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        type="textarea"
                                        placeholder="Bio"
                                        row="4"
                                        isValid={touched.bio && !errors.bio}
                                        isInvalid={!!errors.bio}
                                        onChange={handleChange}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.bio}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="phone">
                                    <Form.Label className="fw-bold">Phone Number</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Phone Number"
                                        isValid={touched.phone && !errors.phone}
                                        isInvalid={!!errors.phone}
                                        onChange={handleChange}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.phone}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="address">
                                    <Form.Label className="fw-bold">Address</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Address"
                                        isValid={touched.address && !errors.address}
                                        isInvalid={!!errors.address}
                                        onChange={handleChange}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.address}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="zipcode">
                                    <Form.Label className="fw-bold">Zip Code</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Zip Code"
                                        isValid={touched.zipCode && !errors.zipCode}
                                        isInvalid={!!errors.zipCode}
                                        onChange={handleChange}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.zipCode}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <div className="d-flex justify-content-around mt-3 mb-2">
                                    <ButtonStyled className="border-0" href="/user">
                                        Save
                                    </ButtonStyled>
                                    <ButtonStyled variant="outlined" className="" href="/user">
                                        Cancel
                                    </ButtonStyled>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </ProfileStyle>
    );
};

export default index;
