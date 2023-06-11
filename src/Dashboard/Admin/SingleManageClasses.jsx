import React, { useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const SingleManageClasses = ({ classes }) => {
	const [status, setStatus] = useState('pending');
	const [isApproveButtonDisabled, setIsApproveButtonDisabled] =
		useState(false);
	const [isDenyButtonDisabled, setIsDenyButtonDisabled] = useState(false);
	const [axiosSecure] = useAxiosSecure();
	const handleApprove = () => {
		setStatus('approved');
		setIsApproveButtonDisabled(true);

		axiosSecure.post('/approvedClasses', { classes }).then((res) => {
			console.log(res.data);
		});
	};

	const handleDeny = () => {
		setStatus('denied');
		setIsDenyButtonDisabled(true);
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
				<td>{status}</td>
				<td>
					<button
						onClick={handleApprove}
						disabled={status !== 'pending'}
						style={{
							backgroundColor:
								status !== 'pending'
									? 'gray'
									: ' text-white py-2 px-2 duration-700 font-bold  bg-[#0C4B65] rounded-md',
						}}
						className=" text-white py-2 px-2 duration-700 font-bold  bg-[#0C4B65] rounded-md"
					>
						Approve
					</button>
				</td>
				<td>
					<button
						onClick={handleDeny}
						disabled={isDenyButtonDisabled}
						style={{
							backgroundColor: isDenyButtonDisabled
								? 'gray'
								: ' text-white py-2 px-2 duration-700 font-bold   bg-[#0C4B65] rounded-md',
						}}
						className=" text-white py-2 px-2 duration-700 font-bold   bg-[#0C4B65] rounded-md"
					>
						Deny
					</button>
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
