import {states} from '../../constants/states'

const ShippingAddressForm = ({ values, handleChange, isBilling }) => {

  const formatName = (name) => isBilling ? `billingAddress.${name}` : name

  return (
    <div className='checkout-form w-full'>
      <div className='flex flex-wrap -mx-3'>
        <div className='w-full'>
          <div className='form-group'>
            <select
              id='country'
              name={formatName('country')}
              className='form-select checkout w-full'
              value={values.country}
              onChange={handleChange}
            >
              <option data-code='US' data-pure-numeric-postal-code='false' value='United States'>
                United States
              </option>
            </select>
          </div>
        </div>
        <div className='w-full md:w-1/2 pr-2'>
          <div className='form-group'>
            <input
              type='text'
              id='first-name'
              name={formatName('firstName')}
              className='form-control checkout w-full'
              placeholder='First name (optional)'
              value={values.firstName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='w-full md:w-1/2 pl-2'>
          <div className='form-group'>
            <input
              type='text'
              id='last-name'
              name={formatName('lastName')}
              className='form-control checkout w-full'
              placeholder='Last name'
              value={values.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='w-full'>
          <div className='form-group'>
            <input
              type='text'
              id='address'
              name={formatName('address')}
              className='form-control checkout w-full'
              placeholder='Address'
              value={values.address}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='w-full'>
          <div className='form-group'>
            <input
              type='text'
              id='apartment'
              name={formatName('apartment')}
              className='form-control checkout w-full'
              placeholder='Apartment, suite, etc. (optional)'
              value={values.apartment}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='w-full md:w-1/3 pr-2'>
          <div className='form-group'>
            <input
              type='text'
              id='city'
              name={formatName('city')}
              className='form-control checkout w-full'
              placeholder='City'
              value={values.city}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='w-full md:w-1/3 px-2'>
          <div className='form-group'>
            <select
              id='state'
              name={formatName('state')}
              className='form-select checkout w-full'
              value={values.state}
              onChange={handleChange}
            >
              <option>State</option>
              {states.map(({ name, value }) => (
                <option key={value} value={value}>{name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className='w-full md:w-1/3 pl-2'>
          <div className='form-group'>
            <input
              type='text'
              id='zipCode'
              name={formatName('zipCode')}
              className='form-control checkout w-full'
              placeholder='Zip code'
              value={values.zipCode}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='w-full'>
          <div className='form-group'>
            <input
              type='tel'
              id='phone'
              name={formatName('phone')}
              className='form-control checkout w-full'
              placeholder='Phone'
              value={values.phone}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShippingAddressForm
