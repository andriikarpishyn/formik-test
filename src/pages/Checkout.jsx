import CheckoutForm from '../containers/CheckoutForm'
import CheckoutLayout from '../layouts/CheckoutLayout'
import PaymentScreen from '../containers/PaymentForm'
import {useState} from 'react'
import {SCREENS} from '../constants/screens'

const SCREEN_COMPONENTS = {
  shipping: CheckoutForm,
  payment: PaymentScreen,
}

const Checkout = () => {
  const [currentScreen, setCurrentScreen] = useState(SCREENS.shipping)

  const switchScreen = (screen) => {
    if (SCREENS[screen]) {
      setCurrentScreen(screen)
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  const ScreenComponent = SCREEN_COMPONENTS[currentScreen]

  return (
    <CheckoutLayout>
      <ScreenComponent onSwitchScreen={switchScreen}/>
    </CheckoutLayout>
  )
}

export default Checkout
