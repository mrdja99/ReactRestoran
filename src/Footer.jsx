import React from 'react'
import './Footer.css'
import NewsLetterForm from './NewsletterForm';

function Footer() {
  return (
    <div className='footer'>
        <h1 className='newsletter'>Newsletter</h1>
        <NewsLetterForm/>
    </div>
  )
}

export default Footer;