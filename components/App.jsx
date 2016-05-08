import React, {Component} from 'react';
import { Container, Panel } from 'muicss/react';
import 'es6-promise';
import 'whatwg-fetch';
import {
	Appbar,
	Input,
	Button
} from 'muicss/react';
import MovieResultsList from './MovieResultsList.jsx';
import MovieCollection from './MovieCollection.jsx';
import { connect } from 'react-redux'
import { addMovie, searchMovies } from '../actions';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			movieSearch: {
				title: ''
			},
			movieResults: []
		}

		// this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
		// this.addToMovieCollection = this.addToMovieCollection.bind(this);
	}

	handleUpdate(value){
		//set student state
		this.setState({
			movieSearch: {
				...this.state.movieSearch,
				title: value
			}
		});
	}



	render() {
		const {movieSearch} = this.state;
		const { searchMovies, movies, movieResults, addMovie } = this.props;
		console.log('props', this.props);
	    // debugger;

		return (
			<div>
				<Container style={{maxWidth: '600px', marginTop: '30px'}}>
					<Panel>
						<div className="mui--text-center">
							<Input
								type="text"
								label="Movie Title"
								floatingLabel={true}
								required={true}
								value={movieSearch.title}
								onChange={(e) => this.handleUpdate(e.target.value)} />
							<Button variant="raised" type="submit" onClick={e => searchMovies(movieSearch.title)}>Send</Button>
						</div>
					</Panel>
				</Container>
				<MovieResultsList movies={movieResults} addMovie={addMovie}/>
				<MovieCollection movies={movies}/>
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
	// debugger;
	return ({
	  searchMovies: title => dispatch( searchMovies( title ) ),
	  addMovie: movie => dispatch( addMovie( movie ) )
	});
}
// export default MovieResultsList;
export default connect( mapStateToProps, mapDispatchToProps )( App );
