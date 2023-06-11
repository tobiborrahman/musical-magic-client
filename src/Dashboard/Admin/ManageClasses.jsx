import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import SingleManageClasses from './SingleManageClasses';

const ManageClasses = () => {
	const [manageClasses, setManageClasses] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/addedClasses', {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((data) => {
				// console.log(data);
				setManageClasses(data);
			});
	}, []);

	return (
		<div className="w-full">
			<div className="overflow-x-auto">
				<table className="table ">
					{/* head */}
					<thead className="w-3/4">
						<div className="flex justify-between items-center">
							<th>Class Image</th>
							<th>Class Name</th>
							<th>Instructor Name</th>
							<th>Ins Email</th>
							<th>Seats</th>
							<th>Price</th>
							<th>Status</th>
							<th>Buttons</th>
						</div>
					</thead>
					<tbody className="w-full">
						{manageClasses.map((classes) => (
							<SingleManageClasses
								key={classes._id}
								classes={classes}
							></SingleManageClasses>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ManageClasses;
