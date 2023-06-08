import { useQuery } from '@tanstack/react-query';
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
												className=" text-white py-2 px-2 duration-700 font-bold hover:text-[#0C4B65] hover:bg-[#EFCF4F] bg-[#0C4B65]  rounded-md mr-5"
											>
												Admin
											</button>

											<button
												onClick={() =>
													handleRoleChange(
														user,
														'instructor'
													)
												}
												className=" text-white py-2 px-2 duration-700 font-bold hover:text-[#0C4B65] hover:bg-[#EFCF4F] bg-[#0C4B65] rounded-md"
											>
												Instructor
											</button>
										</>
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
