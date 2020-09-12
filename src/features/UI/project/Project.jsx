import React from 'react';
import styles from './Project.module.css';

export default function Project() {
	return (
		<div className={styles.Project}>
			<div className={styles.description}>
				<h2>Project Name</h2>
				<p>
					Amet cupidatat laboris laborum cupidatat culpa sint laboris in. Nisi laboris quis tempor aliqua ad
					labore. Quis occaecat incididunt qui tempor. Non aliquip in laborum tempor amet occaecat amet
					incididunt officia aliqua commodo. Proident pariatur nostrud cillum pariatur non do occaecat culpa
					qui laboris consectetur culpa. Id ad tempor amet occaecat commodo. Elit voluptate voluptate
					exercitation mollit ad anim labore aliquip commodo nostrud culpa.
				</p>
				<div className={styles.DescButtons}>
					<button>VIEW PROJECT</button>
					<button>GITHUB</button>
				</div>
			</div>
			<img alt='project mockup' src='/pictures/mockup.png' />
		</div>
	);
}
