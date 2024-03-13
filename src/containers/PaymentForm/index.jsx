import PaymentInfoSummary from '../../components/PaymentInfoSummary '
import PaymentMethodBlock from '../../components/PaymentMethodBlock'
import BillingAddressBlock from '../../components/BillingAddressBlock '
import {SCREENS} from '../../constants/screens'
import {useContext} from "react";
import {Store} from "../../App";
import {useFormik} from "formik";
import {initialValues, validationSchema} from "./formProperties";

const PaymentScreen = ({ onSwitchScreen }) => {
  const {context, setContext} = useContext(Store)

  const handleReturn = () => {
    onSwitchScreen(SCREENS.shipping)
  }


  const { values, handleChange } = useFormik({
    initialValues: {
      ...initialValues,
      ...{
        card: {...initialValues.card, ...context.card},
        billingAddress: {...initialValues.billingAddress, ...context.billingAddress}
      }
    },
    validationSchema
  })

  const handleCheckout = () => {
    const result = {
      ...context,
      card: values.card,
      billingAddress: values.useShippingAddress ? context.shippingAddress : values.billingAddress
    }
    setContext(result)
    console.log(result)
    alert('Form successfully send! Check console to view result')
  }

  return (
    <>
      <PaymentInfoSummary onSwitchScreen={onSwitchScreen}/>
      <PaymentMethodBlock card={values.card} handleChange={handleChange}/>
      <BillingAddressBlock billingAddress={values.billingAddress} handleChange={handleChange}/>
      <div className='btn-row flex w-full justify-between'>
        <div className='back-link'>
          <button
            onClick={handleReturn}
            className='flex items-center gap-2 text-blue-600 hover:text-blue-700'
          >
            <svg
              focusable='false'
              aria-hidden='true'
              className='w-5 h-5 fill-current'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 10 10'
            >
              <path d='M8 1L7 0 3 4 2 5l1 1 4 4 1-1-4-4'></path>
            </svg>
            Return to shipping
          </button>
        </div>
        <button className='checkout-btn' onClick={handleCheckout}>Checkout now</button>
      </div>
    </>
  )
}

export default PaymentScreen
