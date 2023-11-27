import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGooglePlus } from 'react-icons/fa';

const SocialLogin = () => {
	const { googlePopUp } = useAuth();
	const location = useLocation();
	const navigate = useNavigate();

	const from = location.state?.from?.pathname || '/';

	const handleGooglePopUp = () => {
		googlePopUp()
			.then((res) => {
				console.log(res.user);
				navigate(from, { replace: true });
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	return (
		<div className="text-center">
			<button
				onClick={handleGooglePopUp}
				className="flex justify-center items-center relative w-full border-2 border-[#EFCF4F] bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-[#EFCF4F] before:transition-transform before:duration-300 before:content-[''] hover:[#0C4B65] before:hover:scale-x-100"
			>
				<FaGoogle className="mr-4 text-2xl"></FaGoogle> Google
			</button>
		</div>
	);
};

export default SocialLogin;
