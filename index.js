import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux';
import Thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist'
import { Router, Route, IndexRoute, hashHistory} from 'react-router'
import MovieCollection from './components/MovieCollection.jsx'
import MovieResultsList from './components/MovieResultsList.jsx'


const movieReducer = ( state = { movies: [], stateCount: 0, searchResults: [] }, action) => {
	switch (action.type) {
		case 'ADD_MOVIE_SUCCESS':
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
			};
			break;
		case 'DELETE_MOVIE':
			return {
				...state,
				movies: state.movies.filter(movie => movie.id != action.id)
			}
		default:
		return state;
	}
};

//localstorage using redux-persist
let store = createStore( movieReducer, compose(applyMiddleware(Thunk), autoRehydrate(), window.devToolsExtension ? window.devToolsExtension() : f => f));

persistStore(store);

function render() {
  ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route component={App} path="/">
				<IndexRoute component={MovieCollection}/>
				<Route path="add-movie" component={MovieResultsList} />
			</Route>
		</Router>
	</Provider>,
    document.getElementById('root')
  );
}
render()
