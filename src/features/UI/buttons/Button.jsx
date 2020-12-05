import React from 'react';
import styles from './Button.module.css';

export default function Button({ white, children }) {
	return white ? (
		<button className={styles.ButtonWhite}>{children} </button>
	) : (
		<button className={styles.ButtonRegular}>{children} </button>
	);
}
