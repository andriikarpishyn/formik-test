import {useContext} from "react";
import {Store} from "../../App";

const TotalBox = ({
                    total = '$99.00',
                    shipping = 'Free',
                    subtotal = '$99.00'
                  }) => {
  const {context: {order}} = useContext(Store)
  return (
    <div className='total-box-row w-full'>
      <div className='data-row w-full flex flex-wrap justify-between'>
        <span>Subtotal</span>
        <span>${order.subtotal}</span>
      </div>
      <div className='data-row w-full flex flex-wrap justify-between'>
        <span>Shipping</span>
        <span>{order.shipping === 0 ? 'FREE' : order.shipping}</span>
      </div>
      <div className='data-row w-full flex flex-wrap justify-between total'>
        <span>Total</span>
        <span>USD ${order.total}</span></div>
    </div>
  )
}

export default TotalBox
