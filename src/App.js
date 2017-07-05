import React, { Component } from 'react';
import { connect  } from 'react-redux';
import './App.css';

import Hero from './components/Hero';
import Sticky from './components/Sticky';
import JobList from './components/JobList';
import Filters from './components/Filters';
import Footer from './components/Footer';

import * as actions from './actions';

class App extends Component {

	componentDidMount () {
		this.fetchData();
	}

	fetchData = () => {
		const {fetchJobs} = this.props;
		fetchJobs();
	}

  render() {

		const {jobs, filter} = this.props;

    return (
      <div className="App">
				<Sticky />
				<Hero />
				<Filters />
				{ jobs ? 
					<JobList jobs={jobs} filter={filter} />
				: null}
				<Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		jobs: state.allJobs.data,
		filter: state.allJobs.filter
	};
};

App = connect(
  mapStateToProps,
  actions
)(App);

export default App;
