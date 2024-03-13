import {SCREENS} from "../../constants/screens";

const infoItems = [
  { label: 'Contact', actionText: 'Change' },
  { label: 'Ship to', actionText: 'Change' },
  { label: 'Shipping method', actionText: 'Change', detail: 'Standard' },
]

const PaymentInfoSummary = ({onSwitchScreen}) => {
  return (
    <div className='payment-top w-full'>
      <ul>
        {infoItems.map(({ label, actionText, detail }) => (
          <li key={label} className='flex justify-between items-center py-2'>
            <span>{label}</span>
            {detail && <span>{detail}</span>}
            <span onClick={() => onSwitchScreen(SCREENS.shipping)} className='underline cursor-pointer'>{actionText}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PaymentInfoSummary
