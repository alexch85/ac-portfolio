import React, { useState, useLayoutEffect } from 'react';
import Footer from '../../features/footer/Footer';
import NavBar from '../../features/nav/navbar/NavBar';
import AboutPage from '../../features/pages/aboutPage/AboutPage';
import ContactPage from '../../features/pages/contactPage/ContactPage';
import Homepage from '../../features/pages/homepage/Homepage';
import Projects from '../../features/pages/projects/Projects';
import './styles.css';

function App() {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
	const breakpoint = 768;
	useLayoutEffect(() => {
		const handleWindowResize = () => setScreenWidth(window.innerWidth);
		window.addEventListener('resize', handleWindowResize);
		return () => window.removeEventListener('resize', handleWindowResize);
	}, []);
	return (
		<>
			<NavBar screenWidth={screenWidth} breakpoint={breakpoint} />
			<Homepage />
			<Projects />
			<AboutPage />
			<ContactPage />
			<Footer />
		</>
	);
}

export default App;
