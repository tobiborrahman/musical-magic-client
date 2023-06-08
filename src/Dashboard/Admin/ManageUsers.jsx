// import React, { useEffect, useState } from 'react';

// const ManageUsers = () => {
// 	const [users, setUsers] = useState([]);

// 	useEffect(() => {
// 		fetch('http://localhost:5000/users', {
// 			method: 'GET',
// 			headers: {
// 				'content-type': 'application/json',
// 			},
// 		})
// 			.then((res) => res.json())
// 			.then((data) => {
// 				setUsers(data);
// 			});
// 	}, []);

// 	return (
// 		<div className="w-3/4">
// 			<div className="flex justify-around items-center bg-gray-200 py-2 mb-3">
// 				<h3 className="font-bold">User Name</h3>
// 				<h3 className="font-bold">User Email</h3>
// 				<h3 className="font-bold">Make Admin Button</h3>
// 				<h3 className="font-bold">Make Instructor Button</h3>
// 			</div>
// 			{users.map((user) => (
// 				<>
// 					<div className="flex justify-around items-center">
// 						<p>{user.name}</p>
// 						<p>{user.email}</p>
// 						<button className="btn btn-ghost btn-xs  hover:text-white  duration-700 text-[#0C4B65] bg-[#EFCF4F] hover:bg-[#0C4B65] mt-3 ">
// 							Make Admin
// 						</button>
// 						<button className="btn btn-ghost btn-xs  text-white  duration-700  hover:text-[#0C4B65] hover:bg-[#EFCF4F] bg-[#0C4B65] mt-3 ">
// 							Make Instructor
// 						</button>
// 					</div>
// 					<div className="divider"></div>
// 				</>
// 			))}
// 		</div>
// 	);
// };

// export default ManageUsers;

import { useQuery } from '@tanstack/react-query';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const ManageUsers = () => {
	const [axiosSecure] = useAxiosSecure();
	const { data: users = [] } = useQuery(['users'], async () => {
		const res = await axiosSecure.get('/users');
		return res.data;
	});

	const handleRoleChange = (user, newRole) => {
		fetch(`http://localhost:5000/users/role/${user._id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ role: newRole }),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.modifiedCount) {
					Swal.fire({
						position: 'top-end',
						icon: 'success',
						title: `${user.name} role has been changed!`,
						showConfirmButton: false,
						timer: 1500,
					});
				}
			});
	};

	const handleDelete = (user) => {
		console.log(user);
	};

	return (
		<div>
			<h1 className="text-2xl text-center my-5">
				Total Users: {users.length}
			</h1>
			<div className="overflow-x-auto w-full">
				<table className="table w-full">
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Email</th>
							<th>Role</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user, index) => (
							<tr key={user._id}>
								<th>{index + 1}</th>
								<td>{user.name}</td>
								<td>{user.email}</td>
								<td>
									{user.role === 'admin'
										? 'Admin'
										: user.role === 'user'
										? 'User'
										: user.role === 'instructor'
										? 'Instructor'
										: ''}
								</td>
								<td>
									{user.role === 'admin' ? (
										<button
											disabled
											className="btn bg-gray-400 btn-md text-2xl"
										>
											Admin
										</button>
									) : (
										<>
											<button
												onClick={() =>
													handleRoleChange(
														user,
														'admin'
													)
												}
												className="btn bg-orange-300 btn-md text-2xl"
											>
												Admin
											</button>
											<button
												onClick={() =>
													handleRoleChange(
														user,
														'user'
													)
												}
												className="btn bg-blue-300 btn-md text-2xl"
											>
												User
											</button>
											<button
												onClick={() =>
													handleRoleChange(
														user,
														'instructor'
													)
												}
												className="btn bg-green-300 btn-md text-2xl"
											>
												Instructor
											</button>
										</>
									)}
								</td>
								<td>
									<button
										onClick={() => handleDelete(user)}
										className="btn bg-red-500 btn-md text-2xl"
									>
										<FaTrashAlt></FaTrashAlt>
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ManageUsers;
