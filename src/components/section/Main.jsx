import React from 'react'

import Header from './Header';
import Footer from './Footer';

const Main = (pros) => {
	return (
		<>
			<Header />
			<main id='main' role='main'>
				{pros.children}
			</main>
			<Footer />
		</>
	)
}

export default Main