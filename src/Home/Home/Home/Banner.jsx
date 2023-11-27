import React from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Banner = () => {
	return (
		<div>
			<Swiper
				slidesPerView={3}
				navigation
				pagination={{ clickable: true }}
				autoplay={{ delay: 3000 }}
			>
				<SwiperSlide>
					<img
						className="w-full h-[600px]"
						src="https://i.ibb.co/qMHtPbd/aliane-schwartzhaupt-Qdm-Uva6q-BTk-unsplash.jpg"
						alt="Image 1"
					/>
					<div className="absolute top-[40%] left-[25%] text-center">
						<h1 className="text-7xl font-bold text-[#EFCF4F]">
							Let Life Be Tuneful
						</h1>
						<p className="text-white">
							Learning a musical instrument also fosters a sense
							of accomplishment <br /> and confidence as skills
							improve, and can create opportunities <br /> for
							personal growth, performance, and collaboration{' '}
							<br /> with other musicians.
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="w-full h-[600px]"
						src="https://i.ibb.co/VpMj7Bh/saxophone.jpg"
						alt="Image 2"
					/>
					<div className="absolute top-[40%] left-[25%] text-center">
						<h1 className="text-7xl font-bold text-[#0C4B65]">
							Let Life Be Tuneful
						</h1>
						<p className="text-white">
							Learning a musical instrument also fosters a sense
							of accomplishment <br /> and confidence as skills
							improve, and can create opportunities <br /> for
							personal growth, performance, and collaboration{' '}
							<br /> with other musicians.
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="w-full h-[600px]"
						src=" https://i.ibb.co/cQyQJ5p/keys.jpg"
						alt="Image 3"
					/>
					<div className="absolute top-[40%] left-[25%] text-center">
						<h1 className="text-7xl font-bold text-[#EFCF4F]">
							Let Life Be Tuneful
						</h1>
						<p className="text-white">
							Learning a musical instrument also fosters a sense
							of accomplishment <br /> and confidence as skills
							improve, and can create opportunities <br /> for
							personal growth, performance, and collaboration{' '}
							<br /> with other musicians.
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="w-full h-[600px]"
						src=" https://i.ibb.co/cQyQJ5p/keys.jpg"
						alt="Image 3"
					/>
					<div className="absolute top-[40%] left-[25%] text-center">
						<h1 className="text-7xl font-bold text-[#EFCF4F]">
							Let Life Be Tuneful
						</h1>
						<p className="text-white">
							Learning a musical instrument also fosters a sense
							of accomplishment <br /> and confidence as skills
							improve, and can create opportunities <br /> for
							personal growth, performance, and collaboration{' '}
							<br /> with other musicians.
						</p>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Banner;
