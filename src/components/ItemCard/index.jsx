import product from '../../assets/images/product.jpeg'
import {useContext} from "react";
import {Store} from "../../App";

const ItemCard = () => {
  const {context: {order}} = useContext(Store)
  return (
    <div className='right-side-top w-full block'>
      <div className='product-thumb'>
        <span className='cart-item'>{order.item.count}</span>
        <img src={product} alt='' className='img-fluid'/>
      </div>
      <div className='product-name w-full block'>{order.item.name}</div>
      <div className='product-supply'>{order.item.supply}</div>
      <div className='product-price'><span>${order.price}</span> ${order.total}</div>
    </div>
  )
}

export default ItemCard
