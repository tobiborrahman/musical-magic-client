import React from 'react';
import bgImg from '../../assets/guiter-bg.jpg';
import { FaEnvelope, FaEnvelopeOpen, FaEnvelopeOpenText } from 'react-icons/fa';

const Teacher = () => {
	return (
		<div
			className="relative bg-cover bg-center h-[500px] flex justify-center items-center"
			style={{ backgroundImage: `url(${bgImg})` }}
		>
			<div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
				<div className="bg-[#0C4B65] p-5 w-[400px] h-[300px] flex justify-center items-center rounded opacity-100">
					<div className="text-center text-white opacity-100">
						<span className="flex justify-center items-center">
							<FaEnvelopeOpenText className=" w-10 h-10" />
						</span>{' '}
						<h1 className="text-3xl font-semibold py-3">
							Become a Teacher
						</h1>
						<p>
							Lorem Ipsum is simply dummy text of the <br />{' '}
							printing and typesetting industry.
						</p>
						<button className="rounded-full mt-8 transform origin-center transition-transform duration-500 group-hover:translate-y-0 relative border-2 border-white bg-transparent py-2.5 px-8 font-medium uppercase text-white  before:absolute before:rounded-full before:left-0 before:top-0 before:-z-10 before:h-full before:w-full  before:origin-top-left before:scale-x-0 before:bg-white before:transition-transform before:duration-300 before:content-[''] hover:text-[#0C4B65] before:hover:scale-x-100">
							Join WIth Us
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Teacher;
