import React, {Component} from 'react';
import { Container, Panel } from 'muicss/react';
import MovieResultsList from './MovieResultsList.jsx';
import 'es6-promise';
import 'whatwg-fetch';

import {
	Appbar,
	Input,
	Button
} from 'muicss/react';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			movieSearch: {
				title: ''
			},
			movieResults: []
		}

		this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
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


	handleSearchSubmit (e) {
		e.preventDefault();
		const {movieSearch} = this.state;

		//api post
		const jsonMovie = JSON.stringify(movieSearch);

 		const fetchResult = fetch('http://api-public.guidebox.com/v1.43/us/rK0qtdrghc9FwaOoreuEdnOlbZA3SRPq/search/movie/title/'+ movieSearch.title + '/exact')
		.then(function(response) {
			console.log('response', response);
		    return response.json()
		})
		.then((body) => {
		    console.log('success', body);
			this.setState({movieResults:body.results})
		})
		.catch(function(error) {
    		console.log('request failed', error)
        });
	}


	render() {
		const {movieSearch} = this.state;
		const {movieResults} = this.state;
		const { movies, addMovie, store } = this.props;
		// debugger;
		console.log('store state 2',store.getState());
		let input;

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
							<Button variant="raised" type="submit" onClick={e => this.handleSearchSubmit(e)}>Send</Button>
						</div>
					</Panel>
				</Container>

				<MovieResultsList movieResults={movieResults} store={store}/>

			</div>
		)
	}

}


export default App;
