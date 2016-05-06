import React, {Component} from 'react';
import { Container, Panel } from 'muicss/react';
import { Button } from 'muicss/react';
import { addMovie } from '../actions';
import { connect } from 'react-redux'
import 'es6-promise';
import 'whatwg-fetch';

let MovieResultsList = (props) => {
	const {movies, addMovie} = props;

debugger;

	return (
		<Container style={{ marginTop: '30px' }}>
			<Panel>
				<div className="mui--text-center">
					<ul>
						{ movies.map(( movie, i ) => <li key={i}>
						<Button variant="raised" onClick={e => addMovie( movie.id)}>Add</Button>
						{ movie.original_title }</li>)}
					</ul>
				</div>
			</Panel>
		</Container>
	)
}

//get data into commponent
const mapStateToProps = state => ({
	//set on reducer using thunk
  movies: state.searchResults
});

//get data out of component
const mapDispatchToProps = dispatch => ({
  addMovie: movie => dispatch( addMovie( movie ) ),
});
// export default MovieResultsList;
export default connect( mapStateToProps, mapDispatchToProps )( MovieResultsList );
