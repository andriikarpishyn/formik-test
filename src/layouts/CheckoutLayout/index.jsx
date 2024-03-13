import ItemCard from '../../components/ItemCard'
import DiscountBox from '../../components/DiscountBox'
import TotalBox from '../../components/TotalBox'
import CheckoutFooter from '../../components/CheckoutFooter'
import MobileHeader from '../../components/header/MobileHeader'
import DesktopHeader from '../../components/header/DesktopHeader'


const CheckoutLayout = ({ children }) => {

  return (
    <div className='w-full block'>
      <div className='container small-container mx-auto px-3'>
        <MobileHeader/>
        <div className='flex flex-wrap w-full'>
          <div className='right-side flex-auto lg:order-1'>
            <ItemCard/>
            <DiscountBox/>
            <TotalBox/>
          </div>
          <div className='left-side flex-auto lg:order-first'>
            <DesktopHeader/>
            {children}
            <CheckoutFooter/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutLayout
