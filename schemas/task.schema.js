const yup = require('yup');

module.exports.TASK_SCHEMA = yup.object({
    body: yup.string().required('This field is required').min(3),
    isDone: yup.string().required(),
    deadline:yup.date()
});