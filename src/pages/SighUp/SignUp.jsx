import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);
	console.log(errors);

	return (
		<div className="flex justify-center items-center my-20">
			<form
				className="w-[500px] p-10 border"
				onSubmit={handleSubmit(onSubmit)}
			>
				<h1 className="text-center text-[#0C4B65] text-6xl font-bold pb-10">
					Sign Up
				</h1>
				<input
					type="text"
					className="border py-2 w-full mb-3 pl-3"
					placeholder="name"
					{...register('name', {
						required: true,
						maxLength: 80,
					})}
				/>
				<br />
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
					type="password"
					className="border py-2 w-full mb-3 pl-3"
					placeholder="Password"
					{...register('password', {
						required: true,
					})}
				/>

				<input
					type="password"
					className="border py-2 w-full mb-3 pl-3"
					placeholder="Confirm Password"
					{...register('confirmPassword', {
						required: true,
					})}
				/>

				<input
					type="url"
					className="border py-2 w-full pl-3"
					placeholder="photoURL"
					{...register('photoUrl', {
						required: true,
					})}
				/>

				<Link to="/login">
					<p className="text-[#0C4B65] underline mt-3">
						Already Have an Account? Sign In
					</p>
				</Link>

				<input
					className="py-2 px-5 text-white text-2xl duration-700 font-bold hover:text-[#0C4B65] hover:bg-[#EFCF4F] bg-[#0C4B65] mt-3 "
					type="submit"
					value="Sign Up"
				/>
			</form>
		</div>
	);
};

export default SignUp;
