import React from 'react';
import Button from '../buttons/Button';
import styles from './Project.module.css';
import { AiOutlineEye } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

export default function Project() {
	return (
		<div className={styles.Project}>
			<div className={styles.description}>
				<h2>Project Name</h2>
				<p>
					Amet cupidatat laboris laborum cupidatat culpa sint laboris in. Nisi laboris quis tempor aliqua ad
					labore. Quis occaecat incididunt qui tempor. Non aliquip in laborum tempor amet occaecat amet
					incididunt officia aliqua commodo. Proident pariatur nostrud cillum pariatur non do occaecat culpa
					qui laboris consectetur culpa. Id ad tempor amet occaecat commodo.
				</p>
				<div className={styles.DescButtons}>
					<Button white={true}>
						<AiOutlineEye style={{ marginRight: '3px' }} /> VIEW PROJECT
					</Button>
					<Button>
						<AiFillGithub style={{ marginRight: '3px' }} />
						GITHUB
					</Button>
				</div>
			</div>
			<img alt='project mockup' src='/pictures/mockup.png' />
		</div>
	);
}
