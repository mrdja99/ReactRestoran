import React from 'react'
import './Pocetna.css'

function Pocetna() {
  return (
    <div>
        <h1>Specijaliteti restorana</h1>

        <div className='content-container'>
            <div className='section'>
                <img src={require('./images/Specijalitet1.jpg')}></img>
                <div className="text">
                    <h2>Piletina u gorgonzola sosu</h2>
                    <p>850 din</p>
                </div>
            </div>
            <div className='section'>
                <img src={require('./images/Specijalitet2.jpg')}></img>
                <div className="text">
                    <h2>Pasta Karbonara</h2>
                    <p>690 din</p>
                </div>
            </div>
            <div className='section'>
                <img src={require('./images/Specijalitet3.jpg')}></img>
                <div className="text">
                    <h2>Karađorđeva šnicla</h2>
                    <p>550 din</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Pocetna