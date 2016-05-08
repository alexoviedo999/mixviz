import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import Thunk from 'redux-thunk';



const movieReducer = ( state = { movies: [], stateCount: 0, searchResults: [] }, action) => {
	// debugger;
	switch (action.type) {
		case 'ADD_MOVIE_SUCCESS':
			return {
				...state,
				movies: [ ...state.movies,
					{
						id: action.id,
						title: action.movie.original_title,
						poster: action.movie.vote_average,
						rating: action.movie.rating,

					}]
			};
			break;

		case 'SEARCH_MOVIES_SUCCESS':
			return {
				...state,
				searchResults: action.movies
			}
		default:
		return state;
	}
};

let store = createStore( movieReducer, applyMiddleware(Thunk) );

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
