import React from 'react';

function Booking() {
  return (
    <div>
      <h2>Flight Booking</h2>

      <form>
        <div>
          <label>Passenger Name</label>
          <br/>
          <input type="text" placeholder="Enter Name" />
        </div>

        <br/>

        <div>
          <label>Email</label>
          <br/>
          <input type="email" placeholder="Enter Email" />
        </div>

        <br/>

        <button>Confirm Booking</button>
      </form>
    </div>
  );
}

export default Booking;