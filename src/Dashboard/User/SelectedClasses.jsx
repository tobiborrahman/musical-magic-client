import React, { useEffect, useState } from 'react';
import SingleSelectedClasses from './SingleSelectedClasses';

const SelectedClasses = () => {
	const [selectedClasses, setSelectedClasses] = useState([]);
	useEffect(() => {
		fetch('http://localhost:5000/class')
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
				<button className="btn btn-md bg-yellow-300">Pay</button>
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
