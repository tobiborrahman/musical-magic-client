import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';

const Banner = () => {
	return (
		<div className="">
			<div className="">
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
						<div className="bg-gradient-to-r from-black/70 to-black/70">
							<img
								className="w-full h-[600px] object-cover mix-blend-overlay"
								src="https://i.ibb.co/bz7mw7r/music-2.jpg"
								alt="Image 2"
							/>
						</div>

						<div className="absolute top-[37%]  2xl:left-[24%]  text-center">
							<div className="custom-container">
								<h1 className="md:text-7xl text-3xl pb-3 font-bold text-[#EFCF4F]">
									Let Life Be Tuneful
								</h1>
								<p className="text-white md:text-center text-justify md:px-56 px-6">
									Learning a musical instrument also fosters a
									sense of accomplishment and confidence as
									skills improve, and can create opportunities
									for personal growth, performance, and
									collaboration with other musicians.
								</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="bg-gradient-to-r from-black/80 to-black/70">
							<img
								className="w-full h-[600px] object-cover mix-blend-overlay"
								src="https://i.ibb.co/Z6Z2cMS/music-7.jpg"
								alt="Image 2"
							/>
						</div>

						<div className="absolute top-[37%]  2xl:left-[24%]  text-center">
							<div className="custom-container">
								<h1 className="md:text-7xl text-3xl pb-3 font-bold text-[#EFCF4F]">
									Let Life Be Tuneful
								</h1>
								<p className="text-white md:text-center text-justify md:px-56 px-6">
									Learning a musical instrument also fosters a
									sense of accomplishment and confidence as
									skills improve, and can create opportunities
									for personal growth, performance, and
									collaboration with other musicians.
								</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="bg-gradient-to-r from-black/70 to-black/70">
							<img
								className="w-full h-[600px] object-cover mix-blend-overlay"
								src="https://i.ibb.co/Y2GgHDX/music-9.jpg"
								alt="Image 3"
							/>
						</div>
						<div className="absolute top-[37%]  2xl:left-[24%]  text-center">
							<div className="custom-container">
								<h1 className="md:text-7xl text-3xl pb-3 font-bold text-[#EFCF4F]">
									Let Life Be Tuneful
								</h1>
								<p className="text-white md:text-center text-justify md:px-56 px-6">
									Learning a musical instrument also fosters a
									sense of accomplishment and confidence as
									skills improve, and can create opportunities
									for personal growth, performance, and
									collaboration with other musicians.
								</p>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default Banner;
