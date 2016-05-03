import React, {Component} from 'react';
import { Container, Panel } from 'muicss/react';

import { Button } from 'muicss/react';




let MovieResultsList = (props, {dispatch}) => {
	const {movieResults, store} = props;
// debugger;
	return (
		<Container style={{ marginTop: '30px' }}>
			<Panel>
				<div className="mui--text-center">
					<ul>
						{ movieResults.map(( movie, i ) => <li key={i}>
						<Button variant="raised">Add</Button>
						{ movie.original_title }</li>)}
					</ul>

				</div>
			</Panel>
		</Container>
	)
}

export default MovieResultsList;
