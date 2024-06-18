import * as Yup from 'yup';

export const validationSchema = Yup.object({
  firstName: Yup.string()
    .matches(/^[A-Za-z]+$/, 'First name must contain only letters')
    .required('First name is required'),
  lastName: Yup.string()
    .matches(/^[A-Za-z]+$/, 'Last name must contain only letters')
    .required('Last name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .matches(/^[^@\s]+@gmail\.com$/, 'Email must be a valid @gmail.com address')
    .required('Email is required'),
  address: Yup.string()
    .required('Address code is required'),
  phoneNumber: Yup.string()
    .matches(/^\d+$/, 'Phone number must contain only numbers')
    .required('Phone number is required'),
  documentPhoto: Yup.mixed()
    .required('Document photo is required')
});
