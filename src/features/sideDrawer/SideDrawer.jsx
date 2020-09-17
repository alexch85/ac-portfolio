import React from 'react';
import { Link } from 'react-scroll';
import SocialMediaIcons from '../UI/socialMediaIcons/SocialMediaIcons';
import styles from './SideDrawer.module.css';

export default function Drawer({ sideDrawerHandler }) {
	return (
		<div className={styles.SideDrawer}>
			<div className={styles.LinkContainer}>
				<Link
					activeClass={styles.Active}
					onClick={() => sideDrawerHandler()}
					to='projects'
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
				>
					PROJECTS
				</Link>
			</div>
			<div className={styles.LinkContainer}>
				<Link
					activeClass={styles.Active}
					onClick={() => sideDrawerHandler()}
					to='about'
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
				>
					ABOUT
				</Link>
			</div>
			<div className={styles.LinkContainer}>
				<Link
					activeClass={styles.Active}
					onClick={() => sideDrawerHandler()}
					to='contact'
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
				>
					CONTACT
				</Link>
			</div>
			<div className={styles.LinkContainer}>
				<SocialMediaIcons />
			</div>
		</div>
	);
}
