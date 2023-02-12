import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
	const { countries } = useSelector((state) => state.countries);
	console.log(countries);
	
	return (
		<div>Home</div>
	)
}

export default Home;