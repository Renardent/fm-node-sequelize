const yup = require('yup');

module.exports.USER_SCHEMA = yup.object({
    firstName: yup.string().required('This field is required').min(5),
    lastName: yup.string().required('This field is required').min(5),
    email: yup.string().required('Email is required').email('Invalid email'),
    password: yup.string().required('Password is required').min(8),
    birthday: yup.date(),
    gender: yup.string()
});