import React, { useState } from 'react'
import './NewsletterForm.css'

function NewsletterForm() {
    const [email, setEmail] = useState('');

    const isValidEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    }

    const subscribeMessage = () => {
        if(isValidEmail(email)) {
            prompt("Uspešno ste se prijavili");
        } else {
            prompt("Neispravan mejl. Molimo unesite ispravan mejl.");
        }
    }

    return (
        <div className='newsletter-form'>
            <form>
                <input type="email" placeholder="Unesite vašu email adresu" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button className="subscriber" type="button" onClick={subscribeMessage}>Prijavi se</button>
            </form>
        </div>
    )
}

export default NewsletterForm