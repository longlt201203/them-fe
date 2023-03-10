import * as Yup from 'yup';

export const SchemaEditAccount = Yup.object().shape({
    phone: Yup.string()
        .required('Phonenumber cannot be empty')
        .matches(/^(01|03|05|07|08|09)+([0-9]{8})\b/, 'Your phone does not right'),
    fname: Yup.string()
        .max(30, 'Username must be at most 30 characters.')
        .required('Username is required.'),
    lname: Yup.string()
        .max(30, 'Username must be at most 30 characters.')
        .required('Username is required.'),
    zipCode: Yup.string().required(),
    address: Yup.string().required(),
    // terms: Yup.bool().required().oneOf([true], 'Terms must be accepted'),
});
