import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
	Appbar,
	Input,
	Button,
	Container,
	Panel
} from 'muicss/react';
import { deleteMovie } from '../actions';


class MovieCollection extends Component {

	constructor (props) {
		super(props);

		this.state = {
			filter: ''
		}
		this.handleUpdate = this.handleUpdate.bind(this);
	}

	handleUpdate (value) {
		this.setState({
			filter: value
		});
	}

  render () {
    const {movies, deleteMovie} = this.props;
    const filter = this.state.filter;
    const filterMovies = filter === '' ? movies : movies.filter(movie => {
    const re = new RegExp(filter, 'i');

      if (re.test(movie.title)) {
        return true;
      } else if (re.test(movie.year)) {
        return true;
      } else if (re.test(movie.rating)) {
        return true;
      } else if (re.test(movie.genres.map(genre => genre.title))) {
        return true;
      } else if (re.test(movie.cast.map(actor => actor.name))) {
        return true;
      }
    });

    const movieListStyle = {
      ul: {
        listStyleType: 'none',
        width: '100%',
        paddingLeft: '0'
      },
      movieInfoDiv: {
        width: '22%',
        float: 'left'
      },
      movieInfo: {
        width: '100%'
      },
      liItemWrap: {
        width: '20%',
        float: 'left'
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
                label="Search Collection"
                floatingLabel={true}
                required={true}
                value={filter}
                onChange={(e) => this.handleUpdate(e.target.value)} />
            </div>
          </Panel>
        </Container>

        <Container>
          <ul className=" mui--pull-left" style={movieListStyle.ul}>
            { filterMovies.map((movie, i) => (
              <li key={movie.id}>
                <Panel>
                  <div style={movieListStyle.liItemWrap}><img src={ movie.poster }/></div>
                  <div style={movieListStyle.movieInfoDiv}>
                    <div style={movieListStyle.movieInfo}><strong>Title:</strong> { movie.title }</div>
                    <div style={movieListStyle.movieInfo}><strong>Release Year:</strong> {movie.year}</div>
                    <div style={movieListStyle.movieInfo}><strong>Rating:</strong> {movie.rating}</div>
                  </div>
                  <div style={movieListStyle.liItemWrap}><strong>Actors:</strong> {movie.cast.map((actor, i) => {
                    if(i < 7) {
                      return <div key={actor.id} >{actor.name}</div>;
                    }
                  })}</div>
                <div style={movieListStyle.liItemWrap}><strong>Genres:</strong> {movie.genres.map((genre, i) => <div key={genre.id} >{genre.title}</div>)}</div>
                  <Button color="danger" onClick={(e) => deleteMovie(movie.id)}>Delete</Button>
                </Panel>
              </li>))}
            </ul>
        </Container>
      </div>
    )
  }
}


//get data into commponent
const mapStateToProps = state => ({
  movies: state.movies,
});

//get data out of component
const mapDispatchToProps = dispatch => {
	return ({
	  deleteMovie: id => dispatch(deleteMovie(id))
	});
}

export default connect( mapStateToProps, mapDispatchToProps )( MovieCollection );
