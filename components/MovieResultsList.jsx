import React, {Component} from 'react';
import { Container, Panel, Divider, Input } from 'muicss/react';
import { Button } from 'muicss/react';
import { addMovie, searchMovies } from '../actions';
import { connect } from 'react-redux'
import 'es6-promise';
import 'whatwg-fetch';


class MovieResultsList extends Component {

	constructor (props) {
		super(props);

		this.state = {
			title: ''
		}
		this.handleUpdate = this.handleUpdate.bind(this);
	}

	handleUpdate (value) {
		this.setState({
			title: value
		});
	}


	render () {
		const {movies, addMovie, searchMovies} = this.props;
		const title  = this.state.title;

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

				<div className="mui--text-center">
					<ul className=" mui--pull-left" style={movieListStyle.ul}>
						{ movies.map((movie, i) => <li key={movie.id}>
							<Panel>
								<div style={movieListStyle.liItemWrap}>
									<Button color="primary" style={movieListStyle.button} variant="raised" onClick={e => addMovie(movie.id)}>Add</Button>
								</div>
								<div style={movieListStyle.liItemWrap}><img src={ movie.poster_120x171 }/></div>
								<div style={movieListStyle.liItemWrap}><strong>Title:</strong> { movie.original_title }</div>
								<div style={movieListStyle.liItemWrap}><strong>Release Year:</strong> {movie.release_year}</div>
								<div style={movieListStyle.liItemWrap}><strong>Rating:</strong> {movie.rating}</div>
							</Panel>
						</li>)}
					</ul>
				</div>
			</Container>
		)

	}
}

//get data into commponent
const mapStateToProps = state => ({
	//set on reducer using thunk
	movies: state.searchResults
});

//get data out of component
const mapDispatchToProps = dispatch => {
	return ({
	  searchMovies: title => dispatch(searchMovies(title)),
	  addMovie: movie => dispatch(addMovie(movie)),
	});
}
// export default MovieResultsList;
export default connect( mapStateToProps, mapDispatchToProps )( MovieResultsList );
