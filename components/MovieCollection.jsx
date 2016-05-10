import React from 'react';
import { connect } from 'react-redux';

const MovieCollection = (props) => {
  console.log('mc props', props)

const {movies} = props;
console.log('collection', movies);

const movieListStyle = {
  ul: {
    listStyleType: 'none',
    width: '100%',
    paddingLeft: '0'
  },
  liItemWrap: {
    width: '15%',
    display: 'inline-block'
  }

}

  return (
    <div>
      <h3>Movie Collection</h3>
      <ul className=" mui--pull-left" style={movieListStyle.ul}>
        { movies.map( ( movie, i ) => (
          <li key={i}>

            <div style={movieListStyle.liItemWrap}><img src={ movie.poster }/></div>
            <div style={movieListStyle.liItemWrap}><strong>Title:</strong> { movie.title }</div>
            <div style={movieListStyle.liItemWrap}><strong>Release Year:</strong> {movie.year}</div>
            <div style={movieListStyle.liItemWrap}><strong>Rating:</strong> {movie.rating}</div>
            <div style={movieListStyle.liItemWrap}><strong>Genres:</strong> {movie.genres.map( (genre, i) => <div key={i} >{genre.title}</div>)}</div>

          </li> ) )}
        </ul>
      </div>
  )
}

export default MovieCollection;
