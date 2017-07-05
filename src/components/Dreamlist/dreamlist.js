import React, {Component} from 'react';
import cx from 'classnames';
import styles from './dreamlist.css'; 

class Dreamlist extends Component {

	render () {
		return <div className={cx(styles['outer'])}>
			<table>
				<tr>
					<th>Company</th>
					<th>Role</th>
					<th>Status</th>
					<th>Location</th>
				</tr>
				<tr>
					<td>Flipkart</td>
					<td>Frontend Engineer</td>
					<td>applied</td>
					<td>Bangalore</td>
					<td className={cx(styles['action'])}>Edit</td>
					<td className={cx(styles['action'])}>Remove</td>
				</tr>
				<tr>
					<td>Yourstory</td>
					<td>SDE 2</td>
					<td>interested</td>
					<td>Bangalore</td>
					<td className={cx(styles['action'])}>Edit</td>
					<td className={cx(styles['action'])}>Remove</td>
				</tr>
			</table>		
		</div>
	}

}

export default Dreamlist;
