
export const addMovie = id => dispatch => {
  dispatch({
    type: 'ADD_MOVIE_START',
    id
  });
  return fetch('http://api-public.guidebox.com/v1.43/us/rK0qtdrghc9FwaOoreuEdnOlbZA3SRPq/movie/'+ id)
    .then( d => d.json() )
    .then( d => {
      console.log('d', d);
      return dispatch( addMovieSuccess( d ) )
    })
    .catch( e => dispatch( addMovieError( e ) ) )
    ;
};

const addMovieSuccess = movie => ({
  type: 'ADD_MOVIE_SUCCESS',
  movie
})

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

  // debugger;

  return fetch('http://api-public.guidebox.com/v1.43/us/rK0qtdrghc9FwaOoreuEdnOlbZA3SRPq/search/movie/title/'+ title + '/exact')
  .then(function(response) {
    console.log('response', response);
    // debugger;
      return response.json()
  })
  .then((body) => {
      console.log('success', body);
      dispatch( searchMoviesSuccess(body.results));
  })
  .catch(function(error) {
      console.log('request failed', error)
  });
}

const searchMoviesSuccess = movies => ({
  type: 'SEARCH_MOVIES_SUCCESS',
  movies
});
