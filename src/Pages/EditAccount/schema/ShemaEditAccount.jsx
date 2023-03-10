import * as Yup from 'yup';

export const SchemaEditAccount = Yup.object().shape({
    phone: Yup.string()
        .required('Phone number cannot be empty')
        .matches(/^(01|03|05|07|08|09)+([0-9]{8})\b/, 'Incorrect format for phone number'),
    fname: Yup.string().required('First name cannot be empty'),
    lname: Yup.string().required('Last name cannot be empty'),
    zipCode: Yup.string().required('Zip code cannot be empty'),
    address: Yup.string().required('Address cannot be empty'),
    // terms: Yup.bool().required().oneOf([true], 'Terms must be accepted'),
});
