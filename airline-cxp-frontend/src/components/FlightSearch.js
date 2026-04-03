import React from 'react';

function FlightSearch() {
  return (
    <div>
      <h2>Search Flights</h2>
      <input placeholder="From" />
      <input placeholder="To" />
      <input type="date" />
      <button>Search</button>
    </div>
  );
}

export default FlightSearch;