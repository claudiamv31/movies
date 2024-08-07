const DisplayMovie = ({ movie }) => {
  return (
    <div>
      <img src={movie.image} alt={movie.name} />
      <h3>{movie.name}</h3>
      <p>{movie.description}</p>
      <p>{movie.duration}</p>
      <p>{movie.year}</p>
      <p>{movie.rating}</p>
      <p>{movie.score}</p>
    </div>
  );
};

export default DisplayMovie;
