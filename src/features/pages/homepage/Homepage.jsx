import React from 'react';
import styles from './Homepage.module.css';
import { IoMdArrowRoundDown } from 'react-icons/io';

export default function Homepage() {
	return (
		<div className={styles.Homepage}>
			<div className={styles.HomepageWelcome}>
				<h1>
					Hi,
					<br />I am Alex,
					<br />
					React developer
				</h1>
				<p>Front End Developer / Web Designer</p>
			</div>
			<img alt='Hero' src='/svg-files/ac-hero.svg' />
			<div className={styles.ViewProjects}>
				<p>View recent projects</p>
				<IoMdArrowRoundDown className={styles.ArrowDown} />
			</div>
		</div>
	);
}
