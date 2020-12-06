import React from 'react';
import Button from '../../UI/buttons/Button';
import styles from './AboutPage.module.css';
import { FaFileDownload } from 'react-icons/fa';

export default function AboutPage() {
	return (
		<div className={styles.AboutPage} id='about'>
			<div className={styles.AboutPageContent}>
				<img className={styles.AcPhoto} alt='Alex' src='/pictures/ac-photo.png' />
				<div className={styles.AboutDescription}>
					{/* <h1>About me</h1> */}
					<p>
						Eu in est eiusmod nisi officia reprehenderit est sint occaecat tempor est elit irure excepteur.
						Culpa commodo dolore labore esse eu ea consectetur ut voluptate do. Proident in sunt qui ipsum
						proident culpa in excepteur fugiat qui sit nostrud.
					</p>
					<div className={styles.TechnoIcons}>
						<img alt='html5 icon' src='/svg-files/html5-icon.svg' style={{ marginRight: '-2px' }} />
						<img alt='css-icon' src='/svg-files/css-icon.svg' />
						<img alt='javascript icon' src='/svg-files/javascript-icon.svg' />
						<img alt='typescript icon' src='/svg-files/typescript-icon.svg' />
						<img alt='react icon' src='/svg-files/react-icon.svg' />
						<img alt='redux icon' src='/svg-files/redux-icon.svg' />
						<img alt='sass icon' src='/svg-files/sass-icon.svg' />
						<img alt='git icon' src='/svg-files/git-icon.svg' />
					</div>
					<Button costumColor='white'>
						<FaFileDownload style={{ marginRight: '3px' }} /> download resume
					</Button>
				</div>
			</div>
		</div>
	);
}
