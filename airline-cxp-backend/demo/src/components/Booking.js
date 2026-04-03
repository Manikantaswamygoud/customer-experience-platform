import React, { useState } from 'react';
import { createBooking } from './services/BookingService';

function Booking() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const booking = {
      name: name,
      email: email
    };

    console.log("Sending booking:", booking); // Debug

    createBooking(booking)
    .then(response => {
        console.log("Success:", response);
        alert("Booking Confirmed");
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Booking failed");
    });
  };

  return (
    <div>
      <h2>Flight Booking</h2>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Passenger Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit">
          Confirm Booking
        </button>

      </form>

    </div>
  );
}

export default Booking;