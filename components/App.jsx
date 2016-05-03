import React, {Component} from 'react';
import { Container, Panel } from 'muicss/react';

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




	render() {
		const {movieSearch} = this.state;

	    // debugger;

	    let input;

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
							<Button variant="raised" type="submit">Send</Button>
						</div>
					</Panel>
				</Container>

			</div>
		)
	}

}


export default App;
