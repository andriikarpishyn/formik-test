import * as Yup from "yup";

export const initialValues = {
  useShippingAddress: true,
  card: {
    number: '',
    name: '',
    expiration: '',
    cvv: ''
  },
  billingAddress: {
    country: 'United States',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
  }
};

export const validationSchema = Yup.object().shape({})