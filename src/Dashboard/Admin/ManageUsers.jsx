import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { FaUserShield, FaUsers } from 'react-icons/fa';

const ManageUsers = () => {
	const [axiosSecure] = useAxiosSecure();
	const { data: users = [] } = useQuery(['users'], async () => {
		const res = await axiosSecure.get('/users');
		return res.data;
	});

	const handleMakeAdmin = (user) => {
		fetch(`http://localhost:5000/users/admin/${user._id}`, {
			method: 'PATCH',
		})
			.then((res) => res.json())
			.then((data) => {
				// console.log(data);
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
	const handleMakeInstructor = (user) => {
		fetch(`http://localhost:5000/users/instructor/${user._id}`, {
			method: 'PATCH',
		})
			.then((res) => res.json())
			.then((data) => {
				// console.log(data);
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

		fetch('http://localhost:5000/instructors', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(user),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
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
									{user.role === 'admin' ? (
										'Admin'
									) : (
										<button
											onClick={() =>
												handleMakeAdmin(user)
											}
											className="btn bg-orange-300 btn-md text-2xl"
										>
											<FaUserShield></FaUserShield>
										</button>
									)}
								</td>
								<td>
									{user.role === 'instructor' ? (
										'Instructor'
									) : (
										<button
											onClick={() =>
												handleMakeInstructor(user)
											}
											className="btn bg-orange-300 btn-md text-2xl"
										>
											<FaUsers></FaUsers>
										</button>
									)}
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
