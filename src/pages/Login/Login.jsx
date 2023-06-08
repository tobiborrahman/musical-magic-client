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
	} = useForm();
	const onSubmit = (data) => {
		signIn(data.email, data.password)
			.then((res) => {
				console.log(res.user);
				navigate(from, { replace: true });
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
			<form
				className="w-[500px] p-10 border"
				onSubmit={handleSubmit(onSubmit)}
			>
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
				<input
					type={showPassword ? 'password' : 'text'}
					className="border py-2 w-full pl-3"
					placeholder="Password"
					onClick={handleTogglePassword}
					{...register('password', {
						required: true,
					})}
				/>
				<p className="mt-2" onClick={handleTogglePassword}>
					{showPassword ? (
						<FaEyeSlash className="text-2xl"></FaEyeSlash>
					) : (
						<FaEye className="text-2xl"></FaEye>
					)}
				</p>

				<br />

				<Link to="/signUp">
					<p className="text-[#0C4B65] underline">
						Don't Have an Account? Please Sign Up
					</p>
				</Link>

				<input
					className="py-2 px-5 text-white text-2xl duration-700 font-bold hover:text-[#0C4B65] hover:bg-[#EFCF4F] bg-[#0C4B65] mt-3"
					type="submit"
					value="Login"
				/>
			</form>
			<SocialLogin></SocialLogin>
		</div>
	);
};

export default Login;
