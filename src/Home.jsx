import { useEffect, useState } from 'react';
import { API_URL } from './config';
import DisplayMovie from './components/DisplayMovie';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Something went wrong');
        }
        const movies = await response.json();
        setMovies(movies);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, []);

  const moviesList = movies.map((movie, index) => (
    <li key={movie.id}>
      <DisplayMovie movie={movie} />
    </li>
  ));

  return (
    <section>
      <h1>Most Watched Movies of all time</h1>
      <ul>{moviesList}</ul>
    </section>
  );
};

export default Home;
