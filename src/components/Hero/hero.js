import React, {Component} from 'react';
import cx from 'classnames';
import styles from './hero.css'; 
import {Link} from 'react-router-dom';

class Hero extends Component {

	render () {
		return <div className={cx(styles['outer'])} >
			<h1>Discover jobs and <Link to='/manager'><span>manage</span></Link> job applications</h1>
			<h2>Jobs for web developers, designers, product managers, mobile app developers and devops engineers</h2>
		</div>
	}

}

export default Hero;
