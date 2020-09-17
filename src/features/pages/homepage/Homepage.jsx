import React from 'react';
import styles from './Homepage.module.css';
import { IoMdArrowRoundDown } from 'react-icons/io';
import { Link } from 'react-scroll';

export default function Homepage({ screenWidth, breakpoint }) {
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
			{screenWidth > breakpoint ? (
				<img alt='Hero' src='/svg-files/ac-hero.svg' />
			) : (
				<img alt='Hero' src='/svg-files/mobile-ac-hero.svg' />
			)}

			<Link activeClass={styles.Active} to='projects' spy={true} smooth={true} offset={-70} duration={500}>
				<div className={styles.ViewProjects}>
					<p>View recent projects</p>
					<IoMdArrowRoundDown className={styles.ArrowDown} />{' '}
				</div>
			</Link>
		</div>
	);
}
