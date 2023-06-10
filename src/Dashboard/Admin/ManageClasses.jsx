import React, { useEffect, useState } from 'react';

const ManageClasses = () => {
	const [popularClasses, setPopularClasses] = useState([]);

	const [status, setStatus] = useState('pending');
	const [isApproveButtonDisabled, setIsApproveButtonDisabled] =
		useState(false);
	const [isDenyButtonDisabled, setIsDenyButtonDisabled] = useState(false);

	const handleApprove = () => {
		setStatus('approved');
		setIsApproveButtonDisabled(true);
	};

	const handleDeny = () => {
		setStatus('denied');
		setIsDenyButtonDisabled(true);
	};

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
				setPopularClasses(data);
			});
	}, []);

	return (
		<div>
			<div className="overflow-x-auto w-full">
				<table className="table ">
					{/* head */}
					<div className="w-full">
						<div className="w-full flex justify-self-end items-center">
							<th>Class Image</th>
							<th>Class Name</th>
							<th>Instructor Name</th>
							<th>Ins Email</th>
							<th>Seats</th>
							<th>Price</th>
							<th>Status</th>
							<th>Buttons</th>
						</div>
					</div>
					<div className="w-full">
						{popularClasses.map((classes) => (
							<>
								<div
									className="w-full mx-0 px-0 flex justify-between items-center"
									key={classes._id}
								>
									<td></td>
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
												backgroundColor:
													isDenyButtonDisabled
														? 'gray'
														: ' text-white py-2 px-2 duration-700 font-bold   bg-[#0C4B65] rounded-md',
											}}
											className=" text-white py-2 px-2 duration-700 font-bold   bg-[#0C4B65] rounded-md"
										>
											Deny
										</button>
									</td>
									<td>
										{/* <button className=" text-white py-2 px-2 duration-700 font-bold  bg-[#0C4B65] rounded-md">
											Feedback
										</button> */}
									</td>
								</div>
							</>
						))}
					</div>
				</table>
			</div>
		</div>
	);
};

export default ManageClasses;
