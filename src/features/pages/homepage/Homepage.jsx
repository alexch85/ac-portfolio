import React from 'react';
import styles from './Homepage.module.css';
import Button from '../../UI/buttons/Button';

export default function Homepage({ screenWidth, breakpoint }) {
	return (
		<div className={styles.Homepage}>
			<div className={styles.HomepageWelcome}>
				<div className={styles.WelcomeContent}>
					<img alt='logo' src='/logo-big@2x.png' />
					<h1>Alexander Chechik</h1>
					<p>Front End Developer / Web Designer</p>
					<div className={styles.btnContainer}>
						<Button>View Cv</Button>
					</div>
				</div>
			</div>

			{/* <Link activeClass={styles.Active} to='projects' spy={true} smooth={true} offset={-70} duration={500}>
				<div className={styles.ViewProjects}>
					<p>View recent projects</p>
					<IoMdArrowRoundDown className={styles.ArrowDown} />{' '}
				</div>
			</Link> */}
		</div>
	);
}
