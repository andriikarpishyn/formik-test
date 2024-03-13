import logo from '../../../assets/images/logo-blue.png'

const MobileHeader = () => {
  return (
    <>
      <div className='checkout-logo w-full lg:hidden text-center'>
        <img src={logo} alt='' className='m-auto'/>
      </div>
      <div className='cus-breadcrumb w-full lg:hidden'>
        <ul className='flex justify-center space-x-2'>
          <li>Shipping</li>
          <li className='active'>Payment</li>
        </ul>
      </div>
    </>
  )
}

export default MobileHeader
