import {useContext} from "react";
import {Store} from "../../App";

const DiscountBox = () => {
  const {context: {order}} = useContext(Store)
  return (
    <>
      <div className='discount-box w-full'>
        <input type='text' className='form-control checkout w-full' placeholder='Discount code'/>
        <button>Apply</button>
      </div>
      <div className='discount-code-btn-row'>
        <ul>
          <li>
            <button className='discount-code-btn'>{order.discount.code}</button>
            <span className='code-close-btn'>x</span>
          </li>
        </ul>
      </div>
    </>

  )
}

export default DiscountBox
