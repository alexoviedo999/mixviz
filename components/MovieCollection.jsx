import React from 'react';
import { connect } from 'react-redux';

const MovieCollection = (props) => {
  // console.log('mc props', props)

const {movies} = props;

  return (
    <div>
      <h3>Movie Collection</h3>
      <ul>
        { movies.map( ( movie, i ) => <li key={i}>{movie.title}</li> ) }
        </ul>
      </div>
  )
}

export default MovieCollection;
