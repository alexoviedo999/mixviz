import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { createStore } from 'redux'
import { Provider } from 'react-redux';



const movieReducer = ( state = { movies: [], stateCount: 0 }, action) => {
	switch (action.type) {
		case 'ADD_MOVIE':
			return {
				...state,
				movies: [ ...state.movies, {title: action.title}]
			};
			break;
		default:
		return state;
	}
};

let store = createStore( movieReducer );

// debugger;
console.log('store state', store.getState());


function render() {

  ReactDOM.render(

	<Provider store={store}>
		<App store={store}/>
	</Provider>,
    document.getElementById('root')
  );
}

render()
store.subscribe(render)
