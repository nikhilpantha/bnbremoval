import * as Yup from 'yup';

const EstimateFormValidationSchema = Yup.object().shape({
  from: Yup.string().required('Location From is required'),
  to: Yup.string().required('Location To is required'),
  date: Yup.string().required('Date is required'),
  time: Yup.string().required('Time is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
});

export default EstimateFormValidationSchema;
