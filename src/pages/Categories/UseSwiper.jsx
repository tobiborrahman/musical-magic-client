import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useSwiper } from 'swiper/react';

const UseSwiper = () => {
	const swiper = useSwiper();
	return (
		<div>
			<div className="mt-2">
				<button
					className="text-right text-white bg-[#C25934] rounded-full p-2 mr-2"
					onClick={() => swiper.slidePrev()}
				>
					{' '}
					<FaArrowLeft />{' '}
				</button>
				<button
					className="text-right text-white bg-[#C25934] rounded-full p-2"
					onClick={() => swiper.slideNext()}
				>
					{' '}
					<FaArrowRight />{' '}
				</button>
			</div>
		</div>
	);
};

export default UseSwiper;
