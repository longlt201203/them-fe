import * as Yup from 'yup';

export const SchemaRegister = Yup.object().shape({
    email: Yup.string().required(),
    phone: Yup.string().required(),
    password: Yup.string().required(),
    confirmPassword: Yup.string().required(),
    fname: Yup.string().required(),
    lname: Yup.string().required(),
    zipCode: Yup.string().required(),
    address: Yup.string().required(),
    terms: Yup.bool().required().oneOf([true], 'Terms must be accepted'),
});
