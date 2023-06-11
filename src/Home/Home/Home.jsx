import React from 'react';
import Banner from './Home/Banner';
import PopularClasses from './Home/PopularClasses';
import PopularInstructors from './Home/PopularInstructors';
import Swiper from './Swiper/Swiper';

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<PopularClasses></PopularClasses>
			<PopularInstructors></PopularInstructors>
			<Swiper></Swiper>
		</div>
	);
};

export default Home;
