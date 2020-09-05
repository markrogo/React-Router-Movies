import React from 'react';
import { Route, Switch } from 'react-router-dom';

const MovieCard = (props) => {
  console.log (props.movie);
  const {title, director, metascore, stars} = props.movie;
  return (
    
    <>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>

     
    </>
    
  );
}
export default MovieCard;

