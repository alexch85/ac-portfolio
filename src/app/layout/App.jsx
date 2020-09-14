import React from 'react';
import Footer from '../../features/footer/Footer';
import NavBar from '../../features/nav/navbar/NavBar';
import AboutPage from '../../features/pages/aboutPage/AboutPage';
import ContactPage from '../../features/pages/contactPage/ContactPage';
import Homepage from '../../features/pages/homepage/Homepage';
import Projects from '../../features/pages/projects/Projects';
import './styles.css';

function App() {
	return (
		<>
			<NavBar />
			<Homepage />
			<Projects />
			<AboutPage />
			<ContactPage />
			<Footer />
		</>
	);
}

export default App;
