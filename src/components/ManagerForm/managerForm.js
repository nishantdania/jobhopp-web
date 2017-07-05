import React, {Component} from 'react';
import cx from 'classnames';
import styles from './managerForm.css'; 

class ManagerForm extends Component {

	state = {
		job: {}
	}

	render () {
		return <form>			
			<div className={cx(styles['input-container'])}>
				<label>Company</label>
				<input />
			</div>
			<div className={cx(styles['input-container'])}>
				<label>Role</label>
				<input />
			</div>
			<div className={cx(styles['input-container'])}>
				<label>Status</label>
				<select>
					<option value="interested">Interested</option>
					<option value="applied">Applied</option>
					<option value="interview">Interview</option>
					<option value="rejected">Rejected</option>
					<option value="offered">Offered</option>
				</select>
			</div>
			<div className={cx(styles['input-container'])}>
				<label>Location</label>
				<input />
			</div>
			<div className={cx(styles['input-container'], styles['button'])}>
				Add Job
			</div>
		</form>
	}

}

export default ManagerForm;
