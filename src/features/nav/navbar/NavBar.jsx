import React from 'react';
import Logo from '../../UI/Logo/Logo';
import SocialMediaIcons from '../../UI/socialMediaIcons/SocialMediaIcons';
import NavigationItems from '../navigation items/NavigationItems';
import styles from './NavBar.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function NavBar({ screenWidth, breakpoint, sideDrawerHandler }) {
	return (
		<div className={styles.NavBarContainer}>
			<div className={styles.NavBar}>
				<Logo />
				{screenWidth < breakpoint ? (
					<GiHamburgerMenu className={styles.HamburgerMenu} onClick={() => sideDrawerHandler()} />
				) : (
					<>
						<NavigationItems />
						<SocialMediaIcons />
					</>
				)}
			</div>
		</div>
	);
}
