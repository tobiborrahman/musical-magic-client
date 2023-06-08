import React, { useEffect, useState } from 'react';

const ManageUsers = () => {
	const [users, setUsers] = useState([]);
	useEffect('http://localhost:5000/users')
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
		});
	return (
		<div>
			<h2>manage users</h2>
		</div>
	);
};

export default ManageUsers;
