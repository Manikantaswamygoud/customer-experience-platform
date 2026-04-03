import React from 'react';

function FlightList() {

  const flights = [
    { id: 1, name: "American Airlines", price: "$320" },
    { id: 2, name: "Delta Airlines", price: "$350" },
    { id: 3, name: "United Airlines", price: "$300" }
  ];

  return (
    <div className="mt-4">

      <h3>Available Flights</h3>

      {flights.map(flight => (
        <div className="card p-3 mt-2" key={flight.id}>
          <h5>{flight.name}</h5>
          <p>Price: {flight.price}</p>
          <button className="btn btn-success">
            Book Now
          </button>
        </div>
      ))}

    </div>
  );
}

export default FlightList;