import 'es6-promise';
import 'whatwg-fetch';

export const addMovie = movie => dispatch => {
  dispatch({
    type: 'ADD_MOVIE',
    movie
  });
};

const addMovieError = error => ({
  type: 'ADD_MOVIE_ERROR',
  error
})

export const deleteMovie = id => ({
    type: 'DELETE_MOVIE',
    id
});

export const searchMovies = title => dispatch => {
  dispatch({
    type: 'SEARCH_MOVIES_START',
    title
  });

  return fetch('http://api.soundcloud.com/tracks.json?client_id=887885805d5ee95bbfd14693f644bf19&q='+ title + '&limit=30')
  .then(function(response) {
      return response.json()
  })
  .then((body) => {
      console.log('success', body);
      dispatch( searchMoviesSuccess(body));
  })
  .catch(function(error) {
      console.log('request failed', error)
  });
}

const searchMoviesSuccess = movies => ({
  type: 'SEARCH_MOVIES_SUCCESS',
  movies
});
