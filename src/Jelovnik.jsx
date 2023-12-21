import React, { useState } from 'react'
import './Jelovnik.css'

function Jelovnik() {

    const [zoomedIn, setZoomedIn] = useState(null);
    
    const zoomImageClick = (index) => {
        setZoomedIn(zoomedIn === index ? null : index);
    }

    const slanaHrana = [
        {
            id:1,
            naziv: "Pizza Quatro Stagioni",
            cena: "450 din",
            slika: require('./images/Pizza.jpg')
        },
        {
            id:2,
            naziv: "Gurmanska pljeskavica",
            cena: "550 din",
            slika: require('./images/GurmanskaPljeskavica.jpg')
        },
        {
            id:3,
            naziv: "Riblja čorba",
            cena: "400 din",
            slika: require('./images/RibljaCorba.jpg')
        },
        {
            id:4,
            naziv: "Pasulj",
            cena: "550 din",
            slika: require('./images/Pasulj.jpg')
        },
        {
            id:5,
            naziv: "Lovačke šnicle",
            cena: "500 din",
            slika: require('./images/LovackeSnicle.jpg')
        }
    ]

  return (
    <div className='jelovnik'>
        <h1>Slana hrana</h1>
        <div className='cards'>
            {slanaHrana.map((slanis, index) => (
            <div key={slanis.id} className={`card ${zoomedIn === index ? 'zoomed' : ''}`} onClick={() => {zoomImageClick(index)}}>
                <img src={slanis.slika} alt={slanis.naziv} />
                <h2>{slanis.naziv}</h2>
                <p>{slanis.cena}</p>
            </div>
            ))}
        </div>
        <h1>Slatka hrana</h1>
    </div>
  )
}

export default Jelovnik