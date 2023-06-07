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
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				autoplay={{ delay: 3000 }}
			>
				<SwiperSlide>
					<img
						className="w-full h-[600px]"
						src="https://i.ibb.co/FD3msh6/drummer.jpg"
						alt="Image 1"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="w-full h-[600px]"
						src="https://i.ibb.co/VpMj7Bh/saxophone.jpg"
						alt="Image 2"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="w-full h-[600px]"
						src=" https://i.ibb.co/cQyQJ5p/keys.jpg"
						alt="Image 3"
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Banner;
