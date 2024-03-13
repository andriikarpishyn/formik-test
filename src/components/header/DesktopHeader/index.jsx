import logo from '../../../assets/images/logo-blue.png'

const DesktopHeader = () => {
  return (
    <>
      <div className='checkout-logo w-full hidden lg:block'>
        <img src={logo} alt=''/>
      </div>
      <div className='cus-breadcrumb w-full hidden lg:block'>
        <ul>
          <li>Shipping</li>
          <li className='active'>Payment</li>
        </ul>
      </div>
    </>
  )
}

export default DesktopHeader
