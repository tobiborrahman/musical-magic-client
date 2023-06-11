import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
	return (
		<div className="w-full h-[100vh]">
			<img
				className="w-full h-[100vh]"
				src="https://i.ibb.co/hZb0K8t/404-page-animation-example.gif"
				alt=""
			/>
			<button className="absolute top-[50%] left-[43%] text-white text-2xl font-semibold bg-[#0C4B65] py-4 px-5 ">
				<Link to="/">Back to Home</Link>
			</button>
		</div>
	);
};

export default ErrorPage;
