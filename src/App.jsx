import { useEffect } from 'react';
import Hero from './components/Hero';
import Invitation from './components/Invitation';
import Details from './components/Details';
import GuestInfo from './components/GuestInfo';
import ColorPalette from './components/ColorPalette';
import RSVP from './components/RSVP';
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
      <GuestInfo />
      <div id="colors">
        <ColorPalette />
      </div>
      <div id="rsvp">
        <RSVP />
      </div>
    </div>
  );
}

export default App;
