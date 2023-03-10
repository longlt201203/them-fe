import * as Yup from 'yup';

export const SchemaResetForm = Yup.object().shape({
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
});
