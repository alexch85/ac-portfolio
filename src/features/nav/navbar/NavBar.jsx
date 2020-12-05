import React from 'react';

import SocialMediaIcons from '../../UI/socialMediaIcons/SocialMediaIcons';
import NavigationItems from '../navigation items/NavigationItems';
import styles from './NavBar.module.css';
import HamburgerMenu from 'react-hamburger-menu';

export default function NavBar({ screenWidth, breakpoint, sideDrawerHandler, drawer }) {
	return (
		<div className={styles.NavBarContainer}>
			<div className={styles.NavBar}>
				{screenWidth < breakpoint ? (
					<HamburgerMenu
						className={styles.HamburgerMenu}
						isOpen={drawer}
						menuClicked={() => sideDrawerHandler()}
						width={24}
						height={16}
						strokeWidth={3}
						rotate={0}
						color='white'
						borderRadius={0}
						animationDuration={0.5}
					/>
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
