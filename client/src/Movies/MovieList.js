import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

const MovieList = props => {
  console.log (props);
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
       
      ))}
    </div>
  );
}
// now MovieDetails just calls the MovieCard function (stretch)
function MovieDetails({ movie }) {
  const { title, director, metascore } = movie;
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
           <MovieCard movie={movie} />
      </Link>
    </div>
  );
}

export default MovieList;
