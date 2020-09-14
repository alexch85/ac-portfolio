import React from 'react';
import styles from './NavigationItems.module.css';
import { Link } from 'react-scroll';

export default function NavigationItems() {
	return (
		<div className={styles.NavigationItems}>
			<Link activeClass='active' to='projects' spy={true} smooth={true} offset={0} duration={500}>
				PROJECTS
			</Link>
			<Link activeClass='active' to='about' spy={true} smooth={true} offset={0} duration={500}>
				ABOUT
			</Link>
			<Link activeClass='active' to='contact' spy={true} smooth={true} offset={0} duration={500}>
				CONTACT
			</Link>
		</div>
	);
}
