const API_BASE_URL = 'http://localhost:8080/api';

export const createBooking = async (booking) => {
  try {
    const response = await fetch(`${API_BASE_URL}/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(booking),
    });

    console.log("Status Code:", response.status);
    if (response.status === 200 || response.status === 201) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating booking:', error);
    throw error;
  }
};