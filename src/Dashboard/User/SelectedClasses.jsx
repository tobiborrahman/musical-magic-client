import React, { useEffect, useState } from 'react';
import SingleSelectedClasses from './SingleSelectedClasses';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SelectedClasses = () => {
	const { user } = useAuth();

	const [selectedClasses, setSelectedClasses] = useState([]);

	const total = selectedClasses?.reduce(
		(sum, item) => parseFloat(item.price) + sum,
		0
	);

	useEffect(() => {
		fetch(
			`https://final-assignment-server-virid.vercel.app/class/${user?.email}`
		)
			.then((res) => res.json())
			.then((data) => {
				// console.log(data);
				setSelectedClasses(data);
			});
	}, []);

	return (
		<div className="w-full rounded-md mx-5">
			<div className="flex justify-around items-center">
				<h2 className="text-3xl text-center my-10">
					My selected classes: {selectedClasses.length}{' '}
				</h2>
				<h2 className="text-3xl text-center my-10">
					Total Amount: {total}{' '}
				</h2>
				<Link to="/dashboard/payment">
					<button className="btn btn-md bg-yellow-300">Pay</button>
				</Link>
			</div>
			<div>
				<div className="flex justify-between items-center px-10 bg-gray-200 py-3">
					<th>Class Name</th>
					<th>Instructor Name</th>
					<th>Price</th>
					<th>Action</th>
				</div>
			</div>

			{selectedClasses.map((classes) => (
				<SingleSelectedClasses
					key={classes._id}
					classes={classes}
				></SingleSelectedClasses>
			))}
		</div>
	);
};

export default SelectedClasses;
