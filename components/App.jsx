import React, {Component} from 'react';
import { Link } from 'react-router'

class App extends Component {

	render () {
		return (
			<div>
				<Link to="/add-movie">
					Add Movie
				</Link>
				<Link to="/">
					Collection
				</Link>
				{this.props.children}
			</div>
		)
	}
}

export default App;
