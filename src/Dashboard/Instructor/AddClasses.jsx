import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AddClasses = () => {
	const { user } = useAuth();
	const [axiosSecure] = useAxiosSecure();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	const onSubmit = (data) => {
		fetch('https://final-assignment-server-virid.vercel.app/addedClasses', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.insertedId) {
					Swal.fire({
						position: 'center',
						icon: 'success',
						title: `Class added to the approved list`,
						showConfirmButton: false,
						timer: 1500,
					});
					reset();
				}
			});
	};
	console.log(errors);

	return (
		<div className="flex justify-center items-center my-20">
			<form
				className="w-[500px] p-10 border"
				onSubmit={handleSubmit(onSubmit)}
			>
				<h1 className="text-center text-[#0C4B65] text-4xl font-bold pb-10">
					Add a Class
				</h1>
				<input
					type="text"
					className="border py-2 w-full pl-3"
					placeholder="Class Name"
					{...register('className', {
						required: true,
						maxLength: 80,
					})}
				/>
				<input
					type="url"
					className="border py-2 w-full pl-3 my-3"
					placeholder="photoURL"
					{...register('photoUrl', {
						required: true,
					})}
				/>

				<input
					type="text"
					className="border py-2 w-full mb-3 pl-3"
					placeholder="Instructor Name"
					defaultValue={user?.displayName}
					{...register('instructorName', {
						required: true,
						maxLength: 80,
					})}
				/>
				<br />
				<input
					type="email"
					className="border py-2 w-full mb-3 pl-3"
					defaultValue={user?.email}
					placeholder="Instructor Email"
					{...register('email', {
						required: true,
					})}
				/>
				<br />
				<input
					type="number"
					className="border py-2 w-full mb-3 pl-3"
					placeholder="Available Seats"
					{...register('seats', {})}
				/>

				<input
					type="number"
					className="border py-2 w-full mb-3 pl-3"
					placeholder="Price"
					{...register('price', {})}
				/>

				<input
					type="text"
					className="border py-2 w-full mb-3 pl-3"
					placeholder="Status"
					{...register('status', {})}
				/>

				<input
					className="py-2 px-5 w-full text-white text-2xl duration-700 font-bold hover:text-[#0C4B65] hover:bg-[#EFCF4F] bg-[#0C4B65] mt-3 "
					type="submit"
					value="Add Class"
				/>
			</form>
		</div>
	);
};

export default AddClasses;
