import React, {Component} from 'react';
import { Link } from 'react-router'
import { Appbar } from 'muicss/react';

class App extends Component {

	render () {
		const tabWrapper = {
			height: '50px',
			margin: '0 auto',
			fontSize: '14px',
			tabActive: {
				width: '50%',
				backgroundColor: '#FF4081',
				height: '50px',
				textAlign: 'center',
				display: 'inline-block',
				color: '#fff',
				textDecoration: 'none',
				padding: '15px',
				border: '1px solid #FF4081'
			},
			tabInactive: {
				width: '50%',
				backgroundColor: 'transparent',
				height: '50px',
				textAlign: 'center',
				display: 'inline-block',
				textDecoration: 'none',
				padding: '15px',
				border: '1px solid #FF4081',
				color: '#FF4081'
			},
			appbarStyle: {
				textAlign: 'center',
				fontSize: '40px'
			}
		}

		let currentLocation = this.props.location.pathname

		return (
			<div>
				<Appbar style={tabWrapper.appbarStyle}>ReactFlix</Appbar>
					<div style={tabWrapper}>

						<Link to="/add-movie"
							activeClassName="active"
							style={currentLocation === '/add-movie' ? tabWrapper.tabActive : tabWrapper.tabInactive}>
							Add Movie
						</Link>
						<Link to="/" activeClassName="active" style={currentLocation === '/' ? tabWrapper.tabActive : tabWrapper.tabInactive}>
							Collection
						</Link>
						{this.props.children}
					</div>
			</div>

		)
	}
}

export default App;
