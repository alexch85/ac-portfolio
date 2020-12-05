import React from 'react';
import styles from './NavigationItems.module.css';
import { Link } from 'react-scroll';

export default function NavigationItems() {
	return (
		<div className={styles.NavigationItems}>
			<Link activeClass={styles.Active} to='projects' spy={true} smooth={true} duration={500}>
				PROJECTS
			</Link>
			<Link activeClass={styles.Active} to='about' spy={true} smooth={true} duration={500}>
				ABOUT/CONTACT
			</Link>
		</div>
	);
}
