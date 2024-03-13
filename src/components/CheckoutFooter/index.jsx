const footerLinks = [
  { href: '#', name: 'Refund policy', },
  { href: '#', name: 'Shipping policy', },
  { href: '#', name: 'Privacy policy', },
  { href: '#', name: 'Terms of service', },
]

const CheckoutFooter = () => {
  return (
    <div className='checkout-footer-link w-full block'>
      {footerLinks.map(({ href, name }) => (
        <a key={name} href={href}>{name}</a>
      ))}
    </div>
  )
}

export default CheckoutFooter
