import React from 'react';
import SectionTitle from '../../components/SectionTitle';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import UseSwiper from './UseSwiper';

import './Categories.css';

import percussions from '../../../src/assets/percussions (1).jpg';
import trumpet from '../../../src/assets/trumpet (1).jpg';
import saxophone from '../../../src/assets/saxophone (1).jpg';
import drums from '../../../src/assets/drums (1).jpg';
import flute from '../../../src/assets/flute (1).jpg';
import violin from '../../../src/assets/violin22.jpg';

const Categories = () => {
	const swiperConfig = {
		slidesPerView: 1,
		spaceBetween: 25,

		breakpoints: {
			640: {
				slidesPerView: 2,
			},
			1024: {
				slidesPerView: 4,
			},
		},
	};

	return (
		<div className="md:px-10 px-3 py-10 bg-gray-100">
			<SectionTitle
				heading="course categories"
				subHeading="welcome to magical music"
			></SectionTitle>

			<div className="custom-container">
				<div className="container">
					<Swiper
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						loop={true}
						{...swiperConfig}
						modules={[Autoplay, Pagination, Navigation]}
						className="mySwiper"
					>
						<SwiperSlide className="relative group">
							<img
								className="md:w-[280px] w-full h-[280px] rounded-lg"
								src={percussions}
								alt=""
							/>

							<div className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg flex items-center justify-center ">
								<div className="text-center transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 group-hover:duration-300">
									<h2 className="text-2xl font-semibold">
										Percussions
									</h2>
									<p className="text-xl font-semibold">
										5 courses
									</p>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="relative group">
							<img
								className="md:w-[280px] w-full h-[280px] rounded-lg"
								src={saxophone}
								alt=""
							/>

							<div className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg flex items-center justify-center ">
								<div className="text-center transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 group-hover:duration-300">
									<h2 className="text-2xl font-semibold">
										Saxophone
									</h2>
									<p className="text-xl font-semibold">
										3 courses
									</p>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="relative group">
							<img
								className="md:w-[280px] w-full h-[280px] rounded-lg"
								src={trumpet}
								alt=""
							/>

							<div className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg flex items-center justify-center ">
								<div className="text-center transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 group-hover:duration-300">
									<h2 className="text-2xl font-semibold">
										Trumpet
									</h2>
									<p className="text-xl font-semibold">
										2 courses
									</p>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="relative group">
							<img
								className="md:w-[280px] w-full h-[280px] rounded-lg"
								src={flute}
								alt=""
							/>

							<div className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg flex items-center justify-center ">
								<div className="text-center transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 group-hover:duration-300">
									<h2 className="text-2xl font-semibold">
										Flute
									</h2>
									<p className="text-xl font-semibold">
										7 courses
									</p>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="relative group">
							<img
								className="md:w-[280px] w-full h-[280px] rounded-lg"
								src={drums}
								alt=""
							/>

							<div className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg flex items-center justify-center ">
								<div className="text-center transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 group-hover:duration-300">
									<h2 className="text-2xl font-semibold">
										Drums
									</h2>
									<p className="text-xl font-semibold">
										4 courses
									</p>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="relative group">
							<img
								className="md:w-[280px] w-full h-[280px] rounded-lg"
								src={violin}
								alt=""
							/>

							<div className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg flex items-center justify-center ">
								<div className="text-center transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 group-hover:duration-300">
									<h2 className="text-2xl font-semibold">
										Violin
									</h2>
									<p className="text-xl font-semibold">
										9 courses
									</p>
								</div>
							</div>
						</SwiperSlide>

						<div className="flex justify-center md:justify-end md:mr-5 md:mt-2">
							<UseSwiper />
						</div>
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default Categories;
