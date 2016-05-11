import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import Thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist'


const movieReducer = ( state = { movies: [], stateCount: 0, searchResults: [] }, action) => {
	// debugger;
	switch (action.type) {
		case 'ADD_MOVIE_SUCCESS':
			console.log('action success', action);
			return {
				...state,
				movies: [ ...state.movies,
					{
						id: action.movie.id,
						poster: action.movie.poster_120x171,
						title: action.movie.original_title,
						year: action.movie.release_year,
						rating: action.movie.rating,
						genres: action.movie.genres,
						cast: action.movie.cast
					}]
			};
			break;

		case 'SEARCH_MOVIES_SUCCESS':
			return {
				...state,
				searchResults: action.movies
			}

		case 'DELETE_MOVIE':
			return {
				...state,
				movies: state.movies.filter(movie => movie.id != action.id)
			}
		default:
		return state;
	}
};

//localstorage
let store = createStore( movieReducer, applyMiddleware(Thunk), autoRehydrate() );
persistStore(store);

// debugger;
console.log('store state', store.getState());


function render() {

  ReactDOM.render(

	<Provider store={store}>
		<App />
	</Provider>,
    document.getElementById('root')
  );
}

render()
// store.subscribe(render)
