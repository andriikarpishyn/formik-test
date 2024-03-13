import cardLogo from '../../assets/images/card-logo.jpg';

const PaymentMethodBlock = ({card, handleChange}) => {

  return (
    <div className='payment-card-section w-full block'>
      <div className='checkout-title flex-auto'>Payment</div>
      <p> All transactions are secure and encrypted. </p>
      <div className='payment-card-box w-full block'>
        <div className='payment-card-box-top flex justify-between items-center'>
          <span>Credit card </span>
          <span><img src={cardLogo} alt='' className='mx-auto block'/></span>
        </div>
        <div className='payment-card-box-data w-full block'>
          <div className='flex flex-wrap -mx-3'>
            <div className='w-full px-3'>
              <div className='form-group w-full block'>
                <input
                  type='text'
                  id='card.number'
                  placeholder='Card Number'
                  className='form-control checkout w-full'
                  value={card.number}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='w-full px-3'>
              <div className='form-group w-full block'>
                <input
                  type='text'
                  id='card.name'
                  placeholder='Name on card'
                  className='form-control checkout w-full'
                  value={card.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='w-full md:w-1/2 px-3'>
              <div className='form-group w-full block'>
                <input
                  type='text'
                  id='card.expiration'
                  placeholder='Expiration date (MM / YY)'
                  className='form-control checkout w-full'
                  value={card.expiration}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='w-full md:w-1/2 px-3'>
              <div className='form-group w-full block'>
                <input
                  type='text'
                  id='card.cvv'
                  placeholder='Security code'
                  className='form-control checkout w-full'
                  value={card.cvv}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentMethodBlock
