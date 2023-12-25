import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

const Banner = () => {
	return (
		<div className="container">
			<Swiper
				slidesPerView={1}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				loop={true}
				modules={[Autoplay, Pagination, Navigation]}
			>
				<SwiperSlide>
					<img
						className="w-full h-[600px]"
						src="https://i.ibb.co/qMHtPbd/aliane-schwartzhaupt-Qdm-Uva6q-BTk-unsplash.jpg"
						alt="Image 1"
					/>
					<div className="absolute top-[37%]   text-center">
						<div>
							<h1 className="md:text-7xl text-3xl pb-3 font-bold text-[#EFCF4F]">
								Let Life Be Tuneful
							</h1>
							<p className="text-white md:text-center text-justify md:px-56 px-6">
								Learning a musical instrument also fosters a
								sense of accomplishment and confidence as skills
								improve, and can create opportunities for
								personal growth, performance, and collaboration
								with other musicians.
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="w-full h-[600px]"
						src="https://i.ibb.co/VpMj7Bh/saxophone.jpg"
						alt="Image 2"
					/>
					<div className="absolute top-[37%]  text-center">
						<h1 className="md:text-7xl text-3xl font-bold text-[#0C4B65]">
							Let Life Be Tuneful
						</h1>
						<p className="text-white md:text-center text-justify md:px-56 px-6">
							Learning a musical instrument also fosters a sense
							of accomplishment and confidence as skills improve,
							and can create opportunities for personal growth,
							performance, and collaboration with other musicians.
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="w-full h-[600px]"
						src=" https://i.ibb.co/cQyQJ5p/keys.jpg"
						alt="Image 3"
					/>
					<div className="absolute top-[37%]  text-center">
						<h1 className="md:text-7xl text-3xl font-bold text-[#EFCF4F]">
							Let Life Be Tuneful
						</h1>
						<p className="text-white md:text-center text-justify md:px-56 px-6">
							Learning a musical instrument also fosters a sense
							of accomplishment and confidence as skills improve,
							and can create opportunities for personal growth,
							performance, and collaboration with other musicians.
						</p>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Banner;
