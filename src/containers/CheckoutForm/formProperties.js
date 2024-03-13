import * as Yup from "yup";

export const initialValues = {
  email: '',
  withNews: false,
  country: 'United States',
  firstName: '',
  lastName: '',
  address: '',
  apartment: '',
  city: '',
  state: '',
  zipCode: '',
  phone: '',
};

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  // country: Yup.string()
  //   .required('Country is required'),
  // firstName: Yup.string()
  //   .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for the first name')
  //   .max(50, 'First name is too long')
  //   .notRequired(),
  // lastName: Yup.string()
  //   .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for the last name')
  //   .required('Last name is required'),
  // address: Yup.string()
  //   .required('Address is required'),
  // apartment: Yup.string()
  //   .notRequired(),
  // city: Yup.string()
  //   .required('City is required'),
  // state: Yup.string()
  //   .required('State is required'),
  // zipCode: Yup.string()
  //   .required('ZIP code is required')
  //   .matches(/^[0-9]+$/, 'Must be only digits')
  //   .min(5, 'ZIP code must be at least 5 digits')
  //   .max(9, 'ZIP code must be less than 9 digits'),
  // phone: Yup.string()
  //   .required('Phone number is required')
  //   .matches(/^[0-9]+$/, 'Must be only digits')
  //   .min(10, 'Phone number must be at least 10 digits')
  //   .max(15, 'Phone number must be less than 15 digits'),
})