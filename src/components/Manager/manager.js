import React, {Component} from 'react';
import cx from 'classnames';
import styles from './manager.css'; 

import ManagerForm from '../ManagerForm';
import Dreamlist from '../Dreamlist';

class Manager extends Component {

	render () {
		return <div>
			<div className={cx(styles['title'])}>
				Jobhopp Manager
			</div>
			<ManagerForm />			
			<div className={cx(styles['menu'])}>
				Download as pdf/xlsx
			</div>
			<Dreamlist />
		</div>
	}

}

export default Manager;
