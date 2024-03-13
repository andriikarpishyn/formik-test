const ContactForm = ({ email, withNews, handleChange, error }) => {
  return (
    <div className='left-top-row w-full flex flex-wrap justify-between'>
      <div className='checkout-title flex-auto'>Contact</div>
      <div className='email-box w-full block'>
        <input
          type='email'
          id='email'
          className='form-control checkout w-full'
          placeholder='Email'
          value={email}
          onChange={handleChange}
        />
        {error ? <div className='text-red-500'>{error}</div> : null}
        <div className='checkbox-row w-full block'>
          <label className='control control-checkbox'>
            Email me with news and offers
            <input id="withNews" type='checkbox' checked={withNews} onChange={handleChange} />
            <div className='control-indicator'></div>
          </label>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
