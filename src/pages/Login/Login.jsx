import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
	const { signIn } = useContext(AuthContext);
	const [showPassword, setShowPassword] = useState(false);

	const location = useLocation();
	const navigate = useNavigate();

	const from = location.state?.from?.pathname || '/';

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	const onSubmit = (data) => {
		signIn(data.email, data.password)
			.then((res) => {
				console.log(res.user.email);
				navigate(from, { replace: true });
				reset();
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	// console.log(errors);

	const handleTogglePassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div className="flex justify-center items-center my-20">
			<div className="w-[500px] p-10 border">
				<form onSubmit={handleSubmit(onSubmit)}>
					<h1 className="text-center text-[#0C4B65] text-6xl font-bold pb-10">
						Log In
					</h1>
					<input
						type="email"
						className="border py-2 w-full mb-3 pl-3"
						placeholder="Email"
						{...register('email', {
							required: true,
						})}
					/>
					<br />

					<div className="relative flex">
						<input
							type={showPassword ? 'password' : 'text'}
							className="border py-2 w-full pl-3 pr-10" // Added pr-10 for padding on the right
							placeholder="Password"
							{...register('password', {
								required: true,
							})}
						/>
						<p
							className="absolute inset-y-0 right-0 mt-2 mr-4 cursor-pointer"
							onClick={handleTogglePassword}
						>
							{showPassword ? (
								<FaEye className="text-2xl"></FaEye>
							) : (
								<FaEyeSlash className="text-2xl"></FaEyeSlash>
							)}
						</p>
					</div>

					<Link to="/signUp">
						<p className="text-[#0C4B65] underline py-4">
							Don't Have an Account? Please Sign Up
						</p>
					</Link>

					<button className="relative w-full border-2 border-[#0C4B65] bg-transparent py-2.5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-[#0C4B65] before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
						Login
					</button>
				</form>
				<div className="text-center mt-3">
					<SocialLogin></SocialLogin>
				</div>
			</div>
		</div>
	);
};

export default Login;
