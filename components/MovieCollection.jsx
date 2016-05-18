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
    console.log('movies collection', movies)
    const filter = this.state.filter;
    const filterMovies = filter === '' ? movies : movies.filter(movie => {
    const re = new RegExp(filter, 'i');
      if (re.test(movie.title)) {
        return true;
      } else if (re.test(movie.user)) {
        return true;
      }
    });

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
        <Container style={{maxWidth: '600px', marginTop: '30px'}}>
          <h3 className="mui--text-center">Movie Collection</h3>
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
                  <div style={movieListStyle.liItemWrap}><img src={ movie.artwork }/></div>
  								<div style={movieListStyle.liItemWrap}><strong>Title:</strong> { movie.title }</div>
  								<div style={movieListStyle.liItemWrap}><strong>Duration:</strong> {movie.duration}</div>
  								<div style={movieListStyle.liItemWrap}><strong>Name:</strong> {movie.user}</div>
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
