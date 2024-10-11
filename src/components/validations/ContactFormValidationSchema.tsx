import * as Yup from 'yup';

export const ContactFormSchemaValidation = Yup.object().shape({
  yourName: Yup.string().required('Your name is required'),
  phone: Yup.string()
    .required('Phone number is required')
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits'),
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email address'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters long'),
});
