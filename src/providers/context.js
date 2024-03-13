export const initialContext = {
  email: '',
  withNews: false,
  shippingAddress: {},
  card: {},
  billingAddress: {
    useShippingAddress: true
  },
  order: {
    item: {
      name: 'Semaglutide',
      count: 1,
      supply: '1 Month Supply'
    },
    price: 395,
    discount: {
      code: '75%Off',
      value: 75
    },
    subtotal: 99,
    total: 99,
    shipping: 0
  }

}