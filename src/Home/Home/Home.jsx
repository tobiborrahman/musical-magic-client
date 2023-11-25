import React from 'react';
import Banner from './Home/Banner';
import PopularClasses from './Home/PopularClasses';
import PopularInstructors from './Home/PopularInstructors';
import Swiper from './Swiper/Swiper';
import Categories from '../../pages/Categories/Categories';

const Home = () => {
	return (
		<div className="">
			<Banner></Banner>
			<Categories />
			<PopularClasses></PopularClasses>
			<PopularInstructors></PopularInstructors>
			<Swiper></Swiper>
		</div>
	);
};

export default Home;
