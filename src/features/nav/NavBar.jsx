import React from 'react';
import Logo from '../UI/Logo';
import styles from './NavBar.module.css';

export default function NavBar() {
	return (
		<div className={styles.NavBarContainer}>
			<div className={styles.NavBar}>
				<Logo />
			</div>
		</div>
	);
}
