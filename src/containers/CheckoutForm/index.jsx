import ContactForm from '../../components/ContactForm'
import ShippingAddressForm from '../../components/ShippingAddressForm'
import {useFormik} from 'formik'
import {SCREENS} from '../../constants/screens'
import {initialValues, validationSchema} from "./formProperties";
import {useContext} from "react";
import {Store} from "../../App";


const CheckoutForm = ({ onSwitchScreen }) => {
  const {context, setContext} = useContext(Store)

  const { values, errors, isValid, dirty, handleChange } = useFormik({
    initialValues: {
      ...initialValues,
      email: context.email,
      withNews: context.withNews,
      ...context.shippingAddress
    },
    validationSchema
  })

  const handleContinue = () => {
    const { email, withNews, ...shippingAddress } = values;
    setContext({
      ...context,
      email,
      withNews,
      shippingAddress
    })
    onSwitchScreen(SCREENS.payment)
  }

  return (
    <>
      <ContactForm
        email={values.email}
        withNews={values.withNews}
        handleChange={handleChange}
        error={errors.email}
      />
      <div className='checkout-form-section w-full block'>
        <div className='checkout-title flex-auto'>Shipping address</div>
        <ShippingAddressForm values={values} handleChange={handleChange}/>
        <div className='btn-row w-full flex justify-content-end'>
          <button
            className='checkout-btn'
            disabled={!(isValid && (values.email || dirty))}
            onClick={handleContinue}
          >
            Continue to payment
          </button>
        </div>
      </div>
    </>
  )
}

export default CheckoutForm
