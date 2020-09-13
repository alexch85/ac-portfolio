import React from 'react';
import NavBar from '../../features/nav/navbar/NavBar';
import AboutPage from '../../features/pages/aboutPage/AboutPage';
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
		</>
	);
}

export default App;
