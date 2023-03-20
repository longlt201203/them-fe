import * as Yup from 'yup';

export const SchemaRegister = Yup.object().shape({
    email: Yup.string()
        .required('Email cannot be empty')
        .matches(/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/, 'Your email must match the following formats'),
    phone: Yup.string()
        .required('Phone number cannot be empty')
        .matches(/^(01|03|05|07|08|09)+([0-9]{8})\b/, 'Incorrect format for phone number'),
    password: Yup.string()
        .required('Password cannot be empty')
        .min(8, 'Your password is too short.')
        .matches(
            /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            'Password must One Uppercase, One Lowercase, One Number and one special case Character.'
        ),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), ''], 'Passwords must match')
        .required('Confirm password cannot be empty'),
    fname: Yup.string().required('First name cannot be empty'),
    lname: Yup.string().required('Last name cannot be empty'),
    zipCode: Yup.string().required('Zip code cannot be empty'),
    address: Yup.string().required('Address cannot be empty'),
    // terms: Yup.bool().required().oneOf([true], 'Terms must be accepted'),
});
