import React from 'react';
import Project from '../../UI/project/Project';
import styles from './Projects.module.css';

export default function Projects() {
	return (
		<div className={styles.Projects}>
			<Project />
			<hr />
			<Project />
			<hr />
			<Project />
		</div>
	);
}
