import React, {Component} from 'react';
import { Container, Panel, Divider } from 'muicss/react';
import { Button } from 'muicss/react';
import { addMovie } from '../actions';
import { connect } from 'react-redux'
import 'es6-promise';
import 'whatwg-fetch';

let MovieResultsList = (props) => {
	const {movies, addMovie} = props;

	const movieListStyle = {
		ul: {
			listStyleType: 'none',
			width: '100%',
			paddingLeft: '0'
		},
		liItemWrap: {
			width: '20%',
			display: 'inline-block'
		}

	}

	return (
		<Container style={{ marginTop: '30px' }}>
			<Panel>
				<div className="mui--text-center">
					<ul className=" mui--pull-left" style={movieListStyle.ul}>
						{ movies.map(( movie, i ) => <li key={i}>
						<div style={movieListStyle.liItemWrap}>
							<Button color="primary" style={movieListStyle.button} variant="raised" onClick={e => addMovie( movie.id)}>Add</Button>
						</div>
						<div style={movieListStyle.liItemWrap}><img src={ movie.poster_120x171 }/></div>
						<div style={movieListStyle.liItemWrap}><strong>Title:</strong> { movie.original_title }</div>
						<div style={movieListStyle.liItemWrap}><strong>Release Year:</strong> {movie.release_year}</div>
						<div style={movieListStyle.liItemWrap}><strong>Rating:</strong> {movie.rating}</div>

						</li>)}
					</ul>
				</div>
			</Panel>
		</Container>
	)
}

export default MovieResultsList;
