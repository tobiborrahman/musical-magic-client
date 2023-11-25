import React from 'react';
import SectionTitle from '../../components/SectionTitle';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';

// import './styles.css';
import { Navigation, Pagination } from 'swiper';
import UseSwiper from './UseSwiper';

import './Categories.css';

const Categories = () => {
	return (
		<div className="px-10 py-10 bg-gray-100">
			<SectionTitle
				heading="course categories"
				subHeading="welcome to magical music"
			></SectionTitle>

			<div>
				<Swiper
					slidesPerView={4}
					spaceBetween={25}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					className="mySwiper"
				>
					<SwiperSlide className="relative group">
						<img
							className="w-[280px] h-[280px] rounded-lg"
							src="https://t3.ftcdn.net/jpg/04/48/06/36/360_F_448063627_DwrJ5vzm5Aa57aJwOGJDVB8WVtL4ceiH.jpg"
							alt=""
						/>

						<div className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg flex items-center justify-center">
							<div className="text-center transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 group-hover:duration-500">
								<h2 className="text-2xl font-semibold">
									Violin
								</h2>
								<p className="text-xl font-semibold">
									2 courses
								</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className="relative group">
						<img
							className="w-[280px] h-[280px] rounded-lg"
							src="https://t3.ftcdn.net/jpg/04/48/06/36/360_F_448063627_DwrJ5vzm5Aa57aJwOGJDVB8WVtL4ceiH.jpg"
							alt=""
						/>

						<div className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg flex items-center justify-center ">
							<div className="text-center transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 group-hover:duration-300">
								<h2 className="text-2xl font-semibold">
									Violin
								</h2>
								<p className="text-xl font-semibold">
									2 courses
								</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className="relative group">
						<img
							className="w-[280px] h-[280px] rounded-lg"
							src="https://t3.ftcdn.net/jpg/04/48/06/36/360_F_448063627_DwrJ5vzm5Aa57aJwOGJDVB8WVtL4ceiH.jpg"
							alt=""
						/>

						<div className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg flex items-center justify-center ">
							<div className="text-center transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 group-hover:duration-300">
								<h2 className="text-2xl font-semibold">
									Violin
								</h2>
								<p className="text-xl font-semibold">
									2 courses
								</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className="relative group">
						<img
							className="w-[280px] h-[280px] rounded-lg"
							src="https://t3.ftcdn.net/jpg/04/48/06/36/360_F_448063627_DwrJ5vzm5Aa57aJwOGJDVB8WVtL4ceiH.jpg"
							alt=""
						/>

						<div className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg flex items-center justify-center ">
							<div className="text-center transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 group-hover:duration-300">
								<h2 className="text-2xl font-semibold">
									Violin
								</h2>
								<p className="text-xl font-semibold">
									2 courses
								</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className="relative group">
						<img
							className="w-[280px] h-[280px] rounded-lg"
							src="https://t3.ftcdn.net/jpg/04/48/06/36/360_F_448063627_DwrJ5vzm5Aa57aJwOGJDVB8WVtL4ceiH.jpg"
							alt=""
						/>

						<div className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg flex items-center justify-center ">
							<div className="text-center transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 group-hover:duration-300">
								<h2 className="text-2xl font-semibold">
									Violin
								</h2>
								<p className="text-xl font-semibold">
									2 courses
								</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className="relative group">
						<img
							className="w-[280px] h-[280px] rounded-lg"
							src="https://t3.ftcdn.net/jpg/04/48/06/36/360_F_448063627_DwrJ5vzm5Aa57aJwOGJDVB8WVtL4ceiH.jpg"
							alt=""
						/>

						<div className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg flex items-center justify-center ">
							<div className="text-center transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 group-hover:duration-300">
								<h2 className="text-2xl font-semibold">
									Violin
								</h2>
								<p className="text-xl font-semibold">
									2 courses
								</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className="relative group">
						<img
							className="w-[280px] h-[280px] rounded-lg"
							src="https://t3.ftcdn.net/jpg/04/48/06/36/360_F_448063627_DwrJ5vzm5Aa57aJwOGJDVB8WVtL4ceiH.jpg"
							alt=""
						/>

						<div className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg flex items-center justify-center ">
							<div className="text-center transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 group-hover:duration-300">
								<h2 className="text-2xl font-semibold">
									Violin
								</h2>
								<p className="text-xl font-semibold">
									2 courses
								</p>
							</div>
						</div>
					</SwiperSlide>

					<div className="flex justify-end">
						<UseSwiper />
					</div>
				</Swiper>
			</div>
		</div>
	);
};

export default Categories;
