import { useEffect } from 'react';
import Hero from './components/Hero';
import Invitation from './components/Invitation';
import Details from './components/Details';
import Transfer from './components/Transfer';
import GuestInfo from './components/GuestInfo';
import ColorPalette from './components/ColorPalette';
import NoFlowers from './components/NoFlowers';
import RSVP from './components/RSVP';
import PhotoUpload from './components/PhotoUpload';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="app">
      <div id="hero">
        <Hero />
      </div>
      <Invitation />
      <div id="details">
        <Details />
      </div>
      <div id="transfer">
        <Transfer />
      </div>
      <GuestInfo />
      <div id="colors">
        <ColorPalette />
      </div>
      <NoFlowers />
      <div id="rsvp">
        <RSVP />
      </div>
      <div id="photos">
        <PhotoUpload />
      </div>
      <Footer />
    </div>
  );
}

export default App;
