import * as Yup from 'yup';

export const SchemaRegister = Yup.object().shape({
    email: Yup.string().required(),
    phone: Yup.string()
        .required('Phonenumber cannot be empty')
        .matches(/^(01|03|05|07|08|09)+([0-9]{8})\b/, 'Your phone does not right'),
    password: Yup.string().required(),
    confirmPassword: Yup.string().required(),
    fname: Yup.string().required(),
    lname: Yup.string().required(),
    zipCode: Yup.string().required(),
    address: Yup.string().required(),
    // terms: Yup.bool().required().oneOf([true], 'Terms must be accepted'),
});
