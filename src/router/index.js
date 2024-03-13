import {createBrowserRouter, Navigate} from 'react-router-dom'
import Checkout from '../pages/Checkout'
import {pages} from '../constants/pages'

export const router = createBrowserRouter([
  {
    path: pages.root,
    element: <Navigate to="/checkout" />
  },
  {
    path: pages.checkout,
    element: <Checkout/>,
  },
])
