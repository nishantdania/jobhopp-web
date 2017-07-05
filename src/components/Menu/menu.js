import React, {Component} from 'react';
import cx from 'classnames';
import styles from './menu.css'; 
import { Link } from 'react-router-dom';
import Button from '../Button';

class Menu extends Component {

	render () {
		return <ul className={cx(styles['outer'])}>
			<li>
				<Link to='/manager'>
					<Button text='Manager' />
				</Link>
			</li>
		</ul>
	}

}

export default Menu;
