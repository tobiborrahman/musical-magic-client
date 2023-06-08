import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

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
		<div>
			<button
				onClick={handleGooglePopUp}
				className="btn btn-circle btn-outline"
			>
				G
			</button>
		</div>
	);
};

export default SocialLogin;
