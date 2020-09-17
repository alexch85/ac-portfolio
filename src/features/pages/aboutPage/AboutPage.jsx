import React from 'react';
import Button from '../../UI/buttons/Button';
import styles from './AboutPage.module.css';
import { FaFileDownload } from 'react-icons/fa';

export default function AboutPage() {
	return (
		<div className={styles.AboutPage} id='about'>
			<div className={styles.PhotoGradient}></div>
			<img className={styles.AcPhoto} alt='Alex' src='/pictures/ac-photo.png' />
			<div className={styles.AboutDescription}>
				<h1>About me</h1>
				<p>
					Eu in est eiusmod nisi officia reprehenderit est sint occaecat tempor est elit irure excepteur.
					Culpa commodo dolore labore esse eu ea consectetur ut voluptate do. Proident in sunt qui ipsum
					proident culpa in excepteur fugiat qui sit nostrud.
				</p>
				<Button costumColor='white'>
					<FaFileDownload style={{ marginRight: '3px' }} /> download resume
				</Button>
			</div>
			<div className={styles.AboutPageGraphics}>
				<img alt='about graphics' src='/svg-files/about-graphics.svg' />
			</div>
		</div>
	);
}
