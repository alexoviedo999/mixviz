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

class App extends Component {

	constructor (props) {
		super(props);

		this.state = {
			title: ''
		}

		// this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
		// this.addToMovieCollection = this.addToMovieCollection.bind(this);
	}

	handleUpdate (value) {
		this.setState({
			title: value
		});
	}

	render () {
		const { title } = this.state;
		const { searchMovies, movies, movieResults, addMovie, deleteMovie } = this.props;
		console.log('props', this.props);

		return (
			<div>
				<h3 className="mui--text-center">Search New Movies</h3>
				<Container style={{maxWidth: '600px', marginTop: '30px'}}>
					<Panel>
						<div className="mui--text-center">
							<Input
								type="text"
								label="Movie Title"
								floatingLabel={true}
								required={true}
								value={title}
								onChange={(e) => this.handleUpdate(e.target.value)} />
							<Button variant="raised" type="submit" onClick={e => searchMovies(title)}>Search</Button>
						</div>
					</Panel>
				</Container>
				<MovieResultsList movies={movieResults} addMovie={addMovie}/>
				<MovieCollection movies={movies} deleteMovie={deleteMovie}/>
			</div>
		)
	}
}

//get data into commponent
const mapStateToProps = state => ({
	//set on reducer using thunk
    movies: state.movies,
	movieResults: state.searchResults
});

//get data out of component
const mapDispatchToProps = dispatch => {
	return ({
	  searchMovies: title => dispatch(searchMovies(title)),
	  addMovie: movie => dispatch(addMovie(movie)),
	  deleteMovie: id => dispatch(deleteMovie(id))
	});
}
// export default MovieResultsList;
export default connect( mapStateToProps, mapDispatchToProps )( App );
