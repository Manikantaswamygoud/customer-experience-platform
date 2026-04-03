import React, { useState } from 'react';
import { getFlights } from '../services/FlightService';

function FlightSearch() {

  const [flights, setFlights] = useState([]);

  const handleSearch = () => {
    getFlights().then(response => {
      setFlights(response.data);
    });
  };

  return (
    <div>
      <h2>Search Flights</h2>

      <button onClick={handleSearch}>
        Search Flights
      </button>

      {flights.map((flight, index) => (
        <div key={index}>
          {flight.name} - {flight.price}
        </div>
      ))}

    </div>
  );
}

export default FlightSearch;