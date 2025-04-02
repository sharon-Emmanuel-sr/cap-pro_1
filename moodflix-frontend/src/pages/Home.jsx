import { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get('/api/movies/recommendations/happy');
      setMovies(response.data);
    };
    fetchMovies();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Recommended Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
