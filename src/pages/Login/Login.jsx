import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
	const [showPassword, setShowPassword] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);

	console.log(errors);

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
					type={showPassword ? 'text' : 'password'}
					className="border py-2 w-full pl-3"
					placeholder="Password"
					onClick={handleTogglePassword}
					{...register('password', {
						required: true,
					})}
				/>
				<p className="mt-2" onClick={handleTogglePassword}>
					{showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
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
		</div>
	);
};

export default Login;
