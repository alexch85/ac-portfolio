import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
	const year = new Date().getFullYear().toString();
	return <div className={styles.Footer}>&#169; {year} Designed and developed by Alexander Chechik</div>;
}
