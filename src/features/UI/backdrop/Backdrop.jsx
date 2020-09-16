import React from 'react';
import styles from './Backdrop.module.css';

export default function Backdrop(props) {
	return <div className={styles.Backdrop}>{props.children}</div>;
}
