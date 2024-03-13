import ShippingAddressForm from '../ShippingAddressForm'
import {useContext, useEffect, useState} from 'react'
import {Store} from "../../App";

const BillingAddressBlock = ({billingAddress, handleChange}) => {
  const {context: {shippingAddress}} = useContext(Store)

  const [isSameAddress, setIsSameAddress] = useState(billingAddress.useShippingAddress)

  const getMockEvent = (id, value) => ({target: {id, value}})

  useEffect(() => {
    handleChange(getMockEvent('billingAddress', shippingAddress))
  }, [shippingAddress, handleChange])

  const handleAddressChange = (e) => {
    const flag = e.target.value === 'same'
    handleChange(getMockEvent('useShippingAddress', flag))
    setIsSameAddress(flag)
  }

  return (
    <div className='billing-address-section w-full'>
      <div className='checkout-title flex-auto'>Billing address</div>
      <p> Select the address that matches your card or payment method. </p>
      <div className='radio-button-row w-full'>
        <label className='control control-radio'>
          Same as shipping address
          <input
            type='radio'
            name='billing-address'
            value='same'
            checked={isSameAddress}
            onChange={handleAddressChange}
          />
          <div className='control-indicator'></div>
        </label>
        <label className='control control-radio'>
          Use a different billing address
          <input
            type='radio'
            name='billing-address'
            id='address-change'
            value='different'
            checked={!isSameAddress}
            onChange={handleAddressChange}
          />
          <div className='control-indicator'></div>
        </label>
      </div>
      {!isSameAddress && (
        <div className='billing-address-form w-full'>
          <ShippingAddressForm
            handleChange={handleChange}
            values={billingAddress}
            errors={{}}
            isBilling
          />
        </div>
      )}
    </div>
  )
}

export default BillingAddressBlock
