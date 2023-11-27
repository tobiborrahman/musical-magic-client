import React from 'react';
import Banner from './Home/Banner';
import PopularClasses from './Home/PopularClasses';
import PopularInstructors from './Home/PopularInstructors';
import Swiper from './Swiper/Swiper';
import Categories from '../../pages/Categories/Categories';
import Teacher from '../../pages/Teacher/Teacher';
import Details from '../../pages/Details/Details';

const Home = () => {
	return (
		<div className="">
			<Banner></Banner>
			<Categories />
			<PopularClasses></PopularClasses>
			<Details />
			<PopularInstructors></PopularInstructors>
			<Swiper></Swiper>
			<Teacher />
		</div>
	);
};

export default Home;
