import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import FlightSearch from './components/FlightSearch';
import Booking from './components/Booking';

function App() {
  return (
    <Router>
      <div>
        <h1>Airline Customer Experience</h1>

        <nav>
          <Link to="/">Home</Link> |
          <Link to="/search">Search</Link> |
          <Link to="/booking">Booking</Link>
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