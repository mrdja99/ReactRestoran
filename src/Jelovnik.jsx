import React, { useState } from 'react'
import './Jelovnik.css'

function Jelovnik() {

    const [zoomedIn, setZoomedIn] = useState(null);
    const [slatkaZoomedIn, setSlatkaZoomedIn] = useState(null);
    
    const zoomImageClick = (index, type) => {
        if(type === 'slana') {
            setZoomedIn(zoomedIn === index ? null : index);
        }else if(type === 'slatka'){
            setSlatkaZoomedIn(slatkaZoomedIn === index ? null : index);
        }
        
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

    const slatkaHrana = [
        {
            id:1,
            naziv: "Cheesecake",
            cena: "400 din",
            slika: require('./images/Cheesecake.jpg')
        },
        {
            id:2,
            naziv: "Jaffa torta",
            cena: "600 din",
            slika: require('./images/JaffaTorta.jpg')
        },
        {
            id:3,
            naziv: "Lenja pita",
            cena: "200 din",
            slika: require('./images/LenjaPita.jpg')
        },
        {
            id:4,
            naziv: "Trilece",
            cena: "300 din",
            slika: require('./images/Trilece.jpg')
        },
        {
            id:5,
            naziv: "Tiramisu",
            cena: "500 din",
            slika: require('./images/Tiramisu.jpg')
        }
    ]

  return (
    <div className='jelovnik' data-testid="jelovnik-test">
        <h1>Slana hrana</h1>
        <div className='cards'>
            {slanaHrana.map((slanis, index) => (
            <div key={slanis.id} className={`card ${zoomedIn === index ? 'zoomed' : ''}`} onClick={() => {zoomImageClick(index, 'slana')}}>
                <img src={slanis.slika} alt={slanis.naziv} />
                <h2>{slanis.naziv}</h2>
                <p>{slanis.cena}</p>
            </div>
            ))}
        </div>
        <h1>Slatka hrana</h1>
        <div className='cards'>
            {slatkaHrana.map((slatkis, index) => (
            <div key={slatkis.id} className={`card ${slatkaZoomedIn === index ? 'zoomed' : ''}`} onClick={() => {zoomImageClick(index, 'slatka')}}>
                <img src={slatkis.slika} alt={slatkis.naziv} />
                <h2>{slatkis.naziv}</h2>
                <p>{slatkis.cena}</p>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Jelovnik