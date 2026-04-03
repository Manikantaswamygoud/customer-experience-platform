import axios from 'axios';

const API_URL = "http://localhost:8080/api/flights";

export const getFlights = () => {
  return axios.get(API_URL);
};