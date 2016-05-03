import React, {Component} from 'react';
import { Container, Panel } from 'muicss/react';
import { Button } from 'muicss/react';
import { addMovie } from '../actions';
import { connect } from 'react-redux'




let MovieResultsList = (props, {dispatch}) => {
	const {movieResults, store} = props;
// debugger;
	return (
		<Container style={{ marginTop: '30px' }}>
			<Panel>
				<div className="mui--text-center">
					<ul>
						{ movieResults.map(( movie, i ) => <li key={i}>
						<Button variant="raised" onClick={e => store.dispatch(addMovie( movie.original_title ))}>Add</Button>
						{ movie.original_title }</li>)}
					</ul>

				</div>
			</Panel>
		</Container>
	)
}

const mapStateToProps = state => ({
  movies: state.movies
});

const mapDispatchToProps = dispatch => ({
  addMovie: title => dispatch( addMovie( movie.original_title ) ),
});
// export default MovieResultsList;
export default connect( mapStateToProps, mapDispatchToProps )( MovieResultsList );
