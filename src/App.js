import './App.css';
import NavBar from './NavBar';
import ImageSlider from './ImageSlider';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Onama from './Onama';
import Pocetna from './Pocetna';
import Kontakt from './Kontakt';



function App() {

  return (
    <BrowserRouter>
    <div className='App' >
      <NavBar/>
      <ImageSlider/>
        <Routes>
          <Route path="/" element={<Pocetna />} />
          <Route path="/onama" element={<Onama />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      
      
      {/*
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
      
      <Footer/>
    */}
    <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
