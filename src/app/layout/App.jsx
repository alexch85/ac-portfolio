import React, { useState, useLayoutEffect } from 'react';
import Footer from '../../features/footer/Footer';
import NavBar from '../../features/nav/navbar/NavBar';
import AboutPage from '../../features/pages/aboutPage/AboutPage';
import ContactPage from '../../features/pages/contactPage/ContactPage';
import Homepage from '../../features/pages/homepage/Homepage';
import Projects from '../../features/pages/projects/Projects';
import SideDrawer from '../../features/sideDrawer/SideDrawer';
import Backdrop from '../../features/UI/backdrop/Backdrop';
import './styles.css';

function App() {
	const [drawer, setDrawer] = useState(false);
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
	const breakpoint = 768;
	useLayoutEffect(() => {
		const handleWindowResize = () => setScreenWidth(window.innerWidth);
		window.addEventListener('resize', handleWindowResize);
		return () => window.removeEventListener('resize', handleWindowResize);
	}, []);
	function sideDrawerHandler() {
		setDrawer(!drawer);
	}
	return (
		<>
			<NavBar screenWidth={screenWidth} breakpoint={breakpoint} sideDrawerHandler={sideDrawerHandler} />
			{drawer && (
				<>
					{' '}
					<Backdrop>
						<SideDrawer sideDrawerHandler={sideDrawerHandler} />
					</Backdrop>{' '}
				</>
			)}
			<Homepage />
			<Projects />
			<AboutPage />
			<ContactPage />
			<Footer />
		</>
	);
}

export default App;
