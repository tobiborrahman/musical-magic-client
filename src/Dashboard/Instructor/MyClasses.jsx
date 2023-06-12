import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyClasses = () => {
	const { user } = useAuth();
	const [myClasses, setMyClasses] = useState([]);

	useEffect(() => {
		fetch(
			`https://final-assignment-server-virid.vercel.app/addedClasses/${user?.email}`,
			{
				method: 'GET',
				headers: {
					'content-type': 'application/json',
				},
			}
		)
			.then((res) => res.json())
			.then((data) => {
				// console.log(data);
				setMyClasses(data);
			});
	}, []);

	return (
		<div className="w-full">
			<div>
				<div>
					<div className="flex justify-between">
						<th>#</th>
						<th>Image</th>
						<th>Seats</th>
						<th>Price</th>
						<th>Status</th>
						<th>Enrolled Students</th>
						<th>Feedback</th>
						<th>Update</th>
					</div>
				</div>
				{myClasses.map((classes, index) => (
					<div className="overflow-x-auto">
						<table className="table">
							{/* head */}

							<tbody>
								{/* row 1 */}
								<tr>
									<td>{index + 1}</td>
									<td>
										<div className="flex items-center space-x-3">
											<div className="avatar">
												<div className="mask mask-squircle w-12 h-12">
													<img
														src={classes.photoUrl}
														alt="Avatar Tailwind CSS Component"
													/>
												</div>
											</div>
										</div>
									</td>
									<td>{classes.seats}</td>
									<td>{classes.price}</td>
									<td>Pending{classes.status}</td>
									<td>Price: {classes.price}</td>
									<td>{classes.price}</td>
									<td>
										<button className="btn btn-ghost btn-xs  hover:text-white  duration-700 text-[#0C4B65] bg-[#EFCF4F] hover:bg-[#0C4B65] mt-3 ">
											Feedback
										</button>
									</td>
									<td>
										<button className="btn btn-ghost btn-xs  text-white  duration-700  hover:text-[#0C4B65] hover:bg-[#EFCF4F] bg-[#0C4B65] mt-3 ">
											Update
										</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				))}
			</div>
		</div>
	);
};

export default MyClasses;
