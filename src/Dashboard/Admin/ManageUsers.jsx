import React, { useEffect, useState } from 'react';

const ManageUsers = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/users', {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setUsers(data);
			});
	}, []);

	return (
		<div className="w-3/4">
			<div className="flex justify-around items-center bg-gray-200 py-2 mb-3">
				<h3 className="font-bold">User Name</h3>
				<h3 className="font-bold">User Email</h3>
				<h3 className="font-bold">Make Admin Button</h3>
				<h3 className="font-bold">Make Instructor Button</h3>
			</div>
			{users.map((user) => (
				<>
					<div className="flex justify-around items-center">
						<p>{user.name}</p>
						<p>{user.email}</p>
						<button className="btn btn-ghost btn-xs  hover:text-white  duration-700 text-[#0C4B65] bg-[#EFCF4F] hover:bg-[#0C4B65] mt-3 ">
							Make Admin
						</button>
						<button className="btn btn-ghost btn-xs  text-white  duration-700  hover:text-[#0C4B65] hover:bg-[#EFCF4F] bg-[#0C4B65] mt-3 ">
							Make Instructor
						</button>
					</div>
					<div className="divider"></div>
				</>
			))}
		</div>
	);
};

export default ManageUsers;
