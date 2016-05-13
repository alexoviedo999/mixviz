import React, {Component} from 'react';
import 'es6-promise';
import 'whatwg-fetch';
import {
	Appbar,
	Input,
	Button,
	Container,
	Panel
} from 'muicss/react';
import MovieResultsList from './MovieResultsList.jsx';
import MovieCollection from './MovieCollection.jsx';
import { connect } from 'react-redux'
import { addMovie, searchMovies, deleteMovie } from '../actions';
import { Link } from 'react-router'

class App extends Component {

	render () {
		return (
			<div>
				<Link to="/add-movie">
					Add Movie
				</Link>
				<Link to="/">
					Collection
				</Link>
				{this.props.children}

			</div>
		)
	}
}

export default App;
