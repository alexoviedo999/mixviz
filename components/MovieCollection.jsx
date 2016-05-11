import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
	Appbar,
	Input,
	Button,
	Container,
	Panel
} from 'muicss/react';


class MovieCollection extends Component {

	constructor(props) {
		super(props);

		this.state = {
			filter: ''
		}

		// this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
		// this.addToMovieCollection = this.addToMovieCollection.bind(this);
	}

	handleUpdate(value){
		this.setState({
			filter: value
		});
	}

  render () {

    console.log('mc props', this.props)

    const {movies, deleteMovie} = this.props;
    const filter = this.state.filter;
    const filterMovies = filter === "" ? movies : movies.filter(movie => {
      const re = new RegExp(filter, 'i')
      return re.test(movie.title)
      // return movie.title === filter;
    });

    console.log('collection', movies);

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
      <div>
        <h3 className="mui--text-center">Movie Collection</h3>
          <Container style={{maxWidth: '600px', marginTop: '30px'}}>
            <Panel>
              <div className="mui--text-center">
                <Input
                  type="text"
                  label="Movie Title"
                  floatingLabel={true}
                  required={true}
                  value={filter}
                  onChange={(e) => this.handleUpdate(e.target.value)} />
                <Button variant="raised" type="submit" onClick={e => searchCollection()}>Search</Button>
              </div>
            </Panel>
          </Container>

          <Container>
            <ul className=" mui--pull-left" style={movieListStyle.ul}>
              { filterMovies.map( ( movie, i ) => (
                <li key={movie.id}>
                  <Panel>
                    <div style={movieListStyle.liItemWrap}><img src={ movie.poster }/></div>
                    <div style={movieListStyle.liItemWrap}><strong>Title:</strong> { movie.title }</div>
                    <div style={movieListStyle.liItemWrap}><strong>Release Year:</strong> {movie.year}</div>
                    <div style={movieListStyle.liItemWrap}><strong>Rating:</strong> {movie.rating}</div>
                    <div style={movieListStyle.liItemWrap}><strong>Genres:</strong> {movie.genres.map( (genre, i) => <div key={i} >{genre.title}</div>)}</div>
                    <Button onClick={(e) => deleteMovie(movie.id)}>Delete</Button>
                  </Panel>
                </li> ) )}
              </ul>
          </Container>
        </div>
    )
  }
}

export default MovieCollection;
