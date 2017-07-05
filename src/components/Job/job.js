import React, {Component} from 'react';
import cx from 'classnames';
import styles from './job.css'; 

class Job extends Component {

	render () {

		const { job } = this.props;

		return <li className={cx(styles['outer'], 'clearfix', styles['container'])} >
				<div className={cx('clearfix')}>
					<div className={cx(styles['left-content'])}>
						<div className={cx(styles['role'])}>
							{job.role}
						</div>
						<div className={cx(styles['company'])}>
							{job.company}
						</div>
					</div>
					<div className={cx(styles['right-content'])}>
						<span className={cx(styles['location'])}>
							{job.location}
						</span>
					</div>
				</div>
				<div className={cx(styles['bottom'])}>
					<div className={cx(styles['links-container'])}>
						<a href={job.link} target='_blank' rel="noopener noreferrer" >
							<div className={cx(styles['link'])}>
								Apply 
							</div>
						</a>
						<div className={cx(styles['link'], styles['highlight'])}>
							Add to manager
						</div>
					</div>
				</div>
			</li>
	}

}

export default Job;
