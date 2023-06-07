import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);
	console.log(errors);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input
				type="text"
				placeholder="First name"
				{...register('First name', { required: true, maxLength: 80 })}
			/>
			<input
				type="text"
				placeholder="Last name"
				{...register('Last name', { required: true, maxLength: 100 })}
			/>
			<input
				type="text"
				placeholder="Email"
				{...register('Email', {
					required: true,
					pattern: /^\S+@\S+$/i,
				})}
			/>
			<input
				type="tel"
				placeholder="Mobile number"
				{...register('Mobile number', {
					required: true,
					minLength: 6,
					maxLength: 12,
				})}
			/>
			<select {...register('Title', { required: true })}>
				<option value="Mr">Mr</option>
				<option value="Mrs">Mrs</option>
				<option value="Miss">Miss</option>
				<option value="Dr">Dr</option>
			</select>

			<input
				{...register('Developer', { required: true })}
				type="radio"
				value="Yes"
			/>
			<input
				{...register('Developer', { required: true })}
				type="radio"
				value="No"
			/>

			<input type="submit" />
		</form>
	);
}

// https://i.ibb.co/FD3msh6/drummer.jpg
// https://i.ibb.co/4Z6YwMr/drums.jpg
// https://i.ibb.co/RhmFS7h/drumsssss.jpg
// https://i.ibb.co/ZNN5wMn/electric-Guiter.jpg
// https://i.ibb.co/cYYbpVB/glacoster.jpg
// https://i.ibb.co/yXNNMQK/guiter.jpg
// https://i.ibb.co/vP5x17P/guiterrrrr.jpg
// https://i.ibb.co/0DdSzWg/home1.jpg
// https://i.ibb.co/pvG2yMy/home2.jpg
// https://i.ibb.co/BsqJfsc/instruments.jpg
// https://i.ibb.co/cQyQJ5p/keys.jpg
// https://i.ibb.co/PWcV1f9/roth.jpg
// https://i.ibb.co/VpMj7Bh/saxophone.jpg
// https://i.ibb.co/NryctsC/violin.jpg
// https://i.ibb.co/hVMkg4N/violin1111111.jpg
// https://i.ibb.co/hVMkg4N/violin1111111.jpg
// https://i.ibb.co/GvBp9PG/trumpettttt.jpg
// https://i.ibb.co/cQyQJ5p/keys.jpg
// https://i.ibb.co/PWcV1f9/roth.jpg




// https://i.ibb.co/9bBgzQ7/man111.jpg
// https://i.ibb.co/zm9cQCw/man222.jpg
// https://i.ibb.co/S7194hZ/man333.jpg
// https://i.ibb.co/k1m2bTy/man444.jpg
// https://i.ibb.co/8MNtwb2/man555.jpg
// https://i.ibb.co/gVgkJfw/man666.jpg