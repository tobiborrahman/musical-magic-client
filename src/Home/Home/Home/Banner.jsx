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
					<SwiperSlide
						style={{
							backgroundImage:
								'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://i.ibb.co/bz7mw7r/music-2.jpg")',
							backgroundSize: 'cover, cover',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center, center',
							objectFit: 'contain',
							height: '100vh',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<div className="">
							<div className="max-w-[700px]">
								<div className="text-center">
									<h1 className="md:text-7xl text-3xl pb-3 font-bold text-[#EFCF4F]">
										Let Life Be Tuneful
									</h1>
									<p className="text-white md:text-center text-center px-6">
										Learning a musical instrument fosters a
										sense of accomplishment and confidence
										as skills improve, creating
										opportunities for personal growth,
										performance, and collaboration with
										other musicians.
									</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide
						style={{
							backgroundImage:
								'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://i.ibb.co/Z6Z2cMS/music-7.jpg")',
							backgroundSize: 'cover, cover',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center, center',
							objectFit: 'contain',
							height: '100vh',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<div className="">
							<div className="max-w-[700px]">
								<div className="text-center">
									<h1 className="md:text-7xl text-3xl pb-3 font-bold text-[#EFCF4F]">
										Let Life Be Tuneful
									</h1>
									<p className="text-white md:text-center text-center px-6">
										Learning a musical instrument fosters a
										sense of accomplishment and confidence
										as skills improve, creating
										opportunities for personal growth,
										performance, and collaboration with
										other musicians.
									</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide
						style={{
							backgroundImage:
								'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://i.ibb.co/Y2GgHDX/music-9.jpg")',
							backgroundSize: 'cover, cover',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center, center',
							objectFit: 'contain',
							height: '100vh',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<div className="">
							<div className="max-w-[700px]">
								<div className="text-center">
									<h1 className="md:text-7xl text-3xl pb-3 font-bold text-[#EFCF4F]">
										Let Life Be Tuneful
									</h1>
									<p className="text-white md:text-center text-center px-6">
										Learning a musical instrument fosters a
										sense of accomplishment and confidence
										as skills improve, creating
										opportunities for personal growth,
										performance, and collaboration with
										other musicians.
									</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default Banner;
