import React from 'react';
import styles from './Logo.module.css';

export default function Logo() {
	return (
		<div className={styles.Logo}>
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
