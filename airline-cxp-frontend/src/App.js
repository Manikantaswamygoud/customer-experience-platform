import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import FlightSearch from './components/FlightSearch';
import Booking from './components/Booking';

function App() {
  return (
    <Router>
      <div>
        <h1>Airline Customer Experience</h1>

        <nav>
          <a href="/">Home</a> |
          <a href="/search">Search</a> |
          <a href="/booking">Booking</a>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<FlightSearch />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;