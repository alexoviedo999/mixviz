let nextMovieId = 0;

export const addMovie = title => ({
	type: 'ADD_MOVIE',
	id: nextMovieId++,
	title
});
