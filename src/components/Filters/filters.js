import React, {Component} from 'react';
import { connect  } from 'react-redux';
import cx from 'classnames';
import styles from './filters.css'; 

import FilterTag from '../FilterTag';
import filterSet from './filterSet';

import * as actions from '../../actions';

class Filters extends Component {

	handler = (id) => {
		const {changeFilter, currentFilter} = this.props;
		if(currentFilter !== id) {
			changeFilter(id);		
		}
	}

	render () {
		
		const {currentFilter} = this.props;

		return <div>
				<ul className={cx(styles['outer'])}>
				{filterSet.map((filter, index) =>
					<FilterTag 
						active={index === currentFilter} 
						key={index} 
						filter={filter}
						id={index} 
						handler={this.handler}/>
				)}
				</ul>
			</div>
	}

}

const mapStateToProps = (state) => {
	return {
		currentFilter: state.allJobs.filter
	};
};

Filters = connect(
  mapStateToProps,
  actions
)(Filters);


export default Filters;
