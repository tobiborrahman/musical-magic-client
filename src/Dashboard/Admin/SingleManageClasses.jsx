import React, { useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const SingleManageClasses = ({ classes }) => {
	const [axiosSecure] = useAxiosSecure();
	const handleApprove = (id) => {
		axiosSecure.patch(`/addedClasses/approved/${id}`).then((res) => {
			console.log(res.data);
		});

		axiosSecure.post('/approvedClasses', { classes }).then((res) => {
			console.log(res.data);
			if (res.data.insertedId) {
				Swal.fire({
					position: 'center',
					icon: 'success',
					title: `Class added to the courses`,
					showConfirmButton: false,
					timer: 1500,
				});
			}
		});
	};

	const handleDeny = (id) => {
		axiosSecure.patch(`/addedClasses/denied/${id}`).then((res) => {
			console.log(res.data);
		});
	};

	return (
		<div>
			<tr className="flex justify-between items-center" key={classes._id}>
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
				<td>{classes.className}</td>
				<td>{classes.instructorName}</td>
				<td>{classes.email}</td>
				<td>{classes.seats}</td>
				<td>${classes.price}</td>
				<td>{classes.status}</td>
				<td>
					{classes.status === 'approved' ||
					classes.status === 'denied' ? (
						<button
							className="py-2 px-2 duration-700 font-bold  bg-gray-200 rounded-md"
							disabled
						>
							Approved
						</button>
					) : (
						<button
							onClick={() => handleApprove(classes._id)}
							className=" text-white py-2 px-2 duration-700 font-bold  bg-[#0C4B65] rounded-md"
						>
							Approve
						</button>
					)}
				</td>
				<td>
					{classes.status === 'denied' ||
					classes.status === 'approved' ? (
						<button
							className="py-2 px-2 duration-700 font-bold  bg-gray-200 rounded-md"
							disabled
						>
							Denied
						</button>
					) : (
						<button
							onClick={() => handleDeny(classes._id)}
							className=" text-white py-2 px-2 duration-700 font-bold   bg-[#0C4B65] rounded-md"
						>
							Deny
						</button>
					)}
				</td>
				<td>
					<button className=" text-white py-2 px-2 duration-700 font-bold  bg-[#0C4B65] rounded-md">
						Feedback
					</button>
				</td>
			</tr>
		</div>
	);
};

export default SingleManageClasses;
