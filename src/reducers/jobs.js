const allJobs = (state = {
	filter: 0
}, action) => {
	switch (action.type) {
		case 'FETCH_JOBS_SUCCESS':
			return {
				...state,
				...action.response
			}
		case 'CHANGE_FILTER':
			return {
				...state,
				filter: action.filter
			}
		default:
			return state;
	}
};

export default allJobs;
