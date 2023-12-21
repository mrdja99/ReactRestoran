import React, { useState, useEffect } from 'react'
import './Kontakt.css'
import axios from 'axios';

function Kontakt() {
    const [name, setName] = useState('');
    const [utisak, setUtisak] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedFood, setSelectedFood] = useState('');
    const [cities, setCities] = useState([]);
    const [foods, setFoods] = useState([]);

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleUtisakChange = (e) => {
        setUtisak(e.target.value);
    }

    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
    }

    const handleFoodChange = (e) => {
        setSelectedFood(e.target.value);
    }

    const submitMessage = () => {
        if(name === '' || utisak === '' || selectedCity === '' || selectedFood === '' ) {
            alert("Molimo vas popunite sva polja");
        }else {
            alert("Komentar je uspešno poslat");
        }
    }

    useEffect(() => {
        const fetchCities = async () => {
          try {
            const response = await axios.get('https://countriesnow.space/api/v0.1/countries');
            
            const serbiaData = response.data.data.find(country => country.country === 'Serbia');
            console.log('Odgovor od API-ja:', serbiaData);
            if (serbiaData) {
                setCities(serbiaData.cities);
            } else {
                console.error('Podaci o gradovima za Srbiju nisu pronađeni.');
            }
          } catch (error) {
            console.error('Greška pri učitavanju gradova:', error);
          }
        };

        const fetchFoods = async () => {
            try {
              const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
              setFoods(response.data.categories);
            } catch (error) {
              console.error('Greška pri učitavanju hrane:', error);
            }
          };
    
        fetchCities();
        fetchFoods();
      }, []);


  return (
    <div className='kontakt'>
        <h1>Pišite nam</h1>

        <label htmlFor="name">Ime:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />

        <label htmlFor='city'>Izaberite grad odakle pišete:</label>
        <select id='city' value={selectedCity} onChange={handleCityChange}>
            <option value='' disabled>
            Izaberite grad
            </option>
            {cities.map((city, index) => (
            <option key={index} value={city}>
                {city}
            </option>
            ))}
        </select>

        <label htmlFor='food'>Izaberite omiljenu hranu:</label>
        <select id='food' value={selectedFood} onChange={handleFoodChange}>
            <option value='' disabled>
            Izaberite omiljenu hranu
            </option>
            {foods.map((food) => (
            <option key={food.idCategory} value={food.strCategory}>
                {food.strCategory}
            </option>
            ))}
        </select>

        <label htmlFor="utisak">Utisak:</label>
        <textarea id="utisak" value={utisak} onChange={handleUtisakChange}></textarea>

        <button className="posalji" onClick={submitMessage}>Pošalji</button>

    </div>
  )
}

export default Kontakt