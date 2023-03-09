import * as Yup from 'yup';

export const SchemaRegister = Yup.object().shape({
    email: Yup.string()
        .required()
        .matches(/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/, 'Your email must match the following formats'),
    phone: Yup.string()
        .required('Phonenumber cannot be empty')
        .matches(/^(01|03|05|07|08|09)+([0-9]{8})\b/, 'Your phone does not right'),
    password: Yup.string()
        .required()
        .min(8, 'Your password is too short.')
        .matches(
            /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            'Password must One Uppercase, One Lowercase, One Number and one special case Character.'
        ),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), ''], 'Passwords must match')
        .required('Required'),
    fname: Yup.string().required(),
    lname: Yup.string().required(),
    zipCode: Yup.string().required(),
    address: Yup.string().required(),
    // terms: Yup.bool().required().oneOf([true], 'Terms must be accepted'),
});
