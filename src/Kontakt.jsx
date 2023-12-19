import React, { useState } from 'react'
import './Kontakt.css'

function Kontakt() {
    const [name, setName] = useState('');
    const [utisak, setUtisak] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleUtisakChange = (e) => {
        setUtisak(e.target.value);
    }

    const submitMessage = () => {
        if(name === '' || utisak === '') {
            alert("Molimo vas popunite sva polja");
        }else {
            alert("Komentar je uspešno poslat");
        }
    }


  return (
    <div className='kontakt'>
        <h1>Pišite nam</h1>

        <label htmlFor="name">Ime:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />

        <label htmlFor="utisak">Utisak:</label>
        <textarea id="utisak" value={utisak} onChange={handleUtisakChange}></textarea>

        <button className="posalji" onClick={submitMessage}>Pošalji</button>

    </div>
  )
}

export default Kontakt