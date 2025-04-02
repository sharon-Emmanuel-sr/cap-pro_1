// src/services/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Add token to request headers
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Auth Services
export const loginUser = (userData) => API.post('/auth/login', userData);
export const registerUser = (userData) => API.post('/auth/register', userData);
export const getCurrentUser = () => API.get('/auth/me');

// Movie Services
export const fetchRecommendedMovies = (mood) => API.get(`/movies/recommendations/${mood}`);
export const fetchMovieDetails = (movieId) => API.get(`/movies/${movieId}`);

export default API;
