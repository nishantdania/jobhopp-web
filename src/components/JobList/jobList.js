import React, {Component} from 'react';
import Job from '../Job';

import filterSet from '../Filters/filterSet';

import EmailWidget from '../EmailWidget';

class JobList extends Component {

	state = {
		showEmailSubscription: true 
	}

	render () {

		const {jobs, filter} = this.props;

		var filteredJobs = filter !== 0 ? 
		jobs.filter((job) => {
			return job.category === filterSet[filter].value;
		}) 
		: jobs;

		return <div>
			<ul> 
				{filteredJobs.map((job, index) =>
					<Job key={index} job={job} />
				)}
			</ul>
			<EmailWidget />
		</div>
	}
}

export default JobList;
