import React from 'react';
import Logo from '../../UI/Logo/Logo';
import SocialMediaIcons from '../../UI/socialMediaIcons/SocialMediaIcons';
import NavigationItems from '../navigation items/NavigationItems';
import styles from './NavBar.module.css';

export default function NavBar() {
	return (
		<div className={styles.NavBarContainer}>
			<div className={styles.NavBar}>
				<Logo />
				<NavigationItems />
				<SocialMediaIcons />
			</div>
		</div>
	);
}
