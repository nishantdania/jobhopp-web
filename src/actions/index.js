import axios from 'axios';

var instance = axios.create({
	baseURL: 'http://localhost:1337',
	timeout: 1000,
});

export const fetchJobs = () => (dispatch) =>
	instance.get('/jobs').then(response => {
		dispatch({
      type: 'FETCH_JOBS_SUCCESS',
      response: {data: response.data},
		});
});

export const changeFilter = (filter) => (dispatch) => {
	dispatch({
		type: 'CHANGE_FILTER',
		filter: filter
	});
}
