import React from 'react';
import styles from './SocialMediaIcons.module.css';
import { FaLinkedin } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

export default function SocialMediaIcons() {
	return (
		<div className={styles.SocialMediaIcons}>
			<FiGithub size='1.5em' className={styles.SocialMediaIcon} />
			<FaLinkedin size='1.5em' className={styles.SocialMediaIcon} />
		</div>
	);
}
