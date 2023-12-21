import './App.css';
import NavBar from './NavBar';
import ImageSlider from './ImageSlider';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Onama from './Onama';
import Pocetna from './Pocetna';
import Kontakt from './Kontakt';
import Jelovnik from './Jelovnik';



function App() {

  return (
    <BrowserRouter>
    <div className='App' >
      <NavBar/>
      <ImageSlider/>
        <Routes>
          <Route path="/" element={<Pocetna />} />
          <Route path="/jelovnik" element={<Jelovnik />} />
          <Route path="/onama" element={<Onama />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      
      
    <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
