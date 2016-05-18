import React, {Component} from 'react';
import { Container, Panel, Divider, Input, Form } from 'muicss/react';
import { Button } from 'muicss/react';
import { addMovie, searchMovies } from '../actions';
import { connect } from 'react-redux'

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
		console.log('movies', movies);

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
				<h3 className="mui--text-center">Add Movies</h3>
				<Container style={{maxWidth: '600px', marginTop: '30px'}}>
					<Panel>
						<div className="mui--text-center">
							<Form>
								<Input
									type="text"
									label="Movie Title"
									floatingLabel={true}
									required={true}
									value={title}
									onChange={(e) => this.handleUpdate(e.target.value)} />
								<Button variant="raised" type="submit" onClick={e => searchMovies(title)} onSubmit={e => searchMovies(title)}>Search</Button>
							</Form>
						</div>
					</Panel>
				</Container>

				<div className="mui--text-center">
					<ul className=" mui--pull-left" style={movieListStyle.ul}>
						{ movies.map((movie, i) => <li key={movie.id}>
							<Panel>
								<div style={movieListStyle.liItemWrap}>
									<Button color="primary" style={movieListStyle.button} variant="raised" onClick={e => addMovie(movie)}>Add</Button>
								</div>
								<div style={movieListStyle.liItemWrap}><img src={ movie.artwork_url }/></div>
								<div style={movieListStyle.liItemWrap}><strong>Title:</strong> { movie.title }</div>
								<div style={movieListStyle.liItemWrap}><strong>Duration:</strong> {movie.duration}</div>
								<div style={movieListStyle.liItemWrap}><strong>Name:</strong> {movie.user.username}</div>
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
	movies: state.searchResults
});

//get data out of component
const mapDispatchToProps = dispatch => {
	return ({
	  searchMovies: title => dispatch(searchMovies(title)),
	  addMovie: movie => dispatch(addMovie(movie)),
	});
}

export default connect( mapStateToProps, mapDispatchToProps )( MovieResultsList );
