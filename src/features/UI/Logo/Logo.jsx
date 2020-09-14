import React from 'react';
import styles from './Logo.module.css';
import { animateScroll as scroll } from 'react-scroll';

export default function Logo() {
	function scrollToTop() {
		scroll.scrollToTop();
	}
	return (
		<div className={styles.Logo} id='home' onClick={scrollToTop}>
			<img alt='logo' src='/svg-files/ac-logo.svg' />
			<div>
				<p>
					<b style={{ color: '#29abe2' }}>ALEXANDER CHECHIK</b>
				</p>
				<p style={{ color: '#ffffff', fontSize: '0.88em' }}>DESIGIN & DEVELOPMENT</p>
			</div>
		</div>
	);
}
